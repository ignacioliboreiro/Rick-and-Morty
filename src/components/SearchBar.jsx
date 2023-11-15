import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id , setId]= useState("")


   const handelChange = ()=>{
      setId(event.target.value)
   }


   return (
      <div>
         <input type='search' value={id} onChange={handelChange}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}