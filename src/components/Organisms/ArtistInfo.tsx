import { UsersThree } from "@phosphor-icons/react"

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
        <p className="text-2xl font-bold">
          {props.name}
        </p>
      </a>
      <div>
        <p className="font-bold text-xs text-slate-400">
          {props.genre}
        </p>
      </div>
      {!props.deleteMode && (
        <div className="flex">
          <UsersThree className='text-2xl mr-1 cursor-pointer' />
          <p className="font-semibold text-sky-500">
            {props.followers}
          </p>
        </div>
      )}
    </div>
  )
}