import { View, Text, Pressable } from "react-native";
import React, { useContext, useEffect } from "react";
import { useColorScheme } from "nativewind";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function RenderHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex flex-row py-2 border-b border-b-gray-300 justify-between items-center">
      <View>
        <Text
          className={`text-red-500 text-2xl dark:text-white`}
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
      <View className="flex flex-row justify-center gap-2">
        <Link href="/scales" asChild className="hidden">
          <Pressable>
            <MaterialCommunityIcons
              name="music-clef-treble"
              size={24}
              color={colorScheme === "dark" ? "white" : "#EF4444"}
            />
          </Pressable>
        </Link>
        <Link href="/chords" asChild>
          <Pressable>
            <MaterialCommunityIcons
              name="guitar-acoustic"
              size={24}
              color={colorScheme === "dark" ? "white" : "#EF4444"}
            />
          </Pressable>
        </Link>
        <View
          style={{
            borderLeftWidth: 2,
            height: "auto",
          }}
          className="border-gray-300 rounded-full"
        />
        <Link href="/settings" asChild>
          <Pressable>
            <MaterialIcons
              name="settings"
              size={24}
              color={colorScheme === "dark" ? "white" : "#EF4444"}
            />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
