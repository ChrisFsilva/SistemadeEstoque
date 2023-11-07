import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react';


const Formulario = (props) => {

    const [hostname, setHost] = useState ('')
    const [serial, setSn] = useState('')
    const [marca, setMarca] = useState ('')
    const [armazem, setArmazem] = useState ('')

    const modelo = [
        'Dell 5480',
        'Dell 5490',
        'Dell 5420',
        'Dell 5430',
        'Dell 7320',
        'Lenovo T14',
    ]
    const aoSalvar = (evento) => {
        evento.preventDefault ()
        props.aoEquipamentoCadastrado ({
            hostname,
            serial,
            marca,
            armazem
        })
        setHost ('')
        setSn ('')
        setMarca('')
        setArmazem('')

    } 
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>preencha os dados armazenar o equipamento</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Hostname" 
                    placeholder="Digite o Hostname do equipamento"
                    valor={hostname}
                    aoAlterado={valor => setHost(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Serial Number" 
                    placeholder="Digite o Serial Number do equipamento"
                    valor={serial}
                    aoAlterado={valor => setSn(valor)}
                />
                <ListaSuspensa 
                    label="Modelo" 
                    itens={modelo}
                    valor={marca}
                    aoAlterado={valor =>setMarca(valor)} 
                />
                <ListaSuspensa 
                    label="Local armazenado" 
                    itens={props.local}
                    valor={armazem}
                    aoAlterado={valor =>setArmazem(valor)}
                />
                <Botao>
                    armazenar
                </Botao>
            </form>
        </section>
    )
}
export default Formulario