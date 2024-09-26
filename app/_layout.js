import React from "react";
import { View, Text, Pressable } from "react-native";

import { Link, Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { styled } from "nativewind";
import { CircleInfoIcon } from "../components/Icons";

const CuandoAprieto = styled(Pressable);
export default function Layout() {
  return (
    <View className="flex-1 ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "orange",
        headerLeft:() => <Logo />,
        headerRight:() => (
          <Link asChild href="/about">
          <CuandoAprieto className={`active:opacity-20`}>
            <CircleInfoIcon />
          </CuandoAprieto>
        </Link>
        ),
        

        }}
      />

      <Text style={{ textAlign: "center", color: "white" }}>
        Creado por Alejandro Ponce
      </Text>
    </View>
  );
}
