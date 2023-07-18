import { Component, lazy } from 'react'

const InternalError = lazy(() => import('~/pages/errors/Internal'))
const NotFoundError = lazy(() => import('~/pages/errors/NotFound'))

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: undefined }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.error) {
      switch (this.state.error.name) {
        case 'NotFoundException':
          return <NotFoundError />
        case 'InternalException':
        default:
          return <InternalError />
      }
    }

    return this.props.children
  }
}
