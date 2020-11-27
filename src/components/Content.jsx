import React, {useEffect, useState} from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';

const Content = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
  }, []);

  console.log(characters);

  return (
    <div>
     <Grid>
      {
        characters.map(character => (
          <Grid.Column mobile={16} tablet={8} computer={4}>
          <Card
            image={character.image}
            header={character.name}
            meta={character.status}
            description={character.location.name}
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            extra= {<a> <Icon name='clock' />{new Date(character.created).toDateString()}</a>}
          />
          </Grid.Column>
        ))        
      }
    </Grid>
    </div>
  )
}

export default Content
