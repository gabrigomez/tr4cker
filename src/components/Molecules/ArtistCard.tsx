import { ArtistProps } from "../../interfaces";
import { ArtistName } from "../Atoms/ArtistName";
import { ArtistGenre } from "../Atoms/ArtistGenre";
import { ArtistImage } from "../Atoms/ArtistImage";

export const ArtistCard = ({...props} : ArtistProps) => {
  return (
    <div className="flex justify-center items-center mt-4 group">     
      <div className="card">     
        <ArtistImage 
          className="h-20 w-20 border-2 border-sky-950 rounded-full"
          image={props.image}
        />
        <div>
          <ArtistName 
            className="text-2xl font-bold text-black" 
            name={props.name} 
          />
          <ArtistGenre genre={props.genre!} />            
        </div>                 
      </div>      
    </div>
  )
};