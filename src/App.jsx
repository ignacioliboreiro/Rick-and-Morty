
//componentes to render//
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorite from './components/favorite/Favorite.jsx';

//hooks
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

//dependencias//
import axios from "axios";

//style//
import "./app.css"


const EMAIL = 'nicopaez@gmail.com';
const PASSWORD = 'hola123'


function App() {
const [characters, setCharacters]=useState([])
const {pathname} = useLocation()
const navigate = useNavigate();
const [access, setAccess] = useState(false);


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


const  login = (userData) => {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);


const logout = () => {
   setAccess(false)
} 



   return (
      <div className='App'>
         {pathname !== "/" && <NavBar onSearch={onSearch} logout={logout}/>}
         <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorite/>}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
      </div>
   );
}

export default App;
