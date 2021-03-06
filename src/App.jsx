import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ContainerOfLeagues from './components/ContainerOfLeagues';
import ContainerOfCommands from './components/ContainerOfCommands';
import LeagueInfo from './components/ContainerOfLeagues/LeagueInfo';
import CommandInfo from './components/ContainerOfCommands/CommandTab/CommandInfo';
import LeagueAllMatches from './components/ContainerOfLeagues/LeagueInfo/LeagueStandings/LeagueAllMatches';
import CommandsAllMatch from './components/ContainerOfCommands/CommandTab/CommandInfo/CommandsAllMatch/CommandsAllMatch';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/FootballManager/" component={ContainerOfLeagues} />
        <Route exact path="/FootballManager/commands/" component={ContainerOfCommands} />
        <Route path="/league/:slug/" component={LeagueInfo} />
        <Route path="/commands/:slug/" component={CommandInfo} />
        <Route path="/matchesOfLeague/:slug/" component={LeagueAllMatches} />
        <Route path="/matchesOfCommands/:slug/" component={CommandsAllMatch} />
        <Redirect to="/FootballManager/" />
      </Switch>
    </Router>
  );
}

export default App;
