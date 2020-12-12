import React from 'react';

// Props are passed through our functional component.
function Project(currentPhoto) {
  const {name, category, description, id} = currentPhoto;
  return (
    <div>
      <div className="img-container">
        <img alt={name} 
          src={require(`../../images/${category}-${id}.jpg`)}
          className="img-thumbnail mx-1"
          />
          <span>{description}</span>
      </div>
    </div>
  );
}

export default Project;