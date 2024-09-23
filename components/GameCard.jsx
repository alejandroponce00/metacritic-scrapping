import { useEffect, useRef } from "react";
import { View,StyleSheet,Text, Image, Animated } from "react-native";
import Score from "./Score";
export function GameCard({ game}){
    return(
        <View
        className="flex-row bg-blue-900/5 p-4 rounded-xl gap-4 mb-10"
        key={game.slug} >
            <Image className = "mb-1" source={{ uri: game.image }} style={styles.image} />
           <View>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text className = "mt-2 flex-shrink-0" style={styles.description}>{game.description.slice(0, 200)}</Text>
            
          </View>
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
      
      width: 97,
      height: 137,
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
  