import { FC } from "react"
import { ArtistProps } from "../interfaces"
import { Trash } from "@phosphor-icons/react"

export const Card: FC<ArtistProps> = ({...props}) => {
  return (
    <div className="flex justify-center items-center mt-4 group">     
      <div 
        className="flex flex-col  items-center border border-sky-900
        bg-gray-950 rounded-md p-2 m-2 w-3/4 sm:w-2/4 md:w-2/5 xl:w-1/4">     
          <div>          
            <img src={props.image} alt="" className="h-20 w-20 border-2 border-sky-950 rounded-full" />
          </div>
          <div>
            <div>
              <p className="text-md text-sky-700 font-bold">
                {props.name}
              </p>
            </div>
            <div>
              <p className="text-xs">
                {props.genre}
              </p>
            </div>            
          </div>                 
      </div>      
    </div>
  )
}