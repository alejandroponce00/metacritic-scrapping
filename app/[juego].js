import {  Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Screen } from "../components/Screen";
import { getGameDetails } from "../metacritic";

export default function Detail() {
    const {juego} = useLocalSearchParams();
    const [gameInfo,setGameInfo] = useState(null);
    useEffect(() => {
      if (juego) {
        getGameDetails
      (juego).then(setGameInfo);
      }
    },[juego]);
  return (
    <Screen>
      <Stack.Screen
      options={{
        headerStyle: {backgroundColor: "#ffee00"},
        headerTintColor: "black",
        headerLeft: () => {},
        headerTitle:"Detalle del Juego",
        headerRight: () => {},
      }}/>
    <View>
      
        {gameInfo === null ? (
          <ActivityIndicator color ={"#fff"} size ={"large"} />
        ) :(
          <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del juego {juego}
        </Text>
          </ScrollView>
        )
      }
      </View>
        
      
    </Screen>
  );
}
