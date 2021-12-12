import style from './Lista.module.scss'
import Item from './Item/item'
 
import { iTarefa } from '../../types/tarefa.js'

interface Props {
  tarefas: iTarefa[],
  selecionaTarefa: (tarefaSelecionada: iTarefa) => void 
}
function Lista({tarefas, selecionaTarefa}: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item 
          selecionaTarefa={selecionaTarefa}
          key={item.id}
          {...item} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista
