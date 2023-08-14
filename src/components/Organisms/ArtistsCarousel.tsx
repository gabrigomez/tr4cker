import { ArtistImage } from "../Atoms/ArtistImage";
import { Carousel } from "react-responsive-carousel";
interface ArtistsCarouselProps {
  imgArray: Array<string>,
}

export const ArtistsCarousel = ({imgArray} : ArtistsCarouselProps) => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      className='w-4/5 h-4/5 sm:w-2/4 sm:h-2/4 lg:w-2/6 lg:h-2/6 rounded-full overflow-hidden border border-pink-900 mb-2 shadow-pink-900 shadow-md'
    >
      {imgArray.map((img) => {
        return (
          <ArtistImage image={img} className="" key={img} />
        )
      })}
    </Carousel>
  )
};