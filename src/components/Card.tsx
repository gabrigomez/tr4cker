import { FC } from "react"
import { ArtistProps } from "../interfaces"
import { ArtistImage } from "./Atoms/ArtistImage"

export const Card: FC<ArtistProps> = ({...props}) => {
  return (
    <div className="flex justify-center items-center mt-4 group">     
      <div 
        className="card">     
          <ArtistImage 
            className="h-20 w-20 border-2 border-sky-950 rounded-full"
            image={props.image}
          />
          <div>
            <div>
              <p className="text-md font-bold">
                {props.name}
              </p>
            </div>
            <div>
              <p className="text-xs text-black">
                {props.genre}
              </p>
            </div>            
          </div>                 
      </div>      
    </div>
  )
}