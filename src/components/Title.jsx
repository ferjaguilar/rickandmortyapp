import React from 'react';
import { Header, Divider, Grid, Button } from 'semantic-ui-react';

const Title = () => {
  return (
    <>
      <Grid>
        <Grid.Column floated='left' width={8}>
          <Header as='h1'>Rick and Morty App</Header>
        </Grid.Column>
        <Grid.Column floated='right' width={4}>
          <Button primary>Dark mode</Button>
        </Grid.Column>
      </Grid>
      <Divider />
    </>
  )
}

export default Title
