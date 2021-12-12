import React from 'react'
import Botao from '../Botao'
import style from './Formulario.module.scss'
import { iTarefa } from '../../types/tarefa.js'
import { v4 as uuidV4 } from 'uuid'

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<iTarefa[]>>
}> {
  state = {
    tarefa: '',
    tempo: "00:00"
  }

  addTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.setTarefas
    (tarefasantigas => 
      [...tarefasantigas, 
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidV4()
        }
      ]
    );
    this.setState({
      tarefa: '',
      tempo: '00:00'
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicionar nova Tarefa</label>
          <input
            value={this.state.tarefa}
            onChange={event => {
              this.setState({...this.state, tarefa: event.target.value});
            }}
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
            value={this.state.tempo}
            onChange={event => {
              this.setState({...this.state, tempo: event.target.value});
            }}
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
        <Botao texto="Adicionar" type="submit"/>
      </form>
    )
  }
}

export default Formulario
