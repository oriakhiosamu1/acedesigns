import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Error from './pages/Error';



function App(){
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Projects' element={<Projects />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>
}



export default App;

