import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "nativewind";
import react, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

export default function ChordHeader(props) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <>
      <Link href="/home" asChild>
        <Pressable className="flex flex-row gap-2 items-center">
          <Ionicons
            name="caret-back"
            color={colorScheme === "dark" ? "white" : "#EF4444"}
          />
          <Text
            style={{ fontFamily: "WorkSans_400Regular" }}
            className="text-[#484848] dark:text-slate-50"
          >
            Back
          </Text>
        </Pressable>
      </Link>
      <View className="flex flex-row space-between border-b border-b-gray-300">
        <View className="flex flex-col p-2 flex-auto">
          <Text
            style={{ fontFamily: "WorkSans_900Black" }}
            className="text-red-500 text-2xl dark:text-slate-50"
          >
            Chords
          </Text>
        </View>
        <Dropdown
          maxHeight={250}
          style={{ width: 75 }}
          data={props.dropdownData}
          itemTextStyle={{ color: "#484848" }}
          selectedTextStyle={{
            color: colorScheme === "dark" ? "white" : "#484848",
          }}
          fontFamily="WorkSans_700Bold"
          iconColor={colorScheme === "dark" ? "white" : "#484848"}
          placeholder="Select item"
          valueField="value"
          labelField="label"
          value={props.currentValue}
          onChange={props.onChange}
        />
      </View>
    </>
  );
}
