
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Pesquisa from './pages/pesquisa';



function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Pesquisa />} />
        
      </Routes>

    </div>



  );
}

export default App;
