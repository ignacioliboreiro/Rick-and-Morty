export default function Card({name,status,species,gender,origin,image,onClose}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
