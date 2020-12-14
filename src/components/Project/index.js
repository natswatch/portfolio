import React from 'react';

// Props are passed through our functional component.
function Project(currentPhoto) {
  const {name, description, link, github, id} = currentPhoto;
  return (
      <>
        <div className="module lr">
        <img alt={description} 
          src={require(`../../images/${name}-${id}.jpg`).default}
          className="img-thumbnail mx-1" width="100" key={`${name}${id}`}
          />
          {
            name.length <= 8 ? (
              <React.Fragment>
                <a href={github}>{description}</a>
              
              </React.Fragment>
            ) : ( <a href='#'>{description}</a>)
          }
        </div>
      </>
  );
}

export default Project;