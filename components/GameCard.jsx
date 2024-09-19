import { useEffect, useRef } from "react";
import { View,StyleSheet,Text, Image, Animated } from "react-native";
export function GameCard({ game}){
    return(
        <View key={game.slug} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>
            <Text style={styles.score}>{game.score}</Text>
          </View>
    )
}
export function AnimatedGameCard({game,index}){
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        Animated.timing(opacity,{
         toValue:1,
         duration: 1000,
         delay: index * 100,
         useNativeDriver: true   

        }).start()
    },[index, opacity]
    
    );
    return (
        <Animated.View style ={{opacity}}>
            <GameCard game={game} />
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    card: {
      marginBottom: 45,
    },
    image: {
      marginHorizontal:"auto",
      width: 107,
      height: 147,
      borderRadius: 20,
      

      
    },
    title: {
      marginTop: 20,
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 10,
      color: "white",
      textAlign:"center"
    },
    description: {
      fontSize: 16,
      color: "black",
    },
    score: {
      fontSize: 30,
      color: "red",
      marginTop: 10,
    },
  });
  