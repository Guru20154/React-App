import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CounterProvider } from './context/count.context.jsx';
import BackgroundWrapper from './context/BackgroundWrapper.context.jsx';

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <BackgroundWrapper>
      <App />
    </BackgroundWrapper>
  </CounterProvider>
)
