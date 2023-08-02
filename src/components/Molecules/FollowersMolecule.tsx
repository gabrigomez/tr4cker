import { UsersThree } from "@phosphor-icons/react"
import { ArtistFollowers } from "../Atoms/ArtistFollowers"

interface FollowersMoleculeProps {
  followers: number | undefined
}

export const FollowersMolecule = ({followers} : FollowersMoleculeProps) => {
  return (
    <div className="flex">
      <UsersThree className='text-2xl mr-1 cursor-pointer' />
      <ArtistFollowers followers={followers} />
    </div>
  )
}