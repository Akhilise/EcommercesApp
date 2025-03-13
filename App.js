import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import MainHomeScreen from "./screens/MainHomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlayerScreen from "./screens/PlayerScreen";
import CategoryScreen from "./screens/CategoryScreen";
import AccountScreen from "./screens/AccountScreen";
import CartScreen from "./screens/CartScreen";
import { Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color}) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Play") {
            iconName = focused ? "play-circle" : "play-circle";
          } else if (route.name === "Category") {
            iconName = focused ? "category" : "category";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "Cart") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          }
          return <Icon name={iconName} size={29} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "medium",
          marginTop: 5,
        },
        tabBarStyle: {
          padding: 20,
          backgroundColor:"white",
          height:80,
          
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={MainHomeScreen} options={{}} />
      <Tab.Screen name="Play" component={PlayerScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator
        initialRouteName="MainHome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="MainHome" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
