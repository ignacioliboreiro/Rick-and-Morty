import "./cardcss.css"
import { Link } from "react-router-dom";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className="card">
         <button className="boton" onClick={()=> onClose(id)}>X</button>
         <h2>ID: {id}</h2>
         <Link to={`/Detail/${id}`}>
         <h2>Name: {name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
