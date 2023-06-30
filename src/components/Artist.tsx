import { FC } from "react"
import { ArtistProps } from "../interfaces"
import { UsersThree } from "@phosphor-icons/react"

export const Artist: FC<ArtistProps> = ({...props}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 md:w-2/4 flex flex-col justify-center items-center mt-4 bg-black p-4 rounded-md">
        <div className="flex flex-col items-center mb-4">
          <div className="h-44 w-44 overflow-hidden mb-2 rounded-sm border border-sky-800">
            <img src={props.image} alt="" />
          </div>
          <div className="flex flex-col items-center py-2">
            <a className="hover:text-sky-700 duration-300 cursor-pointer" href={props.link} target="blank">
              <p className="text-2xl font-bold">
                {props.name}
              </p>
            </a>
            <div>
              <p className="font-bold text-xs">
                {props.genre}
              </p>
            </div>
            <div className="flex">
              <UsersThree className='text-2xl mr-1 cursor-pointer' />
              <p className="font-semibold text-sky-500">
                {props.followers}
              </p>
            </div>
          </div>               
        </div>             
        <div>
          {props.songs.map((song) => {
            return (
              <p className="bg-slate-900 rounded-md mb-3 p-2" key={song}>
                {song}
              </p>
            )
          })}
        </div>
      </div>      
    </div>
  )
}