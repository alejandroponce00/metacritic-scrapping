import { Tabs } from "expo-router";
import { CircleInfoIcon, HomeIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
        headerShown:false,
        tabBarStyle:{backgroundColor:"black"},
        tabBarActiveTintColor:"yellow",
        
    }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({color}) => <CircleInfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
