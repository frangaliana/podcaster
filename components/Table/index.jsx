import { memo } from 'react'

import { Cell, Component, Header, Row, Unorderable } from './styles'

const Table = ({ headerCells, itemRows, striped, ...props }) => {
  return (
    <Component $striped={striped} {...props}>
      <thead>
        <tr>
          {headerCells.map(({ children, width }, index) => (
            <Header $width={width} key={index}>
              <Unorderable>{children}</Unorderable>
            </Header>
          ))}
        </tr>
      </thead>
      <tbody>
        {itemRows.map(({ cells, value }) => (
          <Row key={value}>
            {cells.map(({ children }, index) => (
              <Cell key={index}>{children}</Cell>
            ))}
          </Row>
        ))}
      </tbody>
    </Component>
  )
}

export default memo(Table)
