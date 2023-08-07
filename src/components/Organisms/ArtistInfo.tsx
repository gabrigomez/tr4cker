import { ArtistName } from "../Atoms/ArtistName"
import { ArtistGenre } from "../Atoms/ArtistGenre"
import { FollowersMolecule } from "../Molecules/FollowersMolecule"

interface ArtistInfoProps {
  name: string,
  genre: string,
  deleteMode: boolean | undefined,
  followers: number | undefined,
  link: string | undefined,
}

export const ArtistInfo = ({...props}: ArtistInfoProps) => {
  return (
    <div className="flex flex-col items-center py-2">
      <a className="hover:text-sky-700 duration-300 cursor-pointer" href={props.link} target="blank">
        <ArtistName name={props.name} textColor="text-pink-500" />
      </a>
      <ArtistGenre genre={props.genre} />      
      {!props.deleteMode && (
        <FollowersMolecule followers={props.followers} />
      )}
    </div>
  )
}