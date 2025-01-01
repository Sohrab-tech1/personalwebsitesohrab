import React from 'react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-light p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong.</h2>
          <p className="text-gray-600 mb-6">We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.</p>
          <Button
            onClick={() => this.setState({ hasError: false })}
            className="button-gradient text-white"
          >
            Try Again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

