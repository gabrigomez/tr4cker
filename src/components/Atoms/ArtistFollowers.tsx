interface ArtistFollowersProps {
  followers: number | undefined
};

export const ArtistFollowers = ({ followers } : ArtistFollowersProps ) => {
  return (
    <p className="font-semibold text-sky-500">
      {followers}
    </p>
  )
};