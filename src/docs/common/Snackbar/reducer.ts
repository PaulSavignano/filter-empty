import { SnackbarAction, SnackbarState } from './types';

function reducer(state: SnackbarState, action: SnackbarAction): SnackbarState {
  switch (action.type) {
    case 'open_snackbar': {
      const { severity, message } = action;
      return {
        ...state,
        isOpen: true,
        message,
        severity,
      };
    }
    case 'close_snackbar':
      return {
        ...state,
        isOpen: false,
        message: '',
        severity: 'info',
      };
    default:
      const { type } = action;
      throw Error(`${type} does not exist on snackbar reducer`);
  }
}

export default reducer;
