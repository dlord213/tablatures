import { Link, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";

export default function RenderTabSection(props) {

  if (props.last == true) {
    return (
      <Link
        href={{
          pathname: "/track",
          params: { link: `${props.link}` },
        }}
        asChild
      >
        <Pressable className="">
          <View className="flex flex-row p-2 border-b-0">
            <Text
              className="text-[#484848]"
              style={{ fontFamily: "WorkSans_500Medium" }}
            >
              {props.title}
            </Text>
          </View>
        </Pressable>
      </Link>
    );
  }
  return (
    <Link
      href={{
        pathname: "/track",
        params: { link: `${props.link}` },
      }}
      asChild
    >
      <Pressable className="">
        <View className="flex flex-row p-2 border-b border-b-gray-300">
          <Text
            className="text-[#484848]"
            style={{ fontFamily: "WorkSans_500Medium" }}
          >
            {props.title}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}
