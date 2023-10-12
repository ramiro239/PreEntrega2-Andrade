import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import "../src/css/reset.css"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element = {<ItemListContainer/>}/> 
          <Route path="/item/:itemId" element = {<ItemDetailContainer/>}/>    
          <Route path="*" element = {<h1>404 NOT FOUND</h1>} />       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
