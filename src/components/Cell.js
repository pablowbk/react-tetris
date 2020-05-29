import React from 'react'
import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../tetrominos'

function Cell({ type }) {
  return (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>
      Cell Component
    </StyledCell>
  )
}

export default Cell;