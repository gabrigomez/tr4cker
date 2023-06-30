import { FC } from "react"
import { ArtistProps } from "../interfaces"

export const Artist: FC<ArtistProps> = ({...props}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 md:w-2/4 flex flex-col justify-center items-center mt-4 bg-black p-4 rounded-md">
        <div className="flex flex-col items-center mb-6">
          <div className="h-44 w-44 mb-2 rounded-sm border border-sky-800">
            <img src={props.image} alt="" />
          </div>
          <div>
            <p className="text-2xl font-bold">
              {props.name}
            </p>
          </div>
          <div>
            <p className="font-bold text-xs">
              {props.genre}
            </p>
          </div>
          <div>
            <p className="font-semibold text-sky-500">
              {props.followers}
            </p>
          </div>        
        </div>             
        <div>
          {props.songs.map((song) => {
            return (
              <p className="mb-1" key={song}>
                {song}
              </p>
            )
          })}
        </div>
      </div>      
    </div>
  )
}