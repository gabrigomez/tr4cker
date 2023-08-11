import { Artist } from "../Organisms/Artist";
interface ArtistDetailsTemplateProps {
  id: number,
  name: string,
  genre: string,
  loading: boolean,
  image: string,
  spotifyId: string,
}

export const ArtistDetailsTemplate = ({...props}: ArtistDetailsTemplateProps) => {
  return (
    <div>      
      <Artist
        spotify_id={props.spotifyId} 
        name={props.name} 
        image={props.image} 
        genre={props.genre} 
        deleteMode={true} 
        id={props.id} 
      />
    </div>
  )
};