
import Banner from './Componentes/Banner/Banner.js';
// import CampoTexto from './Componentes/CampoTexto/index.js';
import Formulario from './Componentes/Formulario/index.js';
// import ListaSuspensa from './Componentes/ListaSuspensa/index.js';
import { useState } from 'react';
import Armazem from './Componentes/armazem/index.js';




function App() {
  const local = [
    {
      Nome:'Armario 4',
      corPrimaria:'#FFFFE0',
      corSecundaria:'#DCDCDC',
    },
    {
      Nome:'Armario 5',
      corPrimaria:'#FFE4B5',
      corSecundaria:'#A9A9A9',
    },
    {
      Nome:'Armario 6',
      corPrimaria:'#F0E68C',
      corSecundaria:'#808080',
    },
    {
      Nome:'Armario 7',
      corPrimaria:'#BDB76B',
      corSecundaria:'#696969',
    },
    {
      Nome:'1° subsolo',
      corPrimaria:'#FFFF00',
      corSecundaria:'#708090',
    },
  ]
  const [equipamentos, setEquipamentos] = useState ([])

  const aoNovoEquipamentoAdicionado = (equipamento) =>{
  console.log(equipamento)
  setEquipamentos([...equipamentos, equipamento])

  }   
  return (
    <div className="App">
      <Banner />
      <Formulario local={local.map(local => local.Nome)} aoEquipamentoCadastrado = {equipamento => aoNovoEquipamentoAdicionado (equipamento)}/>

      {local.map( local => <Armazem 
        key={local.Nome} 
        Nome={local.Nome} 
        corPrimaria={local.corPrimaria} 
        corSecundaria={local.corSecundaria}
        equipamentos={equipamentos.filter(equipamento => equipamento.armazem === local.Nome)}
        //equipamentos={equipamentos}
      />)}
    </div>
  );
}

export default App;