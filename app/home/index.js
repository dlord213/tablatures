import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable, TextInput } from "react-native";
import RenderHeader from "./components/render_header";
import RenderTopTabs from "./components/render_top_tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";

export default function Page() {
  const [searchValue, onChangeSearchValue] = useState("");
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaProvider className="dark:bg-slate-950">
      <SafeAreaView className="p-8 ">
        <RenderHeader />
        <View className="flex flex-row gap-2 my-1">
          <TextInput
            placeholder="Search for a song"
            className="border p-2 rounded-lg border-gray-400 max-w-md flex-auto text-[#484848] dark:bg-slate-50 dark:border-slate-50"
            value={searchValue}
            onChangeText={onChangeSearchValue}
          />
          <Link
            href={{
              pathname: "/search",
              params: { search: `${searchValue}` },
            }}
            asChild
          >
            <Pressable className="flex justify-center bg-red-500 p-1 rounded-lg active:bg-red-400">
              <Ionicons
                name="search"
                size={28}
                style={{
                  color: "white",
                }}
              />
            </Pressable>
          </Link>
        </View>
        <RenderTopTabs />
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
