import React from 'react';

// Props are passed through our functional component.
function Project(currentPhoto) {
  const {name, description, link, github, id} = currentPhoto;
  return (
    <div>
      <div className="img-container">
        <a href={link}>{description}</a>
        <a href={github}>/ github</a>
        <img alt={description} 
          src={require(`../../images/${name}-${id}.jpg`).default}
          className="img-thumbnail mx-1" width="150"
          />
      </div>
    </div>
  );
}

export default Project;