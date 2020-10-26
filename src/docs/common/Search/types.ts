import { ResultType } from './SearchProvider';

export interface State {
  isOpen: boolean;
  q: string;
  results: ResultType[];
}
