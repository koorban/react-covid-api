import './App.css';
import WorldInfoContainer from './WorldInfoContainer';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {

  return (
    <Container>
      <Header
        title='COVID-19 Statistics'
        subTitle='By world, country, and region'
        imageSource=''
      />
      <Row>
        <WorldInfoContainer />
      </Row>
    </Container>
  );
};

export default App;
