import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from './src/screens/inicioScreen';
import PerfilScreen from './src/screens/sobreScreen';
import ConfigScreen from './src/screens/contatoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: "#0f172a",
          },
          headerTintColor: "#fff",
          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#777",
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Início") {
              iconName = "home";
            } else if (route.name === "Contato") {
              iconName = "mail";
            } else if (route.name === "Perfil") {
              iconName = "person";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Contato" component={ConfigScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

