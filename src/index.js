import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const enterAppBtn = document.getElementById('enter-app');
const rootDiv = document.getElementById('root');

if (enterAppBtn) {
  enterAppBtn.style.cursor = 'pointer';
  enterAppBtn.onclick = function () {
    // 隐藏网格
    const grid = document.getElementById('grid-container');
    if (grid) grid.style.display = 'none';
    // 隐藏标题
    const h1 = document.querySelector('h1');
    if (h1) h1.style.display = 'none';
    // 隐藏首页容器（防止多次点击报错）
    const container = document.querySelector('.container');
    if (container) container.style.display = 'none';
    // 显示App
    if (rootDiv) {
      rootDiv.style.display = 'block';
      const root = ReactDOM.createRoot(rootDiv);
      root.render(<App />);
    }
  };
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

