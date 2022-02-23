import './App.css';
import { Card, Button } from 'reactstrap';
import Main from './Main';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from './Component/GlobalContext/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
          <Main />
      </Router>
    </GlobalProvider>
  );
}

export default App;
