import { Eye, Trash } from "@phosphor-icons/react"

interface ArtistOptionsProps {
  deleteArtist: () => void,
  getTracks : () => void
}

export const ArtistOptions = ({...props} : ArtistOptionsProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={props.deleteArtist}>
        <Trash className='text-xl mr-1 cursor-pointer hover:text-sky-700 duration-300' />
      </button>
      <button className="flex justify-center items-center group" onClick={props.getTracks}>
        <Eye className='text-md mr-1 cursor-pointer mt-2 group-hover:text-sky-700 duration-300' />
        <p className="text-xs mt-2 group-hover:text-sky-700 duration-300">
          view list
        </p>
      </button>
    </div>
  )
}