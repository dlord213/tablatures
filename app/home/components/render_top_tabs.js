import { View, Pressable, ActivityIndicator, ToastAndroid } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as cheerio from "cheerio";
import axios from "axios";
import RenderTopTabsHeader from "./render_top_tabs_header";
import GenerateTopTabs from "./generate_top_tabs";
import { useColorScheme } from "nativewind";
export default function RenderTopTabs() {
  const [isDataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState([]);
  const [positionNums, setPositionNums] = useState([0, 10]);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.e-chords.com/chords");
        const $ = cheerio.load(response.data);

        $("#results > li > div > .track").each((index, element) => {
          const artist = $(element).find(".nome-artista").text().trim();
          const track = $(element).find(".nome-musica").text().trim();
          const href = $(element).find(".nome-musica > a").attr("href");

          let temp = { artistData: artist, trackData: track, link: href };

          data.push(temp);
        });

        setDataFetched(true);
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
      <>
        <RenderTopTabsHeader />
        <View className="p-8">
          <ActivityIndicator
            size={"large"}
            color={colorScheme === "dark" ? "white" : "#EF4444"}
          />
        </View>
      </>
    );
  }

  return (
    <>
      <RenderTopTabsHeader />
      <GenerateTopTabs
        data={data}
        start={positionNums[0]}
        end={positionNums[1]}
      />
      <View className="flex flex-row gap-2 my-1">
        <Pressable
          className={`bg-red-500 p-2 px-3 rounded-lg active:bg-red-400 dark:bg-slate-50`}
          onPress={() => {
            switch (positionNums[0]) {
              case 0:
                ToastAndroid.show("No more previous list.", ToastAndroid.SHORT);
                break;
              default:
                setPositionNums([positionNums[0] - 10, positionNums[1] - 10]);
                break;
            }
          }}
        >
          <Ionicons
            name="caret-back"
            color={colorScheme === "dark" ? "#242424" : "white"}
          />
        </Pressable>
        <Pressable
          className={`bg-red-500 p-2 px-3 rounded-lg active:bg-red-400 dark:bg-slate-50`}
          onPress={() => {
            switch (positionNums[1]) {
              case 100:
                ToastAndroid.show("No more next list.", ToastAndroid.SHORT);
                break;
              default:
                setPositionNums([positionNums[0] + 10, positionNums[1] + 10]);
                break;
            }
          }}
        >
          <Ionicons
            name="caret-forward"
            color={colorScheme === "dark" ? "#242424" : "white"}
          />
        </Pressable>
      </View>
    </>
  );
}
