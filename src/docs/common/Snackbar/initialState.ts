import { SnackbarState } from './types';

const initialState: SnackbarState = {
  isOpen: false,
  message: '',
  severity: 'info',
};

export default initialState;
