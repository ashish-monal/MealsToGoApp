import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ResturantsScreen } from './src/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeArea } from './src/components/utility/safe-area.component';

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Setting: "md-settings",
};


const Tab = createBottomTabNavigator();
const Setting = () => (<SafeArea><Text>Setting</Text></SafeArea>);
const Map = () => (<SafeArea><Text>Map</Text></SafeArea>);

const createSreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <ResturantsScreen /> */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createSreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={ResturantsScreen} />
            <Tab.Screen name="Setting" component={Setting} />
            <Tab.Screen name="Map" component={Map} />
          </Tab.Navigator>

        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
