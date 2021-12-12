import Botao from '../Botao'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Esolha um Card e Inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
      <Relogio />
      </div>
        <Botao texto="Começar!" />
    </div>
  )
}
