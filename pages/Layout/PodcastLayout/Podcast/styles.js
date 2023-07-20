import { Link as DefaultLink } from 'react-router-dom'
import { styled } from 'styled-components'

import { Body1HighlightedStyles, Body1Styles, Body2 } from '~/components/Text'

export const Link = styled(DefaultLink)`
  width: fit-content;
`

export const Author = styled(Link)`
  ${Body1Styles}
  font-style: italic;
`

export const Description = styled(Body2)`
  word-break: break-word;
`

export const Image = styled.img`
  border-radius: 0.25rem;
  height: 12rem;
  object-fit: cover;
  width: 12rem;
`

export const Container = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.extralight};
  display: grid;
  gap: 1rem;
  padding: 1.5rem;

  ${Image} {
    justify-self: center;
  }
`

export const Content = styled.div`
  display: grid;
  gap: 0.25rem;
`

export const Header = styled.div`
  display: grid;
  gap: 0.25rem;
`

export const Separator = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.grey40};
  border-radius: 50%;
  height: 0.0625rem;
`

export const Title = styled(Link)`
  ${Body1HighlightedStyles}
`
