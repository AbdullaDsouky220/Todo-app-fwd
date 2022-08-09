import './styles/layout.css';
import './App.css';
import TodoBuilder from './containers/TodoBuilder';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <TodoBuilder/>

      </BrowserRouter>

    </Fragment>
  );
}

export default App;
