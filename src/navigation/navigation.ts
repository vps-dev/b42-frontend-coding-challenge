import {useNavigation} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';

export type StackParamList = {
  Home: undefined;
  Workout: {
    title?: string;
  };
  Exercise: {
    title?: string;
  };
};

export const Stack = createStackNavigator<StackParamList>();

export const useGetNavigator = () => {
  const navigate = useNavigation().navigate;

  return <T extends keyof StackParamList>(
    route: T,
    params?: Record<string, string>,
  ) => navigate(route, params);
};
