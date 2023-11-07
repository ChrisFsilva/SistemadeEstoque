import './maquina.css'

const Maquina = ({hostname, modelo, serial, corDeFundo}) => {
    return (<div className='colaborador'>
        <div className='cabecalho'style={{backgroundColor:corDeFundo}}>
            {hostname}
        </div>
        <div className='centro'>
        <h4>{hostname}</h4>
            <h5>{modelo}</h5>
            <h5>{serial}</h5>
        </div>
        <div className='rodape'>
            <img src="/imagens/logo.png" alt="logo" />
        </div>
    </div>)
}

export default Maquina