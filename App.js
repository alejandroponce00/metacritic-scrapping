import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
} from "react-native"; 
import { getLatestGames } from "./metacritic";
import Constants from 'expo-constants';


export default function App() {
  const [games, setGames] = useState([]);
  useEffect(() =>{
    getLatestGames().then((games)=>{
      setGames(games);
    })
  },[])
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{margin:12}}>
      <ScrollView>
      {games.map((game) =>(
        <View key={game.slug} style={styles.card}>
        <Image
        source={{uri:game.image}}
        style={styles.image}
      />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>  
    </View>
      ))}</ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:Constants.statusBarHeight,
  },
  card:{
    marginBottom: 45
  },
  image:{
    width:107,
          height:147,
          borderRadius: 10,
  },
  title:{
    marginTop:20,
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
    color:"white"
  },
  description:{
    fontSize: 16,
    color:"black"
  },
  score:{
    fontSize: 30,
    color:"red",
    marginTop: 10,
  }
});
