import { Carousel } from "react-responsive-carousel"

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
      className='w-11/12'
    >
      {imgArray.map((img) => {
        return (
          <div>
            <img src={img} alt="" />
          </div>
        )
      })}
    </Carousel>
  )
}