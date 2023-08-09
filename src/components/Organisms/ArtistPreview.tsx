import { ArtistPreviewProps } from "../../interfaces"
import { ArtistImage } from "../Atoms/ArtistImage"
import { ArtistName } from "../Atoms/ArtistName"

export const ArtistPreview = ({...props} : ArtistPreviewProps) => {
  return (
    <div 
      className="flex flex-col w-full justify-center items-center my-4 cursor-pointer" 
      onClick={props.onClick}>
        <ArtistImage 
          className="h-16 w-16 rounded-full overflow-hidden border-2 mb-1 border-pink-800"
          image={props.img}
        />
        <ArtistName
          name={props.name}
          className="text-white"
        />        
    </div>
  )
}