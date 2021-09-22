import styles from './App.module.css';

import {ListGroup} from "./components/listGroup";
import {ListGroupItem} from "./components/listGroupItem";
import Message from "./components/message";


console.log(styles);

const message = "Передаем в компонент Message пропс messageText. Передаем в компонент Message пропс messageText. Передаем в компонент Message пропс messageText. Передаем в компонент Message пропс messageText.";
const messageCount = "1"; //еще один props

function App() {
  return (
    <div className={styles.app}>

      <ListGroup>
        <ListGroupItem tag={'a'} active={true}>
          Item 1
        </ListGroupItem>
        <ListGroupItem disabled={true}>
          Item 2
        </ListGroupItem>
        <ListGroupItem>
          Item 3
        </ListGroupItem>
      </ListGroup>
      <Message messageText={message} count={messageCount}/>
      <Message messageText={message} count='2'/>

    </div>
  );
}

export default App;
