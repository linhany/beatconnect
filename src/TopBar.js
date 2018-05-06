import React from 'react';
import {Card} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import topbar from './images/topbar.png';

const TopBar = () => {
  return (
    <MuiThemeProvider>
    <Card>
        <img src={topbar} width="100%" height="30%" />
    </Card>
  </MuiThemeProvider>
  )
};

export default TopBar;