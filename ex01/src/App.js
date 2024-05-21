import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';
import Students from './components/Students';
import Posts from './components/Posts';
import Todos from './components/Todos';
import { Row, Col } from 'react-bootstrap';
import BookSearch from './components2/BookSearch';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <BookSearch/>
    </Container>
  );
}

export default App;
