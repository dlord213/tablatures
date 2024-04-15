import { View, Text, Pressable } from "react-native";
export default function RenderTopTabsHeader() {
  return (
    <View className="flex flex-col my-4">
      <Text
        className="text-[#484848] text-xl dark:text-slate-50"
        style={{ fontFamily: "WorkSans_500Medium" }}
      >
        Top tabs
      </Text>
      <View className="flex flex-row mt-2" style={{ gap: 2 }}>
        <Pressable
          className={`bg-red-500 p-1 px-3 rounded-lg active:bg-red-400 dark:bg-slate-50`}
        >
          <Text
            className="text-white dark:text-[#242424]"
            style={{ fontFamily: "WorkSans_500Medium" }}
          >
            All-time
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
