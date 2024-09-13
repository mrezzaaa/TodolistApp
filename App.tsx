import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import 'react-native-gesture-handler' 
import 'react-native-reanimated';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {
  return <HomeScreen />;
};

export default App;