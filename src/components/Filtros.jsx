import React from "react"
import styled from "styled-components"

const FiltrosStyled = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 50px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 10px;

  }
`
const Input = styled.input`
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  height: 10px;
  width: 150px;
  border: 1px solid #2a617e;
  border-top: none;
  border-left: none;
  border-right: none;
  color: black;
  outline: none;
  ::placeholder {
    font-size: 14px;
    color: black;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 10px;
  }
`


const Select = styled.select`
  align-items: center;
  margin: 15px 0;
  font-size: 14px;
  padding: 10px;
  width: 150px;
  border: 1px solid #2a617e;
  color: black;
  outline: none;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    text-align: center;    
  }
`

export function Filtros(props) {
  return <FiltrosStyled>
    <Input
      placeholder='Pesquisar produto...'
      value={props.query}
      onChange={props.listaAtualizada}
    />

    <Input
      type='number'
      placeholder='Preço mínimo'
      value={props.precoMinimo}
      onChange={props.listaPrecoMinimo}
    />

    <Input
      type='number'
      placeholder='Preço máximo'
      value={props.precoMaximo}
      onChange={props.listaPrecoMaximo}
    />

    <span>
      <label htmlFor="sort">Ordenar: </label>
      <Select
        name="sort"
        value={props.parametroNome}
        onChange={props.listaParametroNome}

      >
        <option value="nome">Nome</option>
        <option value="valor">Valor</option>
      </Select>
    </span>
    <Select
      name="ordem"
      value={props.ordenar}
      onChange={props.listaOrdenada}

    >
      <option value={1}>Crescente</option>
      <option value={-1}>Decrescente</option>
    </Select>

  </FiltrosStyled>
}