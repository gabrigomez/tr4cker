interface ArtistNameProps {
  name: string,
  textColor?: string
}

export const ArtistName = ({ name, textColor = 'text-slate-900' } : ArtistNameProps) => {
  return (
    <p className={`text-2xl font-bold ${textColor}`}>
      {name}
    </p>
  )
}