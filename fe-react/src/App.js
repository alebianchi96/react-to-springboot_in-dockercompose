import { callCiaoFromBeSpringboot } from './service/be_springboot.service';
import { callConfigFromBeConfiguration } from './service/be_configuration.service';
import { useState } from 'react';
import './App.css';

function App() {

  const [msgBe, setMsgBe] = useState("");
  const [msgConfig, setMsgConfig] = useState("");

  async function callExample() {
    let msgBe = await callCiaoFromBeSpringboot();
    setMsgBe(msgBe);
    let msgConfig = await callConfigFromBeConfiguration();
    setMsgConfig(msgConfig);
  }

  return (
    <div className="App">
      <button onClick={callExample}>Call</button>
      <div>
        <span>{msgBe}</span>
      </div>
      <div>
        <span>{msgConfig}</span>
      </div>

    </div>
  );
}

export default App;
