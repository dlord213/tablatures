import { ActivityIndicator, ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ChordHeader from "./components/chord_header";
import react, { useState } from "react";
import GenerateChord from "./components/generate_chords";
import { useColorScheme } from "nativewind";

const keys = [
  <>
    <GenerateChord chord="C" />
    <GenerateChord chord="Cm" />
    <GenerateChord chord="C7" />
    <GenerateChord chord="Cm7" />
    <GenerateChord chord="Cdim" />
    <GenerateChord chord="Cdim7" />
    <GenerateChord chord="Csus2" />
    <GenerateChord chord="Csus4" />
    <GenerateChord chord="C7sus2" />
    <GenerateChord chord="C7sus4" />
    <GenerateChord chord="C6" />
    <GenerateChord chord="Cm6" />
    <GenerateChord chord="C9" />
    <GenerateChord chord="Cm9" />
    <GenerateChord chord="Cmaj7" />
    <GenerateChord chord="C7/6" />
  </>,
  <>
    <GenerateChord chord="C#" />
    <GenerateChord chord="C#m" />
    <GenerateChord chord="C#7" />
    <GenerateChord chord="C#m7" />
    <GenerateChord chord="C#dim" />
    <GenerateChord chord="C#dim7" />
    <GenerateChord chord="C#sus2" />
    <GenerateChord chord="C#sus4" />
    <GenerateChord chord="C#7sus2" />
    <GenerateChord chord="C#7sus4" />
    <GenerateChord chord="C#6" />
    <GenerateChord chord="C#m6" />
    <GenerateChord chord="C#9" />
    <GenerateChord chord="C#m9" />
    <GenerateChord chord="C#maj7" />
    <GenerateChord chord="C#7/6" />
  </>,
  <>
    <GenerateChord chord="D" />
    <GenerateChord chord="Dm" />
    <GenerateChord chord="D7" />
    <GenerateChord chord="Dm7" />
    <GenerateChord chord="Ddim" />
    <GenerateChord chord="Ddim7" />
    <GenerateChord chord="Dsus2" />
    <GenerateChord chord="Dsus4" />
    <GenerateChord chord="D7sus2" />
    <GenerateChord chord="D7sus4" />
    <GenerateChord chord="D6" />
    <GenerateChord chord="Dm6" />
    <GenerateChord chord="D9" />
    <GenerateChord chord="Dm9" />
    <GenerateChord chord="Dmaj7" />
    <GenerateChord chord="D7/6" />
  </>,
  <>
    <GenerateChord chord="D#" />
    <GenerateChord chord="D#m" />
    <GenerateChord chord="D#7" />
    <GenerateChord chord="D#m7" />
    <GenerateChord chord="D#dim" />
    <GenerateChord chord="D#dim7" />
    <GenerateChord chord="D#sus2" />
    <GenerateChord chord="D#sus4" />
    <GenerateChord chord="D#7sus2" />
    <GenerateChord chord="D#7sus4" />
    <GenerateChord chord="D#6" />
    <GenerateChord chord="D#m6" />
    <GenerateChord chord="D#9" />
    <GenerateChord chord="D#m9" />
    <GenerateChord chord="D#maj7" />
    <GenerateChord chord="D#7/6" />
  </>,
  <>
    <GenerateChord chord="E" />
    <GenerateChord chord="Em" />
    <GenerateChord chord="E7" />
    <GenerateChord chord="Em7" />
    <GenerateChord chord="Edim" />
    <GenerateChord chord="Edim7" />
    <GenerateChord chord="Esus2" />
    <GenerateChord chord="Esus4" />
    <GenerateChord chord="E7sus2" />
    <GenerateChord chord="E7sus4" />
    <GenerateChord chord="E6" />
    <GenerateChord chord="Em6" />
    <GenerateChord chord="E9" />
    <GenerateChord chord="Em9" />
    <GenerateChord chord="Emaj7" />
    <GenerateChord chord="E7/6" />
  </>,
  <>
    <GenerateChord chord="F" />
    <GenerateChord chord="Fm" />
    <GenerateChord chord="F7" />
    <GenerateChord chord="Fm7" />
    <GenerateChord chord="Fdim" />
    <GenerateChord chord="Fdim7" />
    <GenerateChord chord="Fsus2" />
    <GenerateChord chord="Fsus4" />
    <GenerateChord chord="F7sus2" />
    <GenerateChord chord="F7sus4" />
    <GenerateChord chord="F6" />
    <GenerateChord chord="Fm6" />
    <GenerateChord chord="F9" />
    <GenerateChord chord="Fm9" />
    <GenerateChord chord="Fmaj7" />
    <GenerateChord chord="F7/6" />
  </>,
  <>
    <GenerateChord chord="F#" />
    <GenerateChord chord="F#m" />
    <GenerateChord chord="F#7" />
    <GenerateChord chord="F#m7" />
    <GenerateChord chord="F#dim" />
    <GenerateChord chord="F#dim7" />
    <GenerateChord chord="F#sus2" />
    <GenerateChord chord="F#sus4" />
    <GenerateChord chord="F#7sus2" />
    <GenerateChord chord="F#7sus4" />
    <GenerateChord chord="F#6" />
    <GenerateChord chord="F#m6" />
    <GenerateChord chord="F#9" />
    <GenerateChord chord="F#m9" />
    <GenerateChord chord="F#maj7" />
    <GenerateChord chord="F#7/6" />
  </>,
  <>
    <GenerateChord chord="G" />
    <GenerateChord chord="Gm" />
    <GenerateChord chord="G7" />
    <GenerateChord chord="Gm7" />
    <GenerateChord chord="Gdim" />
    <GenerateChord chord="Gdim7" />
    <GenerateChord chord="Gsus2" />
    <GenerateChord chord="Gsus4" />
    <GenerateChord chord="G7sus2" />
    <GenerateChord chord="G7sus4" />
    <GenerateChord chord="G6" />
    <GenerateChord chord="Gm6" />
    <GenerateChord chord="G9" />
    <GenerateChord chord="Gm9" />
    <GenerateChord chord="Gmaj7" />
    <GenerateChord chord="G7/6" />
  </>,
  <>
    <GenerateChord chord="G#" />
    <GenerateChord chord="G#m" />
    <GenerateChord chord="G#7" />
    <GenerateChord chord="G#m7" />
    <GenerateChord chord="G#dim" />
    <GenerateChord chord="G#dim7" />
    <GenerateChord chord="G#sus2" />
    <GenerateChord chord="G#sus4" />
    <GenerateChord chord="G#7sus2" />
    <GenerateChord chord="G#7sus4" />
    <GenerateChord chord="G#6" />
    <GenerateChord chord="G#m6" />
    <GenerateChord chord="G#9" />
    <GenerateChord chord="G#m9" />
    <GenerateChord chord="G#maj7" />
    <GenerateChord chord="G#7/6" />
  </>,
  <>
    <GenerateChord chord="A" />
    <GenerateChord chord="Am" />
    <GenerateChord chord="A7" />
    <GenerateChord chord="Am7" />
    <GenerateChord chord="Adim" />
    <GenerateChord chord="Adim7" />
    <GenerateChord chord="Asus2" />
    <GenerateChord chord="Asus4" />
    <GenerateChord chord="A7sus2" />
    <GenerateChord chord="A7sus4" />
    <GenerateChord chord="A6" />
    <GenerateChord chord="Am6" />
    <GenerateChord chord="A9" />
    <GenerateChord chord="Am9" />
    <GenerateChord chord="Amaj7" />
    <GenerateChord chord="A7/6" />
  </>,
  <>
    <GenerateChord chord="A#" />
    <GenerateChord chord="A#m" />
    <GenerateChord chord="A#7" />
    <GenerateChord chord="A#m7" />
    <GenerateChord chord="A#dim" />
    <GenerateChord chord="A#dim7" />
    <GenerateChord chord="A#sus2" />
    <GenerateChord chord="A#sus4" />
    <GenerateChord chord="A#7sus2" />
    <GenerateChord chord="A#7sus4" />
    <GenerateChord chord="A#6" />
    <GenerateChord chord="A#m6" />
    <GenerateChord chord="A#9" />
    <GenerateChord chord="A#m9" />
    <GenerateChord chord="A#maj7" />
    <GenerateChord chord="A#7/6" />
  </>,
  <>
    <GenerateChord chord="B" />
    <GenerateChord chord="Bm" />
    <GenerateChord chord="B7" />
    <GenerateChord chord="Bm7" />
    <GenerateChord chord="Bdim" />
    <GenerateChord chord="Bdim7" />
    <GenerateChord chord="Bsus2" />
    <GenerateChord chord="Bsus4" />
    <GenerateChord chord="B7sus2" />
    <GenerateChord chord="B7sus4" />
    <GenerateChord chord="B6" />
    <GenerateChord chord="Bm6" />
    <GenerateChord chord="B9" />
    <GenerateChord chord="Bm9" />
    <GenerateChord chord="Bmaj7" />
    <GenerateChord chord="B7/6" />
  </>,
];

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaProvider className="dark:bg-slate-950">
      <SafeAreaView className="p-8">
        <ChordHeader
          dropdownData={dropdownData}
          currentValue={currentIndex}
          onChange={(item) => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 500);
            setCurrentIndex(item.value);
          }}
        />
      </SafeAreaView>
      <ScrollView className="mb-8">
        {isLoading ? (
          <>
            <ActivityIndicator size={128} color={"#484848"} />
          </>
        ) : (
          <>
            <View className="flex flex-row flex-wrap justify-around">
              {keys[currentIndex]}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
}
