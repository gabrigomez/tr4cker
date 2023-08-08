import { PublicDescription } from "../Atoms/PublicDescription"
import { PublicInfo } from "../Atoms/PublicInfo"
import { ArtistsCarousel } from "./ArtistsCarousel"

interface PublicBanner {
  imgArray: Array<string>,
}

export const PublicBanner = ({imgArray} : PublicBanner) => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 my-10 p-2 gap-6">
      <PublicDescription />
      <ArtistsCarousel imgArray={imgArray} />
      <PublicInfo />
    </div>
  )
}