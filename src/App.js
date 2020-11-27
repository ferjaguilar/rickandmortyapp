import './App.css';
import { Container } from 'semantic-ui-react';
import Title from './components/Title';
import Content from './components/Content';

function App() {
  return (
    <Container className="section-space">
      <Title/>
      <Content />
    </Container>
  );
}

export default App;
