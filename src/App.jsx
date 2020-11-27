import './assets/styles/style.css';
import React, { useState } from 'react';
import Dataset from './dataset';
import { ButtonSubmit, Dinner } from './component/index';

function App() {

  const [dataset, setDataset] = useState(Dataset);
  const [dinner, setDinner] = useState("今日の夕食");

  const selectDinner = () => {
    const menu = dataset.dinner
    const random = Math.floor(Math.random() * (menu.length));
    const dinnerName = menu[random].content
    setDinner(dinnerName);
  }


  return (
    <div className="bg">
    <section className="inner">
        <Dinner dinner={dinner} />
        <ButtonSubmit selectDinner={selectDinner} buttonName="決定"/> 
    </section>
    </div>
  );
}

export default App;
