import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './constants'

const Layout = lazy(() => import('~/pages/Layout'))
const NotFoundError = lazy(() => import('~/pages/errors/NotFound'))
const Home = lazy(() => import('~/pages/Home'))

const AppRoutes = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Route>
      <Route path="/*" element={<NotFoundError />} />
    </Routes>
  </Suspense>
)

export default AppRoutes
