// import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('lol'));

const domNode = document.getElementById('lol');
const root = createRoot(domNode);
root.render(<App />);