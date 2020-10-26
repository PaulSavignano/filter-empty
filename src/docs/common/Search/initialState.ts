import { ResultType } from './SearchProvider';

export interface StateType {
  isOpen: boolean;
  q: string;
  results: ResultType[];
}

const initialState: StateType = {
  isOpen: false,
  q: '',
  results: [] as ResultType[],
};

export default initialState;
