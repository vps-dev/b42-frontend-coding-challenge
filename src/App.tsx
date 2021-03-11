import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './navigation/navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen/WorkoutScreen';
import ExerciseScreen from './screens/ExerciseScreen/ExerciseScreen';

import colors from './styles/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: colors.secondary,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {fontWeight: 'bold'},
          headerTintColor: colors.text,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Workout"
          component={WorkoutScreen}
          options={({route}) => ({
            title: route.params.title,
          })}
        />

        <Stack.Screen
          name="Exercise"
          component={ExerciseScreen}
          options={({route}) => ({
            headerBackTitle: 'Overview',
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
