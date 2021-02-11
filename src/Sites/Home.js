import React from 'react';
import { Layout, Text, Button, Icon, Card } from '@ui-kitten/components';

const StarIcon = (props) => (
  <Icon {...props} name='play-circle-outline'/>
);

const HomeScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card>
        <Text category='h1' category='h2' style={{fontWeight: 'bold', textAlign: 'center'}}>Rocket</Text>
        <Button status='success' accessoryRight={StarIcon}>
          Start Rocket
        </Button>
      </Card>
    </Layout>
);

export default HomeScreen;
