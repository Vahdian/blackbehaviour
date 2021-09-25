
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './core/routes/Routes';
import Menu from './shared/Menu/Menu';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
