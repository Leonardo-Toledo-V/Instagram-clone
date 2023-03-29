import {faker} from '@faker-js/faker';
import { useEffect, useState } from "react";
import Story from './Story';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  /* I'm using faker because i don't have the API yet.
     So, I need to create the interface and I need a model.
     When we have the API, I'm going to change it
  */
  const generateFakeUser = () => {
    return {
      id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      username: faker.internet.userName() 
    }
  };

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i ) => ({
      ...generateFakeUser(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white 
    mt-6 border-gray-200 border rounded-sm 
    overflow-x-scroll scrollbar-thin scrollbar-thumb-slate-300
    '>
      {suggestions.map((profile) => (
        <Story 
          key={profile.id} 
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
