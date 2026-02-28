import React from "react";
//import EventsExamplle from "./screens/ExampleEvent";
//import Counter from "./screens/counter";
//import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./navigation/AppNavigator";

//export default function App() {
//  return <HomeScreen />;
//}

//export default function App() {
//  return <EventsExamplle />;
//}

//export default function App() {
  //return <Counter />;
//}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}