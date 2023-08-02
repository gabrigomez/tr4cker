interface ArtistNameProps {
  name: string,
}

export const ArtistName = ({ name } : ArtistNameProps) => {
  return (
    <p className="text-2xl font-bold">
      {name}
    </p>
  )
}