import './Armazem.css'
import Maquina from '../maquina'

const Locais = (props) => {
    const css={
        backgroundColor: props.corSecundaria}

    return (
        (props.equipamentos.length > 0) ? <section className="Armazem" style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.Nome}</h3>
            <div className='Equipamentos'>
                {props.equipamentos.map( equipamento => <Maquina corDeFundo={props.corPrimaria} key={equipamento.hostname} hostname={equipamento.hostname} serial={equipamento.serial} modelo={equipamento.modelo} armazem={equipamento.armazem}/>)}
            </div>
        </section>
        : ' '
    )
}

export default Locais