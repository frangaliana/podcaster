import { Link as DefaultLink } from 'react-router-dom'
import { styled } from 'styled-components'

import { H1Styles } from '~/components/Text'

export const Container = styled.div`
  padding: 2.5rem 0 5.5rem;
`

export const Header = styled.nav`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.neutral.grey30};
  padding: 0.5rem 0;
`

export const Link = styled(DefaultLink)`
  ${H1Styles}
  color: ${({ theme }) => theme.colors.text.link};
`
