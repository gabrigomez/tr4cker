import tracker from '../../assets/tracker.png';

export const HomeMolecule = () => {
  return (
    <div className="flex justify-center h-12">
      <img 
        className="h-10 w-10 my-2 animate-updown" 
        src={tracker} 
      />
      <p className='text-5xl'>
        TR4CKER
      </p>
    </div>
  )
};