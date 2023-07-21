import { Link as DefaultLink } from 'react-router-dom'
import { styled } from 'styled-components'

import { LinkStyles } from '~/components/Text'

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: min-content 1fr;
`

export const Count = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.extralight};
  padding: 1.5rem;
`

export const Episodes = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.extralight};
  padding: 1.5rem;
`

export const Title = styled(DefaultLink)`
  ${LinkStyles}
  color: ${({ theme }) => theme.colors.text.link};
`
