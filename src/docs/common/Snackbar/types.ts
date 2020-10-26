export type Severity = 'error' | 'info' | 'success' | 'warning';

export interface SnackbarType {
  message: string;
  severity: Severity;
}

export type SnackbarAction =
  | { message: string; severity: Severity; type: 'open_snackbar' }
  | { type: 'close_snackbar' };

export interface SnackbarState {
  isOpen: boolean;
  message: string;
  severity: Severity;
}

export interface SnackbarValue extends SnackbarState {
  snackbarClose: () => void;
  snackbarOpen: (props: { message: string; severity: Severity }) => void;
}
