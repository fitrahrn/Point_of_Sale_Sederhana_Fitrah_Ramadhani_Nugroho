import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ListMenu from './components/ListMenu';
import AddMenu from './components/AddMenu';
import EditMenu from './components/EditMenu';
import MenuPOS from './components/MenuPOS';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MenuPOS />}/>
          <Route path='/menu' element={<ListMenu />}/>
          <Route path='/menu/add' element={<AddMenu />}/>
          <Route path='/menu/edit/:id' element={<EditMenu />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
