import { useEffect, useState } from 'react';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';




function App() {
const [characters, setCharacters]=useState([])
const {pathname} = useLocation()
console.log(pathname)



const onSearch = (id)=> {
   axios(`https://rickandmortyapi.com/api/character/${id}?`).then(
      ({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      }
   );
}

const onClose = (id) =>{
   setCharacters(
      characters.filter((char)=>{
         return char.id !== Number(id)
      })
   )
}

   return (
      <div className='App'>
         {pathname !== "/" && <NavBar onSearch={onSearch}/>}
         <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form/>}/>
         </Routes>
      </div>
   );
}

export default App;
