import {  Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
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
          <ScrollView><Text className="text-center text-white font-bold mb-8 text-2xl">
          {gameInfo.title}
          
        </Text>
            <View className="justify-center items-center text-center">
            <Image
            className="mb-4 rounded"
            source={{uri: gameInfo.img}}
            style={{width:214, height:294}} />

            </View>
            <Text className="text-center text-white font-bold mb-8 text-2xl">
          {gameInfo.score}
          
        </Text>
        
          </ScrollView>
        )
      }
      </View>
        
      
    </Screen>
  );
}
