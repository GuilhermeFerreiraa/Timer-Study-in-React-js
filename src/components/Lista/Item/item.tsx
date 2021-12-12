import style from './Item.module.scss'
import { ITarefa } from '../../../types/tarefa.js'

interface Props extends ITarefa {
  selecionaTarefa: (tarfaSelecionada: ITarefa) => void
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa
}: Props) {
  return (
    <li
    className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado: ''}`}
      onClick={() => !completado && selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo} 
      {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
      </span>
    </li>
  )
}
