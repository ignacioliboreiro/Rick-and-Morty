import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
   const [id , setId]= useState("")


   const handelChange = ()=>{
      setId(event.target.value)
   }


   return (
      <div>
         <input className="input" type='search' value={id} onChange={handelChange}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}