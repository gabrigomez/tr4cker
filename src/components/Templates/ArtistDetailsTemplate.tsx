import { Artist } from "../Organisms/Artist"

interface ArtistDetailsTemplateProps {
  loading: boolean,
  name: string,
  image: string,
  genre: string,
  id: number,
}

export const ArtistDetailsTemplate = ({...props}: ArtistDetailsTemplateProps) => {
  return (
    <div>      
      <Artist 
        name={props.name} 
        image={props.image} 
        genre={props.genre} 
        deleteMode={true} 
        id={props.id} 
      />
    </div>
  )
}