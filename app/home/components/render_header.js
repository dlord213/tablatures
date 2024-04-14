import { View, Text, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
export default function RenderHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex flex-row py-2 border-b border-b-gray-300 justify-between items-center">
      <View>
        <Text
          className="text-red-500 text-2xl dark:text-white"
          style={{ fontFamily: "WorkSans_900Black" }}
        >
          Welcome
        </Text>
        <Text
          className="text-[#646464] dark:text-slate-100"
          style={{ fontFamily: "WorkSans_400Regular" }}
        >
          Start playing now!
        </Text>
      </View>
      <Pressable onPress={toggleColorScheme}>
        <Entypo name="light-up" size={24} color={colorScheme === "dark" ? "white" : "#EF4444"} />
      </Pressable>
    </View>
  );
}
