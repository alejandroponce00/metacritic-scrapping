import { useEffect, useState } from "react";
import {
  
  ActivityIndicator,
  FlatList,
  Text,
 
} from "react-native"; // Mueve Text de 'react-native-svg' a 'react-native'
import { getLatestGames } from "../metacritic";

import { AnimatedGameCard } from "./GameCard";
import {Screen} from "../components/Screen"



export function Main() {
  const [games, setGames] = useState([]);
  

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    
    <Screen>
      
        <Text className="ml-10 mb-6 text-white">
          Web Scrapping{" "}
        </Text>
      
     

      {games.length === 0 ? (
        <ActivityIndicator color={"black"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
