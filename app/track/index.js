import { useLocalSearchParams } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import * as cheerio from "cheerio";
import axios from "axios";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "nativewind";

export default function Page() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const params = useLocalSearchParams();
  const { link } = params;

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [data, setData] = useState({
    artistName: null,
    trackName: null,
    year_album: null,
    lyrics: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(link);
        const $ = cheerio.load(response.data);

        let track;
        let artist;
        let yearAlbum;
        let trackLyrics;

        $(".song_info > h1").each((index, elem) => {
          track = elem.children[0].data;
        });

        $(".song_info > h2 > a").each((index, elem) => {
          artist = elem.children[0].data;
        });

        $(".core").each((index, elem) => {
          trackLyrics = $(elem).text().replace("hide this tab", "").trim();
        });

        setData({
          artistName: artist,
          trackName: track,
          year_album: yearAlbum,
          lyrics: trackLyrics,
        });

        setIsDataFetched(true);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    if (isDataFetched == false) {
      fetchData();
    }
  }, []);

  if (isDataFetched == false) {
    return (
      <SafeAreaProvider className="dark:bg-slate-950">
        <SafeAreaView className="flex justify-center items-center h-full">
          <ActivityIndicator size={128} color={"#484848"} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider className="dark:bg-slate-950">
      <SafeAreaView className="px-8 py-4">
        <Link href="/home" asChild>
          <Pressable className="flex flex-row gap-2 items-center">
            <Ionicons name="caret-back" color={colorScheme === "dark" ? "white" : "#EF4444"} />
            <Text
              style={{ fontFamily: "WorkSans_400Regular" }}
              className="text-[#484848] dark:text-slate-50"
            >
              Back
            </Text>
          </Pressable>
        </Link>
        <View className="flex flex-col p-2 border-b border-b-gray-300">
          <Text
            className="text-2xl text-red-500 dark:text-slate-50"
            style={{ fontFamily: "WorkSans_700Bold" }}
          >
            {data.trackName}
          </Text>
          <Text
            className="text-[#484848] dark:text-slate-100"
            style={{ fontFamily: "WorkSans_400Regular" }}
          >
            {data.artistName} • {data.year_album}
          </Text>
        </View>
      </SafeAreaView>

      <ScrollView className="flex flex-1 mx-8 mb-8">
        <Text
          style={{ fontFamily: "WorkSans_400Regular", fontSize: 12 }}
          className="dark:text-slate-50"
        >
          {data.lyrics}
        </Text>
      </ScrollView>
    </SafeAreaProvider>
  );
}
