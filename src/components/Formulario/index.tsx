import React from 'react'
import Botao from '../Botao'
import style from './Formulario.module.scss'

class Formulario extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicionar nova Tarefa</label>
          <input
            autoComplete="off"
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você deseja fazer?"
            required
          />
          <div className={style.inputContainer}>
            <label htmlFor="tempo" className="tempo">Tempo</label>
            <input
            autoComplete="off"
              type="time"
              step="1"
              name="tempo"
              id="tempo"
              min="00:00:03"
              max="12:00:00"
              required
            />
          </div>
        </div>
        <Botao texto="Adicionar"/>
      </form>
    )
  }
}

export default Formulario
