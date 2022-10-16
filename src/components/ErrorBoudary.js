import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="centered">
          <span>Something went wrong. Please refresh the page or</span>
          <a href="/">click here</a>
        </div>
      );
    }

    return this.props.children;
  }
}
