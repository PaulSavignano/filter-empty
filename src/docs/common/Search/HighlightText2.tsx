import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    highlight: {
      backgroundColor: theme.palette.primary.light,
    },
  })
);

const HighlightText: React.FC<{ highlightText: string; text: string }> = ({
  text,
  highlightText,
}) => {
  const classes = useStyles();
  const cleaned = text.replace(/<[^>]*>?/gm, '');
  const parts = cleaned.split(new RegExp(`(${highlightText})`, 'i')).filter(Boolean);
  return (
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
    </span>
  );
};

export default HighlightText;
