import React from 'react';
import './App.css';
import { Button } from './common/button';
import { Menu, SubMenu, MenuItem} from './common/menu';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="app">
        <div>
          <h3>Button</h3>
          <Button onClick={() => this.log('button click')}> default button </Button>&nbsp;
          <Button size="lg"> large button </Button>&nbsp;
          <Button size="sm"> small button </Button>&nbsp;
          <Button btnType="primary"> primary button </Button>&nbsp;
          <Button btnType="primary" disabled> primary button disabled</Button>&nbsp;
          <Button btnType="danger"> danger button </Button>&nbsp;
          <Button btnType="link" href="#"> link button </Button>
        </div>
        <br/>
        <div className="menu">
          <h3>Menu</h3>
          <Menu defaultIndex='0' mode='vertical' onSelect={(index) => {this.log(`clicked ${index} item`)}} >
            <SubMenu title="Menu 0">
              <MenuItem>Menu 0-0</MenuItem>
              <MenuItem>Menu 0-1</MenuItem>
            </SubMenu> 
            <SubMenu title="Menu 1">
              <MenuItem>Menu 1-0</MenuItem>
              <MenuItem>Menu 1-1</MenuItem>
              <MenuItem>Menu 1-2</MenuItem>
            </SubMenu> 
          </Menu>
        </div>
      </div>
    );
  }

  log = (e: string) => {
    console.log(e);
  }
}

export default App;
