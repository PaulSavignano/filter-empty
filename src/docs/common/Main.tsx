import Fade from '@material-ui/core/Fade';
import React, { useEffect } from 'react';

const Main: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const { location, scrollTo } = window;
  useEffect(() => {
    if (!location.hash) {
      scrollTo(0, 0);
    } else {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
      }
    }
  }, [location.hash, scrollTo]);
  return (
    <Fade in>
      <main {...props} />
    </Fade>
  );
};

export default Main;
