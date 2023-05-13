import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";

import { WebViewWrapper } from "./screens/WebViewWrapper";

const Tab = createBottomTabNavigator();

const DeCallsScreen = () => <WebViewWrapper uri="https://test.decalls.io" />;
const RewardsScreen = () => <WebViewWrapper uri="https://test.decalls.io/rewards" />;
const RankScreen = () => <WebViewWrapper uri="https://test.decalls.io/leaderboard" />;

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="DeCalls"
    >
      <Tab.Screen
        name="DeCalls"
        component={DeCallsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "DeCalls",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gamepad" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Rewards",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash-refund" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rank"
        component={RankScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Rank",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="skateboarding" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
