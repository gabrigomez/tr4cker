import { FC } from "react"
import { ArtistProps } from "../interfaces"

export const Card: FC<ArtistProps> = ({...props}) => {
  return (
    <div className="flex flex-col justify-end items-center mt-4">
      <div 
        className="flex flex-col bg-gray-950 border border-sky-900 
        rounded-md justify-end items-center p-2 m-2 w-3/4 sm:w-2/4 md:w-2/5 xl:w-1/4">
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