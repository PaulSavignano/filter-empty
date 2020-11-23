import { ResultType } from './search';

export interface State {
  isOpen: boolean;
  q: string;
  results: ResultType[];
}
