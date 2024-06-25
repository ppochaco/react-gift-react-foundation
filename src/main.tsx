import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  console.error('Root element가 존재하지 않습니다.');
}
