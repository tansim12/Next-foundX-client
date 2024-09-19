import { Component, ReactNode } from "react";

type TErrorProps = {
  fallback: ReactNode;
  children: ReactNode;
};

type TErrorState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<TErrorProps, TErrorState> {
  constructor(props: TErrorProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): TErrorState {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
