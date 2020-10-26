import { StateType } from './initialState';
import { ResultType } from './SearchProvider';

export type ActionType =
  | { isOpen: boolean; type: 'set_search_open' }
  | { q: string; type: 'set_search_q' }
  | { results: ResultType[]; type: 'set_search_results' };

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'set_search_open':
      const { isOpen } = action;
      return {
        ...state,
        isOpen,
      };
    case 'set_search_q':
      const { q } = action;
      return {
        ...state,
        q,
      };
    case 'set_search_results':
      const { results } = action;
      return {
        ...state,
        results,
      };

    default:
      const { type } = action;
      throw Error(`Reducer does not contain case ${type}`);
  }
};

export default reducer;
