import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Home />
      <ToastContainer 
        position= "bottom-left"
        autoClose= {1000}
        closeOnClick= {true} 
      />
    </>
  );
}

export default App;
