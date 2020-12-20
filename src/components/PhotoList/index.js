import React, {useState} from 'react';
import Project from '../Project';

const PhotoList = ({currentCategory}) => {

  const [photos] = useState([
    {
      name: 'projects',
      description: 'Run Buddy, HTML & CSS',
      link: "https://natswatch.github.io/run-buddy/",
      github:"https://github.com/natswatch/run-buddy",
      id: 0
    },
    { name: 'projects', description: 'MyTeam, Node.js',
      link: "https://github.com/natswatch/myteam",
      github: "https://github.com/natswatch/myteam",
       id: 1},
    { name: 'projects', description: 'Weather Dashboard, Web API', 
      link:"https://natswatch.github.io/weather-it",
      github: "https://github.com/natswatch/weather-it",
      id: 2 },
    { name: 'projects', 
      description: 'Tech This Out, MVC', 
      link:"https://natswatch.github.io/tech-this-out/",
      github: "https://github.com/natswatch/tech-this-out",
      id: 3 },
    {
      name: 'projects',
      description: 'SmollTalk, ORM & MVC',
      link:"https://limitless-shelf-64509.herokuapp.com/",
      github: "https://github.com/queen-stack/smollTalk",
      id: 4
    },
    { name: 'projects', description: 'Budge-It, PWA',
      link:"https://natswatch.github.io/budge-it",
      github: "https://github.com/natswatch/budge-it",
      id: 5 },
    { name: 'photography', description: 'Nature encounters while camping in Bodega Bay - 35mm', id: 0 },
    {
      name: 'photography',
      description: 'Lovers in 35mm', id: 1
    },
    { name: 'photography', description: 'Bustling streets of Tokyo at night', id:2 },
    { name: 'photography', description: 'Tokyo traffic at night', id: 3 },
    { name: 'photography', description: 'Daytime Tokyo traffic', id: 4 },
    { name: 'photography', description: 'Coastal getaway', id: 5}
  ]);

    //selects the photos matching the category selected
    const currentPhotos = photos.filter((photo) => photo.name === currentCategory);
    console.log(currentCategory);
    //renders each photo from the category
    return (
    <div>
        {currentPhotos.map((image) => (
          <Project name={image.name}
            description={image.description}
            link={image.link}
            github={image.github}
            id={image.id}/>
        ))}
    </div>
    )
}

export default PhotoList;