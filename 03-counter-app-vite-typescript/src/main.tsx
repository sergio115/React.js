import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <FirstApp title={'Hola, Soy Sergio'} /> */}
  </React.StrictMode>
)
