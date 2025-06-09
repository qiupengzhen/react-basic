import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const logoImg = document.getElementById('logo-img');
const rootDiv = document.getElementById('root');

if (logoImg) {
  logoImg.style.cursor = 'pointer';
  logoImg.onclick = function () {
    // 隐藏网格
    document.getElementById('grid-container').style.display = 'none';
    // 隐藏标题
    document.querySelector('h1').style.display = 'none';
    // 显示App
    const root = ReactDOM.createRoot(rootDiv);
    root.render(<App />);
  };
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

