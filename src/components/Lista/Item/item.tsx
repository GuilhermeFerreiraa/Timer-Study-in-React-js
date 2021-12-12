import style from './Item.module.scss'
import { iTarefa } from '../../../types/tarefa.js'

interface Props extends iTarefa {
  selecionaTarefa: (tarfaSelecionada: iTarefa) => void
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
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        })
      }
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
