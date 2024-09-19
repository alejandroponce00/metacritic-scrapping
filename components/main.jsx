import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Text } from "react-native"; // Mueve Text de 'react-native-svg' a 'react-native'
import { getLatestGames } from "../metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View
      style={{
        padding: insets.top,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
      }}
    >
      

      {/* Contenedor para Logo y texto "Creado por Alejandro" */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <Logo />
        <Text style={{ marginLeft: 10, alignContent: "center"}}>Web Scrapping </Text>
      </View>
      

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
      <View>
      <Text style={{ textAlign:"center", color:"gray"}}>Creado por Alejandro Ponce</Text>
      </View>
    </View>
    
  );
}
