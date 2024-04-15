import { View, Text, Switch, Pressable, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import react, { useState } from "react";
import SettingsHeader from "./components/settings_header";
import { useColorScheme } from "nativewind";

function CreateColor(props) {
  return (
    <Pressable
      className={`bg-${props.color}-500 rounded-full shadow-inner active:bg-${props.color}-400`}
    >
      <View className="w-[48px] h-[48px]"></View>
    </Pressable>
  );
}

export default function Page() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [darkModeIsEnabled, setDarkModeIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setDarkModeIsEnabled((previousState) => !previousState);
    toggleColorScheme();
  };

  return (
    <SafeAreaProvider className="dark:bg-slate-950">
      <SafeAreaView className="p-8  ">
        <SettingsHeader />
        <View className="flex flex-row justify-between my-2 items-center">
          <Text
            style={{ fontFamily: "WorkSans_400Regular" }}
            className="text-[#484848] dark:text-white"
          >
            Dark Mode
          </Text>
          <Switch
            thumbColor={colorScheme === "dark" ? "white" : "#EF4444"}
            trackColor={{ false: "#969696", true: "#484848" }}
            value={colorScheme === "dark" ? true : false}
            onValueChange={toggleSwitch}
          />
        </View>
        <Text
          className=" text-[#242424] hidden"
          style={{ fontFamily: "WorkSans_400Regular" }}
        >
          Accent Colors
        </Text>
        <ScrollView
          horizontal={true}
          className="my-2 rounded-xl bg-gray-200 hidden"
          contentContainerStyle={{
            display: "flex",
            padding: 16,
            gap: 8,
          }}
        >
          <CreateColor color="red" />
          <CreateColor color="yellow" />
          <CreateColor color="orange" />
          <CreateColor color="rose" />
          <CreateColor color="pink" />
          <CreateColor color="green" />
          <CreateColor color="sky" />
          <CreateColor color="violet" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
