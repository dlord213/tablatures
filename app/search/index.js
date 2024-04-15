import * as cheerio from "cheerio";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  ActivityIndicator,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import SearchHeader from "./components/search_header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import Buttons from "./components/buttons";
import { useColorScheme } from "nativewind";

export default function Page() {
  const params = useLocalSearchParams();
  const { search } = params;
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [isDataFetched, setIsDataFetched] = useState(false);
  const [data, setData] = useState([]);
  const [positionNums, setPositionNums] = useState([0, 8]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.e-chords.com/search-all/${search.replace(/ /g, "%20")}`
        );
        const $ = cheerio.load(response.data);

        $("ul#results > li > div").each((index, element) => {
          const artist = $(element).find(".h2").text();
          const track = $(element).find(".h1").text().trim();
          const href = $(element).find(".h1 > a").attr("href");

          let temp = { artistData: artist, trackData: track, link: href };
          data.push(temp);
        });

        setIsDataFetched(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (isDataFetched == false) {
      fetchData();
    }
  }, []);

  if (isDataFetched == false) {
    return (
      <SafeAreaProvider className="dark:bg-slate-950">
        <SafeAreaView className="p-8">
          <SearchHeader title={search} />
          <ActivityIndicator
            size={64}
            color={colorScheme === "dark" ? "white" : "#EF4444"}
            style={{ margin: 64 }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider className="dark:bg-slate-950">
      <SafeAreaView className="p-8">
        <SearchHeader title={search} />
        <View className="flex flex-col my-2">
          {data.slice(positionNums[0], positionNums[1]).map((elem, index) => {
            return (
              <Link
                href={{
                  pathname: "/track",
                  params: { link: elem.link },
                }}
                key={index}
                asChild
              >
                <Pressable>
                  <View className="flex flex-row items-center">
                    <View className="flex flex-col flex-auto p-2 my-1 bg-gray-200 rounded-lg">
                      <Text
                        style={{ fontFamily: "WorkSans_700Bold" }}
                        className="text-[#363636] dark:text-slate"
                      >
                        {elem.trackData}
                      </Text>
                      <Text
                        style={{ fontFamily: "WorkSans_400Regular" }}
                        className="text-[#646464] dark:text-slate"
                      >
                        {elem.artistData}
                      </Text>
                    </View>
                    <Ionicons
                      name="caret-forward"
                      size={32}
                      color={colorScheme === "dark" ? "white" : "#EF4444"}
                    />
                  </View>
                </Pressable>
              </Link>
            );
          })}
          <Buttons
            length={data.length}
            prevTap={() => {
              if (positionNums[0] == 0) {
                ToastAndroid.show("No more next list.", ToastAndroid.SHORT);
              } else {
                setPositionNums([positionNums[0] - 8, positionNums[1] - 8]);
              }
            }}
            nextTap={() => {
              if (positionNums[1] >= data.length) {
                ToastAndroid.show("No more next list.", ToastAndroid.SHORT);
              } else {
                setPositionNums([positionNums[0] + 8, positionNums[1] + 8]);
              }
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
