import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/inicioScreen';
import PerfilScreen from './src/screens/sobreScreen';
import ConfigScreen from './src/screens/contatoScreen';
import contatoScreen from './src/screens/invencivel';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="inicio"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1e40af',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerActiveTintColor: '#1e40af',
            drawerActiveBackgroundColor: '#dbeafe',
            drawerInactiveTintColor: '#334155',
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: '500',
            },
            drawerStyle: {
              backgroundColor: '#f8fafc',
              width: 260,
            },
          }}
        >
          <Drawer.Screen name="inicio" component={HomeScreen} />
          <Drawer.Screen name="sobre" component={PerfilScreen} />
          <Drawer.Screen name="contato" component={ConfigScreen} />
          <Drawer.Screen name="contatoScreen" component={contatoScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
// fim