import React, { StrictMode } from 'react';
import { createRoot }  from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App.tsx';
// import './index.css';
// import { createRoot } from ''

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container as Element | DocumentFragment);

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
