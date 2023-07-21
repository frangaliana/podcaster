import { styled } from 'styled-components'

import { Body1Styles, Input1Styles } from '~/components/Text'

export const Badge = styled.span`
  ${Body1Styles}
  background-color: ${({ theme }) => theme.colors.primary.brightPurple};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.background.white};
  padding: 0.25rem;
`

export const Container = styled.section`
  display: grid;
  gap: 2rem;
  padding: 0 1rem;
`

export const Input = styled.input`
  ${Input1Styles}
  border: 0.0625rem solid ${({ theme }) => theme.colors.neutral.grey20};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.text.input};
  padding: 0.5rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }
`

export const Podcasts = styled.ul`
  display: grid;
  gap: 5rem 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 2.5rem;
`

export const SearchBar = styled.div`
  align-items: center;
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: column;
  justify-content: end;
`
