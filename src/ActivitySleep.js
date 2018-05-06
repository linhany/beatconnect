import React from 'react';
import {Card} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import activitySleep from './images/activity-sleep.png';

const ActivitySleep = () => {
  return (
    <MuiThemeProvider>
    <Card>
        <img src={activitySleep} width="100%" height="100%" />
    </Card>
  </MuiThemeProvider>
  )
};

export default ActivitySleep;