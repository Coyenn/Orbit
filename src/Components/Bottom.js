import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const RocketIcon = (props) => (
  <Icon {...props} name='options-2-outline'/>
);

const StatisticsIcon = (props) => (
  <Icon {...props} name='activity-outline'/>
);

const ConnectionIcon = (props) => (
  <Icon {...props} name='wifi-outline'/>
);

const Bottom = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    return (
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <BottomNavigationTab icon={RocketIcon} title='Rocket'/>
        <BottomNavigationTab icon={StatisticsIcon} title='Statistics'/>
        <BottomNavigationTab icon={ConnectionIcon} title='Connection'/>
      </BottomNavigation>
    );
};

export default Bottom;
