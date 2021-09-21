import styles from './App.module.css';

import {ListGroup} from "./components/listGroup";
import {ListGroupItem} from "./components/listGroupItem"


console.log(styles);

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

    </div>
  );
}

export default App;
