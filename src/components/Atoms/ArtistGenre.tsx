interface ArtistGenreProps {
  genre: string,
}

export const ArtistGenre = ({ genre } : ArtistGenreProps) => {
  return (
    <p className="font-bold text-xs text-slate-200">
      {genre}
    </p>
  )
}