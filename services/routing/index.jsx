import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const NotFoundError = lazy(() => import('~/pages/errors/NotFound'))

const AppRoutes = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route path="/*" element={<NotFoundError />} />
    </Routes>
  </Suspense>
)

export default AppRoutes
