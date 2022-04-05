import './App.css';
import CharactersList from './pages/CharactersList';
import { Route, Routes } from 'react-router-dom'
import Character from './pages/Character';


function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center', margin: '1em 0 2em 0'}}>Rick and Morty</h1>
      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
