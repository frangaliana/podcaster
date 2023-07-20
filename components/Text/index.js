import { css, styled } from 'styled-components'

export const Body1Styles = css`
  font-family: ${({ theme }) => theme.font.families.primary};
  font-size: ${({ theme }) => theme.font.sizes.default};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  line-height: ${({ theme }) => theme.font.lineHeights.default};
`

export const Body1 = styled.span`
  ${Body1Styles}
`

export const Body2Styles = css`
  font-family: ${({ theme }) => theme.font.families.primary};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  line-height: ${({ theme }) => theme.font.lineHeights.small};
`

export const Body2 = styled.span`
  ${Body2Styles}
`

export const H1Styles = css`
  font-family: ${({ theme }) => theme.font.families.primary};
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: ${({ theme }) => theme.font.weights.semibold};
  line-height: ${({ theme }) => theme.font.lineHeights.xl};
`

export const H1 = styled.h1`
  ${H1Styles}
`