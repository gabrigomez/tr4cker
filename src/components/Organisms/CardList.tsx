import { Link } from "react-router-dom"
import { Artists } from "../../utils"
import { Card } from "../Card"

interface CardListProps {
  artists: Artists
}

export const CardList = ({artists} : CardListProps) => {
  return (
    <div>
      {artists !== null && (
        artists.map((artist) => {
          return (
            <Link to={`/artist-details/${artist.id}`} key={artist.id}>
              <Card name={artist.name} image={artist.image} genre={artist.genre} id={artist.id} />
            </Link>
          )
        })
      )}
    </div>
  )
}