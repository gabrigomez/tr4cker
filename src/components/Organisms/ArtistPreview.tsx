import { ArtistPreviewProps } from "../../interfaces"
import { ArtistImage } from "../Atoms/ArtistImage"
import { ArtistName } from "../Atoms/ArtistName"

export const ArtistPreview = ({...props} : ArtistPreviewProps) => {
  return (
    <div 
      className="flex flex-col w-2/4 lg:w-2/5 xl:w-1/5 
      justify-center items-center my-4 p-2 cursor-pointer 
      bg-black border border-pink-900 rounded-md" 
      onClick={props.onClick}
    >
      <ArtistImage 
        className="h-20 w-20 rounded-full overflow-hidden border mb-1 border-pink-800"
        image={props.img}
      />
      <ArtistName
        name={props.name}
        className="text-md text-pink-500 font-bold"
      />        
    </div>
  )
}