import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    highlight: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.black,
      fontStyle: 'italic',
    },
  })
);

const HighlightHtml: React.FC<{ className?: string; highlightText: string }> = ({
  children,
  className,
  highlightText,
}) => {
  const classes = useStyles();
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const spanEls = ref && ref.current && ref.current.querySelectorAll('span');
    if (spanEls && spanEls.length) {
      spanEls.forEach((span) => {
        if (span.innerHTML.includes(highlightText)) {
          const cleaned = span.innerHTML.replace(/<[^>]*>?/gm, '');
          const parts = cleaned.split(new RegExp(`(${highlightText})`, 'i')).filter(Boolean);
          ReactDOM.render(
            <span>
              {parts.map((part, i) => {
                if (part.toLowerCase() === highlightText.toLowerCase()) {
                  return (
                    <span className={classes.highlight} key={i}>
                      {part}
                    </span>
                  );
                }
                return <span key={i}>{part}</span>;
              })}
            </span>,
            span
          );
        }
      });
    }
  }, [classes.highlight, highlightText]);
  return (
    <span className={className} ref={ref}>
      {children}
    </span>
  );
};

export default HighlightHtml;
