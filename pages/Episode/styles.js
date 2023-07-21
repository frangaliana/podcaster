import { styled } from 'styled-components'

import { Body1 } from '~/components/Text'

export const Player = styled.audio`
  height: 2.5rem;
  width: 100%;
`

export const Container = styled.div`
  align-items: start;
  box-shadow: ${({ theme }) => theme.shadows.extralight};
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
`

export const Description = styled(Body1)`
  font-style: italic;
  word-break: break-word;

  a {
    color: ${({ theme }) => theme.colors.text.link};
  }
`

export const Separator = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.grey40};
  border-radius: 50%;
  height: 0.0625rem;
`
