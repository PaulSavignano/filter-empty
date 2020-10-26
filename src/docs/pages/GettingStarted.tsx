import React from 'react';

import filterEmpty from '../../lib';
import H1 from '../common/H1';
import H3 from '../common/H3';
import Main from '../common/Main';
import Section from '../common/Section';
import Pre from '../common/Pre';
import { obj } from '../common/examples';
import H2 from '../common/H2';

function GettingStarted() {
  return (
    <Main>
      <Section>
        <H1>Example</H1>
        <H2>Before</H2>
        <iframe
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          src="https://codesandbox.io/embed/filter-empty-typescript-cplo8?fontsize=14&hidenavigation=1&theme=dark"
          style={{ border: 0, borderRadius: 4, height: 500, overflow: 'hidden', width: '100%' }}
          title="filter-empty typescript"
        />
        <pre>
          <code>{`${filterEmpty}`}</code>
        </pre>
        <Pre>{obj}</Pre>
        <H3>After</H3>
        <Pre>{filterEmpty(obj)}</Pre>
      </Section>
    </Main>
  );
}

export default GettingStarted;
