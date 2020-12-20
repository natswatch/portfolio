import React from 'react';

// Props are passed through our functional component.
function Project(currentPhoto) {
  const {name, description, link, github, id} = currentPhoto;
  return (
      <>
        <div className="module">
        <img alt={description} 
          src={require(`../../images/${name}-${id}.jpg`).default}
          className="img-thumbnail mx-1" key={`${name}${id}`}
          />
          <div className="overlay">
          {
            name.length <= 8 ? (
              <div className="text">
                <a href={link}>{description}</a><br></br>
                <a href={github}>Github</a>
                </div>
              
              
            ) : ( <div className="text"><a href='#'>{description}</a></div>)
          }
          </div>
        </div>
      </>
  );
}

export default Project;