import './App.css';
import { useState } from 'react'
import Message from './components/Message';
import HandleMessage from './components/HandleMessage';

function App() {

  //Exemplo 1 - Mostrar mensagem:
  // Definindo um estado inicial no compoente pai:
  
  const [message, setMessage] = useState('');

  //Definindo uma função que altera o valor do estado:

  const handleMessage = (msg) => {
    setMessage(msg)
  }
 
  return (
    <div className="App">
    <h1>State Lift - Mensagem de boas vindas</h1>
    <Message msg={message}/>
    <HandleMessage handleMessage={handleMessage} />    
    </div>
  );
}
export default App;
