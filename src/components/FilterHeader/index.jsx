import React from 'react'
import { StyledButton } from '../../styles/Components/Button/style'
import { StyledFilterHeader } from './style'

export const FilterHeader = ({currentFilt, revomeFiltered}) => {
  return (
    <StyledFilterHeader>
      <h2>Resultados para: <span>{currentFilt}</span></h2>
      <StyledButton type='button' onClick={revomeFiltered}>Limpar busca</StyledButton>
    </StyledFilterHeader>
  )
}
