import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import swrConfig from '~/config/swr'
import ErrorBoundary from '~/services/erroring'
import Routes from '~/services/routing'
import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'

const App = () => {
  return (
    <SWRConfig value={swrConfig}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </SWRConfig>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
