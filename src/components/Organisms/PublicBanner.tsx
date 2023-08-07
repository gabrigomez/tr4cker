import { PublicDescription } from "../Atoms/PublicDescription"
import { PublicImage } from "../Atoms/PublicImage"
import { PublicInfo } from "../Atoms/PublicInfo"

export const PublicBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 my-10 p-2 gap-6">
      <PublicDescription />
      <PublicImage />
      <PublicInfo />
    </div>
  )
}