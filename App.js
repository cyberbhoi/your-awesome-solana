
import React from 'react'
import { View} from 'react-native';
import { Button, Text, Card } from '@rneui/themed'

// this is a starter app with react native elements ui



export default function App() {
  return (
    <View>
      <Card>
      <Text h2>React Native is Awesome</Text>

        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
       <Button color="warning">Warning</Button>
       <Button color="error">Error</Button>
      <Button color="secondary">React Native</Button>
      <Button title="Solid" type="solid" loading />
      </Card>
    </View>
  );
}
