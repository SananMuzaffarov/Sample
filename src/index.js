import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Components/Weather';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
    return(
      <div>
        <Weather />
      </div>
    );
}
root.render(<App />);