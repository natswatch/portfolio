import React from 'react';

// Props are passed through our functional component.
function Project(currentPhoto) {
  const {name, description, link, github, id} = currentPhoto;
  return (
      <div>
        {
          name.length <= 8 ? (
            <React.Fragment>
              <a href={link}>{description}</a>
              <a href={github}>| github</a>
            </React.Fragment>
          ) : (<a>{description}</a>)
        }
        <img alt={description} 
          src={require(`../../images/${name}-${id}.jpg`).default}
          className="img-thumbnail mx-1" width="100"
          />
      </div>
  );
}

export default Project;