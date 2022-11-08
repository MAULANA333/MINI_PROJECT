import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RecipeContainer from './container/RecipeContainer';
import MenuContainer from './container/MenuContainer';
import HomeContainer from './container/HomeContainer';
import DetailResepContainer from './container/DetailResepContainer';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<HomeContainer/>}/>
      <Route path='/menu' exact element={<MenuContainer/>}/>
      <Route path='/recipe' exact element={<RecipeContainer/>}/>
      <Route path='/resep/:id' exact element={<DetailResepContainer/>}/>
    </Routes>
  );
}

export default App;
