import { RoutesType, ComponentType } from '../../pages';
import getSlug from '../getSlug';
import isObject from '../isObject';

export interface ResultType {
  components: ComponentType[];
  route: string;
}

const recursor = ({
  grandParent,
  parent,
  q,
  result,
  route,
  value,
}: {
  grandParent: any;
  parent: any;
  q: string;
  result: ResultType[];
  route: string;
  value: any;
}): void => {
  if (!isObject(value)) {
    if (parent.children) {
      console.log('we have it ', { grandParent, parent, value });
      const isResult = value.toLowerCase().includes(q.toLowerCase());
      if (isResult) {
        if (parent.component[0] === 'H') {
          // we have a heading
          const headingIndex = grandParent.findIndex((e: any) => e.children === value);
          const body = grandParent.find(
            (c: any, i: any) => c.component[0] !== 'H' && i > headingIndex
          );
          const heading = { children: value, component: parent.component };
          const slug = getSlug(value);
          result.push({
            components: [heading, body],
            route: `${route}#${slug}`,
          });
        } else {
          // we have a body
          const bodyIndex = grandParent.findIndex((e: any) => e.children === value);
          const heading = grandParent.find(
            (c: any, i: any) => c.component[0] === 'H' && i < bodyIndex
          );
          const body = { children: value, component: parent.component };
          const slug = getSlug(heading.children);
          result.push({
            components: [heading, body],
            route: `${route}#${slug}`,
          });
        }
      }
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((v) =>
      recursor({
        grandParent: parent,
        parent: value,
        q,
        result,
        route,
        value: v,
      })
    );
    return;
  }

  const keys = Object.keys(value);
  if (keys && keys.length) {
    Object.keys(value).forEach((v) =>
      recursor({
        grandParent: parent,
        parent: value,
        q,
        result,
        route,
        value: value[v],
      })
    );
    return;
  }
};

const search = ({ q, routes }: { q: string; routes: RoutesType }): ResultType[] => {
  const result: any[] = [];
  Object.keys(routes).forEach((key) => {
    const route = routes[key];
    recursor({
      grandParent: {} as any,
      parent: {} as ComponentType,
      q,
      result,
      route: key,
      value: route,
    });
  });

  return result;
};

export default search;
