import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllLeagues from './components/AllLeagues/AllLeagues';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/leagueDetail/:id">
          <LeagueDetail></LeagueDetail>
        </Route>
        <Route exact path="/">
          <Header></Header>
          <AllLeagues></AllLeagues>
        </Route>
        <Route path="*">
          <Header></Header>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
