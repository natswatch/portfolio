import React from 'react';

// Props are passed through our functional component.
function Project(currentPhoto) {
  const {name, description, link, github, id} = currentPhoto;
  return (
      <>
        
        <img alt={description} 
          src={require(`../../images/${name}-${id}.jpg`).default}
          className="img-thumbnail mx-1" width="100" key={`${name}${id}`}
          />
      </>
  );
}

export default Project;