import React, { PureComponent } from 'react';
import './styles/App.css';
import Main from "./components/Main";
import Earth from "./components/Earth";
import Sputnik from "./components/Sputnik";
import Moon from "./components/Moon";
import Trajectory from "./components/Trajectory";


class App extends PureComponent {
  render() {
    return (
      <Main className="Main">
        <Earth/>
      </Main>
    );
  }
}

export default App;
