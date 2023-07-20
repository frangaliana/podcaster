import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

import { Body1, Body2 } from '~/components/Text'

export const Author = styled(Body2)`
  color: ${({ theme }) => theme.colors.neutral.grey20};
`

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.colors.background.white};
  box-shadow: ${({ theme }) => theme.shadows.extralight};
  display: grid;
  gap: 0.25rem;
  grid-auto-rows: min-content;
  height: 100%;
  padding: 3.5rem 1rem 1rem;
  position: relative;
  text-align: center;
`

export const Image = styled.img`
  border-radius: 50%;
  height: 5rem;
  object-fit: cover;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: -2.5rem;
  width: 5rem;
`

export const Title = styled(Body1)`
  color: ${({ theme }) => theme.colors.text.main};
`
