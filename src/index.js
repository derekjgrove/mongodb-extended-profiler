import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';


import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

// createRoot(document.getElementById('root')).render(<App title={title} />);
ReactDOM.render(
    <App title={title} />,
    document.getElementById('root')
)


module.hot.accept();