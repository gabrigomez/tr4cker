interface ArtistNameProps {
  name: string,
  className?: string
}

export const ArtistName = ({ name, className} : ArtistNameProps) => {
  return (
    <p className={`${className}`}>
      {name}
    </p>
  )
}