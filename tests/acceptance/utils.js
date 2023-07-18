import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: Provider, ...options })

export * from '@testing-library/react'
export { customRender as render, userEvent }
