import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import react, { useState } from "react";
import ScalesHeader from "./components/scales_header";
import { ActivityIndicator, ScrollView } from "react-native";
import { useColorScheme } from "nativewind";
import { Image } from "expo-image";

const dropdownData = [
  { label: "C", value: 0 },
  { label: "C#", value: 1 },
  { label: "D", value: 2 },
  { label: "D#", value: 3 },
  { label: "E", value: 4 },
  { label: "F", value: 5 },
  { label: "F#", value: 6 },
  { label: "G", value: 7 },
  { label: "G#", value: 8 },
  { label: "A", value: 9 },
  { label: "A#", value: 10 },
  { label: "B", value: 11 },
];

export default function Page() {
  const [currentValue, setCurrentValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="p-8">
        <ScalesHeader
          dropdownData={dropdownData}
          currentValue={currentValue}
          onChange={(item) => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 750);
            setCurrentValue(item.value);
          }}
        />
      </SafeAreaView>
      <ScrollView>
        {isLoading ? (
          <>
            <ActivityIndicator size={128} color={"#484848"} />
          </>
        ) : (
          <>
            <Image
              source="https://i0.wp.com/www.constantinecruz.com/wp-content/uploads/2020/08/C-MAJOR-PENTATONIC-SCALE-FORMULA-OK.jpg?resize=787.5%2C332&ssl=1"
              className="flex flex-1 w-full"
            />
          </>
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
}
