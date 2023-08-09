import { useState } from 'react';
import { ArtistPreview } from '../Organisms/ArtistPreview';
import { ArtistPreviewProps } from '../../interfaces';
import { ArrowCircleLeft, Binoculars } from '@phosphor-icons/react';
import { FieldMolecule } from '../Molecules/FieldMolecule';
import { FormOrganism } from '../Organisms/FormOrganism';
import { Artist } from '../Organisms/Artist';
import { HomeMolecule } from '../Molecules/HomeMolecule';
import { SearchText } from '../Atoms/SearchText';
import { PublicBanner } from '../Organisms/PublicBanner';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Loading } from '../Atoms/Loading';
interface HomeTemplateProps {
  authToken: string | null | undefined,
  artistsPreview: Array<ArtistPreviewProps> | null,
  imgArray: Array<string>,
  loading: boolean,
  onSubmit: () => void,
  validate: (values: any) => object | undefined,  
}

export const HomeTemplate = ({...props} : HomeTemplateProps) => {
  const [name, setName] = useState<string>('');
  const [followers, setFollowers] = useState<number>(0);
  const [songs, setSongs] = useState<Array<string>>([]);
  const [genre, setGenre] = useState<string>('');
  
  const [image, setImage] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [hasArtist, setHasArtist] = useState(false);  

  const fetchArtist = (artist: ArtistPreviewProps) => {
    setHasArtist(true)

    setName(artist.name)
    setImage(artist.img)
    setGenre(artist.genre!)
    
    setFollowers(artist.followers!)
    setSongs(artist.songs!)
    setLink(artist.link!)
  }

  const clearArtist = () => {
    setHasArtist(false)
  }

  return (
    <div className='flex flex-col items-center w-screen'>
      <HomeMolecule />
      {props.authToken ? (
        <div className="w-11/12 mt-8">          
          <SearchText />
          <FormOrganism onSubmit={props.onSubmit} validate={props.validate}>
            <FieldMolecule
              name="artist"
              placeholder='ex: Nirvana'
            />
            <button className="bg-black hover:bg-pink-500 duration-300 p-2 rounded-md group">
              <Binoculars className='text-2xl mr-1 cursor-pointer' />
            </button>
            {props.loading && (
              <Loading className="flex justify-center items-center mt-20 text-6xl font-semibold" />
            )}
            {!hasArtist && props.artistsPreview?.map((artist) => {
              return (
                <ArtistPreview
                  name={artist.name}
                  img={artist.img}
                  songs={artist.songs}
                  onClick={() => fetchArtist(artist)}                                                 
                />
              )
            })}            
            {hasArtist && (
              <div className='flex flex-col items-center w-full'>
                <Artist 
                  name={name} 
                  image={image} 
                  genre={genre} 
                  followers={followers} 
                  songs={songs} 
                  link={link} 
                />
                <ArrowCircleLeft 
                  className='text-5xl mb-2 cursor-pointer hover:text-pink-500 duration-300'
                  onClick={() => clearArtist()} 
                />
              </div>
            )}
          </FormOrganism>         
        </div>
      ) : (
        <PublicBanner imgArray={props.imgArray} />
      )}      
    </div>
  )
}