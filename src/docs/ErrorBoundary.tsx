import { Component } from 'react';

class ErrorBoundary extends Component {
  componentDidCatch(error: Error): void {
    console.error('ErrorBoundary ', error);
  }
  render(): React.ReactNode {
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
