import Paper, { PaperProps } from '@material-ui/core/Paper';
import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const customStyle = {
  flex: '1 1 auto',
  margin: 0,
  padding: 16,
};

const SyntaxHighlighter: React.FC<PaperProps> = ({ children, style, ...rest }) => {
  const child = typeof children === 'string' ? children : `${children}`;
  return (
    <Paper
      elevation={2}
      style={{
        display: 'flex',
        flex: '1 1 auto',
        flexFlow: 'column',
        margin: 8,
        ...style,
      }}
      {...rest}
    >
      <ReactSyntaxHighlighter customStyle={customStyle} language="javascript" style={docco}>
        {child}
      </ReactSyntaxHighlighter>
    </Paper>
  );
};

export default SyntaxHighlighter;
