import Card from '../card/Card';
import "./cardscss.css"

const Cards =({characters,onClose}) => {
   return(
      <div className='cards'>
         {characters.map(({id,name,status,species,gender,origin,image}) =>{
         return (
            <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            />
         )
})} 
      </div>
   )
}

export default Cards;