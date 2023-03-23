import logo from './logo.svg';
import './App.css';
import Read1 from './Components/Read1';

import Addstudents from './Components/Addstudents';

import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Nav></Nav>
     <Routes> 
    <Route path='/' element={<mov1} ></Route>
    <Route path='/add' element={<}
    element={<Addstudents data={{od:'',name:""}} method="post"/>}/>  
  
  </Routes>
  </BrowserRouter>  
    </div>
  );
}

export default App
