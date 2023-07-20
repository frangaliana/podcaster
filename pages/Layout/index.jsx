import { Outlet } from 'react-router-dom'

import { ROUTES } from '~/services/routing/constants'

import { Container, Header, Link } from './styles'

const Layout = () => (
  <>
    <Header>
      <Link to={ROUTES.HOME}>Podcaster</Link>
    </Header>
    <Container>
      <Outlet />
    </Container>
  </>
)

export default Layout
