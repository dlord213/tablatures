import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "nativewind";

export default function SearchHeader(props) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <>
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
      <View className="flex flex-col p-2 border-b border-b-gray-300 flex-auto">
        <Text
          style={{ fontFamily: "WorkSans_900Black" }}
          className="text-red-500 text-2xl dark:text-slate-50"
        >
          Searching for
        </Text>
        <Text
          style={{ fontFamily: "WorkSans_400Regular" }}
          className="text-[#484848] dark:text-slate-100"
        >
          {props.title}
        </Text>
      </View>
    </>
  );
}
