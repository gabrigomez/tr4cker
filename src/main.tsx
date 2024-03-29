import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
  <BrowserRouter>    
    <App />
  </BrowserRouter>  
);
