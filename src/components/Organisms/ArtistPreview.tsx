import { ArtistPreviewProps } from "../../interfaces"
import { ArtistImage } from "../Atoms/ArtistImage"
import { ArtistName } from "../Atoms/ArtistName"

export const ArtistPreview = ({...props} : ArtistPreviewProps) => {
  return (
    <div 
      className="flex flex-col w-full justify-center items-center mb-2 cursor-pointer" 
      onClick={props.onClick}>
        <ArtistImage 
          className="h-24 w-24 rounded-full overflow-hidden mb-2 border-2 border-pink-800"
          image={props.img}
        />
        <ArtistName
          name={props.name}
          textColor="text-white"
        />        
    </div>
  )
}