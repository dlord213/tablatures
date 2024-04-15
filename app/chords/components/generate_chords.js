import { useColorScheme } from "nativewind";
import { View, Text } from "react-native";
import ChordChart from "react-native-chord-charts";
export default function GenerateChord(props) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex flex-col items-center m-2">
      <Text
        style={{ fontFamily: "WorkSans_400Regular" }}
        className="text-2xl dark:text-white"
      >
        {props.chord}
      </Text>
      <ChordChart
        chordKey={props.chord}
        showTuning={true}
        color={colorScheme === "dark" ? "white" : "#242424"}
      />
    </View>
  );
}
