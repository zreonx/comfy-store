import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { Toaster } from '@/components/ui/toaster.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);
