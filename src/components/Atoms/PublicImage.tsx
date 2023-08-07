import example  from '../../assets/example.png';

export const PublicImage = () => {
  return (
    <img
      className='border-2 border-pink-500' 
      src={example} 
      alt=""
    />
  )
}