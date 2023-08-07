import { Binoculars } from '@phosphor-icons/react';
import { FieldMolecule } from '../Molecules/FieldMolecule';
import { FormOrganism } from '../Organisms/FormOrganism';
import { Artist } from '../Organisms/Artist';
import { HomeMolecule } from '../Molecules/HomeMolecule';
import { SearchText } from '../Atoms/SearchText';
import { PublicBanner } from '../Organisms/PublicBanner';

interface HomeTemplateProps {
  authToken: string | null | undefined,
  name: string,
  followers: number,
  songs: Array<string>
  genre: string,  
  image: string,
  link: string,
  errors: string,
  onSubmit: () => void,
  validate: (values: any) => object | undefined,  
}

export const HomeTemplate = ({...props} : HomeTemplateProps) => {
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
            {props.songs.length > 0 && (
              <Artist 
                name={props.name} 
                image={props.image} 
                genre={props.genre} 
                followers={props.followers} 
                songs={props.songs} 
                link={props.link} 
              />
            )}
            {props.errors && (
              <div className="h-10 text-xs text-red-600 mt-2 font-semibold">
                <p>
                  {props.errors}
                </p>
              </div>
            )}
          </FormOrganism>         
        </div>
      ) : (
        <PublicBanner />
      )}      
    </div>
  )
}