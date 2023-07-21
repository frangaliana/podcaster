import styled, { css } from 'styled-components'

import { Body1Styles, Body2Styles } from '../Text'

export const CellPaddingStyles = css`
  padding: 0 0.5rem 0 1rem;
`

export const Cell = styled.td`
  ${CellPaddingStyles}
  vertical-align: middle;
`

export const Component = styled.table`
  color: ${({ theme }) => theme.colors.text.input};
  width: 100%;

  ${({ $striped }) =>
    $striped
      ? css`
          ${Header} {
            background-color: ${({ theme }) => theme.colors.background.white};
          }

          ${Row}:nth-child(even) {
            background-color: ${({ theme }) => theme.colors.background.white};
          }

          ${Row}:nth-child(odd) {
            background-color: ${({ theme }) => theme.colors.neutral.grey50};
          }
        `
      : null};
`

export const Header = styled.th`
  ${Body2Styles}
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.neutral.grey40};
  height: 3rem;
  vertical-align: middle;
  text-align: unset;

  ${({ $width }) =>
    $width
      ? css`
          width: ${$width};
        `
      : null}

  :first-child {
    border-left: 0;
  }

  :last-child {
    border-right: 0;
  }
`

export const RowHeightStyles = css`
  height: 2.5rem;
`

export const Row = styled.tr`
  ${Body1Styles}
  ${RowHeightStyles}
  background-color: ${({ theme }) => theme.colors.background.white};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.neutral.grey40};
`

export const Unorderable = styled.div`
  ${CellPaddingStyles}
`
