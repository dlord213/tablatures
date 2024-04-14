import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import {
  WorkSans_200ExtraLight,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_700Bold,
  WorkSans_900Black,
} from "@expo-google-fonts/work-sans";
import { Image } from "expo-image";

export default function Page() {
  let [fontsLoaded, fontError] = useFonts({
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_700Bold,
    WorkSans_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="p-8 flex justify-between h-full">
        <View>
          <Text
            className=" text-4xl text-red-500"
            style={{ fontFamily: "WorkSans_900Black" }}
          >
            Tablature
          </Text>
          <Text
            className="text-[#242424]"
            style={{ fontFamily: "WorkSans_400Regular" }}
          >
            Find chords/tabs of your favorite song!
          </Text>
        </View>
        <Image
          contentFit="cover"
          source={{
            uri: "https://illlustrations.co/static/881ed3ff57417ae887991634b2647267/day26-rainbow.png",
          }}
          style={{ width: "100%", height: 350 }}
        />
        <View className="my-2">
          <Link href="/home" asChild replace>
            <Pressable className=" bg-red-500 p-2 rounded-md active:bg-red-400">
              <Text
                className="text-white font-bold text-center"
                style={{ fontFamily: "WorkSans_400Regular" }}
              >
                Get started
              </Text>
            </Pressable>
          </Link>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
