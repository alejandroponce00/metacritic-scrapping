import { Link } from "expo-router";

import { Pressable, ScrollView, Text, View } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const CuandoAprieto= styled(Pressable);

export default function About() {
  return (
    <Screen>
    <ScrollView>
    <View>
      <Link asChild href="/" >
      <CuandoAprieto className={`active:opacity-20`}>
        < HomeIcon />
        </CuandoAprieto>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">Sobre el proyecto</Text>
      <Text className="text-white mb-4">
      Esta aplicación móvil, desarrollada con React Native, permite realizar scrapping del sitio web Metacritic para obtener información detallada sobre diversos juegos y sus puntajes. Utiliza técnicas de web scraping para recopilar datos de manera automatizada, proporcionando a los usuarios acceso rápido y fácil a evaluaciones críticas y reseñas de juegos populares.

✨ Características
🤖 Scrapping Automatizado: Extrae datos de Metacritic de forma automatizada para juegos específicos.
⭐ Visualización de Puntajes: Muestra puntajes y reseñas críticas de juegos.
📱 Interfaz Intuitiva: Diseño amigable para el usuario, fácil navegación y búsqueda de juegos.
🛠️ Tecnologías Utilizadas
⚛️ React Native: Desarrollo de la aplicación móvil multiplataforma.

🚀 Fetch: Cliente HTTP para realizar peticiones a Metacritic.
      </Text>
      
   </View></ScrollView></Screen>
  );
}
