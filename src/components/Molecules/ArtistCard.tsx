import { FC } from "react"
import { ArtistProps } from "../../interfaces"
import { ArtistImage } from "../Atoms/ArtistImage"
import { ArtistName } from "../Atoms/ArtistName"
import { ArtistGenre } from "../Atoms/ArtistGenre"

export const ArtistCard: FC<ArtistProps> = ({...props}) => {
  return (
    <div className="flex justify-center items-center mt-4 group">     
      <div 
        className="card">     
          <ArtistImage 
            className="h-20 w-20 border-2 border-sky-950 rounded-full"
            image={props.image}
          />
          <div>
            <ArtistName name={props.name} />
            <ArtistGenre genre={props.genre} />            
          </div>                 
      </div>      
    </div>
  )
}