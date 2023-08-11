import { useState } from 'react';
import { Artist } from '../Organisms/Artist';
import { ArtistPreview } from '../Organisms/ArtistPreview';
import { ArtistProps } from '../../interfaces';

import { FormOrganism } from '../Organisms/FormOrganism';
import { FieldMolecule } from '../Molecules/FieldMolecule';
import { HomeMolecule } from '../Molecules/HomeMolecule';
import { Loading } from '../Atoms/Loading';

import { PublicBanner } from '../Organisms/PublicBanner';
import { SearchText } from '../Atoms/SearchText';
import { ArrowCircleLeft, Binoculars } from '@phosphor-icons/react';

import Spotify from '../../assets/spotify.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface HomeTemplateProps {
  authToken: string | null | undefined,
  artistsPreview: Array<ArtistProps> | null,
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
  const [spotifyId, setSpotifyId] = useState<string>(''); 

  const fetchArtist = (artist: ArtistProps) => {
    setHasArtist(true);

    setName(artist.name);
    setGenre(artist.genre!);
    setFollowers(artist.followers!);
    
    setSongs(artist.songs!);
    setLink(artist.link!);
    setSpotifyId(artist.spotify_id!)
    
    if(artist.image === '') {
      setImage(Spotify);
    } else {
      setImage(artist.image);
    }
  }

  const clearArtist = () => {
    setHasArtist(false);
  }


  return (
    <div className='flex flex-col items-center w-screen'>
      <HomeMolecule />
      {props.authToken ? (
        <div className="w-11/12 mt-8">          
          <FormOrganism onSubmit={props.onSubmit} validate={props.validate}>
            {!hasArtist && (
              <div className='flex flex-col items-center justify-center w-full'>
                <SearchText />
                <FieldMolecule
                  name="artist"
                  placeholder='ex: Nirvana'
                />
                <button className="bg-black hover:bg-pink-500 duration-300 p-2 rounded-md group">
                  <Binoculars className='text-2xl mr-1 cursor-pointer' />
                </button>
              </div>
            )}            
            {props.loading && (
              <Loading className="flex justify-center items-center mt-20 text-6xl font-semibold" />
            )}            
          </FormOrganism> 
          <div className='flex flex-col items-center justify-center w-full p-2'>
            {!hasArtist && props.artistsPreview?.map((artist) => {
              return (
                <ArtistPreview
                  name={artist.name}
                  image={artist.image === '' ? Spotify : artist.image}
                  key={artist.spotify_id}
                  songs={artist.songs}                  
                  onClick={() => fetchArtist(artist)}                                                 
                />
              )
            })}            
            {hasArtist && (
              <div className='flex flex-col items-center w-full'>
                <ArrowCircleLeft 
                  className='text-5xl mb-2 cursor-pointer hover:text-pink-500 duration-300'
                  onClick={() => clearArtist()} 
                />
                <Artist 
                  name={name}
                  spotify_id={spotifyId}
                  image={image} 
                  genre={genre} 
                  followers={followers} 
                  songs={songs} 
                  link={link} 
                />
              </div>
            )}
          </div>        
        </div>
      ) : (
        <PublicBanner imgArray={props.imgArray} />
      )}      
    </div>
  )
};