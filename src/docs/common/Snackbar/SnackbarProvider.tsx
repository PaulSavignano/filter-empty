import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import React, { useCallback, useReducer, useMemo } from 'react';

import initialState from './initialState';
import reducer from './reducer';
import SnackbarContext from './SnackbarContext';
import { SnackbarValue } from './types';

const SnackbarProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const snackbarOpen: SnackbarValue['snackbarOpen'] = useCallback(({ message, severity }) => {
    dispatch({ message, severity, type: 'open_snackbar' });
  }, []);
  const snackbarClose: SnackbarValue['snackbarClose'] = useCallback(() => {
    dispatch({ type: 'close_snackbar' });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      snackbarClose,
      snackbarOpen,
    }),
    [snackbarClose, snackbarOpen, state]
  );
  return useMemo(
    () => (
      <SnackbarContext.Provider value={value}>
        {children}
        <Snackbar autoHideDuration={6000} onClose={snackbarClose} open={state.isOpen}>
          <Alert onClose={snackbarClose} severity={state.severity}>
            {state.message}
          </Alert>
        </Snackbar>
      </SnackbarContext.Provider>
    ),
    [children, snackbarClose, state.isOpen, state.message, state.severity, value]
  );
};

export default SnackbarProvider;
