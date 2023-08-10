import { Artist } from "../Organisms/Artist";
interface ArtistDetailsTemplateProps {
  id: number,
  name: string,
  genre: string,
  loading: boolean,
  image: string,
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
};