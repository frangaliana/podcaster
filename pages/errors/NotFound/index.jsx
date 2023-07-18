import { ROUTES } from '~/services/routing/constants'

const NotFoundError = () => {
  window.location.replace(ROUTES.HOME)

  return null
}

export default NotFoundError
