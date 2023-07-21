import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './constants'

const Home = lazy(() => import('~/pages/Home'))
const Layout = lazy(() => import('~/pages/layout'))
const NotFoundError = lazy(() => import('~/pages/errors/NotFound'))
const Podcast = lazy(() => import('~/pages/Podcast'))
const PodcastLayout = lazy(() => import('~/pages/layout/PodcastLayout'))

const AppRoutes = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route element={<PodcastLayout />}>
          <Route path={ROUTES.PODCAST} element={<Podcast />} />
        </Route>
      </Route>
      <Route path="/*" element={<NotFoundError />} />
    </Routes>
  </Suspense>
)

export default AppRoutes
