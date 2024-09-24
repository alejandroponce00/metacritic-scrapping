import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Text, Pressable } from "react-native"; // Mueve Text de 'react-native-svg' a 'react-native'
import { getLatestGames } from "../metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { Link } from "expo-router";
import { CircleInfoIcon } from "./Icons";
import { styled } from "nativewind";


const CuandoAprieto= styled(Pressable);

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
      <Link asChild href="/about" >
      <CuandoAprieto className={`active:opacity-20`}>
      <CircleInfoIcon />
        </CuandoAprieto>
      </Link>

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
      
    </View>
    
  );
}
