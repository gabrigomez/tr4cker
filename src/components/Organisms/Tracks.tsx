interface TracksProps {
  tracks: Array<string>,
}

export const Tracks = ({tracks} : TracksProps) => {
  return (
    <div>
      {tracks.map((track) => {
        return (                            
          <div className="flex flex-col items-center bg-pink-500 rounded-md mb-3 p-2" key={track}>
            <p className="text-2xl text-pink-900 w-2/5">
              #{(tracks.indexOf(track) +1)}
            </p>
            <p className="text-md">
              {track.toUpperCase()}
            </p>
          </div>                
        )
      })}               
    </div>
  )
};