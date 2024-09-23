import React from 'react'
import { View,Text } from 'react-native'

import { Slot } from 'expo-router'

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
        <Text>
<Slot />
        </Text>
        
      <Text style={{ textAlign:"center", color:"white"}}>Creado por Alejandro Ponce</Text>
      
    </View>
  )
}

 