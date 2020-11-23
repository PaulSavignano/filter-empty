import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import SnackbarContext from './Snackbar/SnackbarContext';

interface IconButtonProps extends MuiIconButtonProps {
  title: string;
  to?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ children, onClick, title, to }) => {
  const { isOpen } = useContext(SnackbarContext);

  const iconButtonProps = to
    ? {
        'aria-label': title,
        component: Link,
        onClick,
        to,
      }
    : {
        'aria-label': title,
        onClick,
      };

  if (isOpen) {
    return (
      <MuiIconButton color="inherit" {...iconButtonProps}>
        {children}
      </MuiIconButton>
    );
  }

  return (
    <Tooltip enterDelay={300} title={title}>
      <MuiIconButton color="inherit" {...iconButtonProps}>
        {children}
      </MuiIconButton>
    </Tooltip>
  );
};

export default IconButton;
