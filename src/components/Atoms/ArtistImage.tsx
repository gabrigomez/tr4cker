interface ArtistImageProps {
  image: string,
  className: string,  
}

export const ArtistImage = ({image, className} : ArtistImageProps) => {
  return ( 
    <img src={image} alt="" className={className} />
  )
};