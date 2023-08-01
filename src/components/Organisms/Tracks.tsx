interface TracksProps {
  tracks: Array<string>
}

export const Tracks = ({tracks} : TracksProps) => {
  return (
    <div>
      {tracks.map((track) => {
        return (                            
          <p className="bg-pink-500 rounded-md mb-3 p-2" key={track}>
            {track}
          </p>                
        )
      })}               
    </div>
  )
}