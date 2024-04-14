import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Buttons(props) {
  if (props.length >= 7) {
    return (
      <View className="flex flex-row my-2">
        <Pressable className="bg-red-500 p-2 px-3 mr-2 rounded-lg active:bg-red-400">
          <Ionicons name="caret-back" color={"white"} />
        </Pressable>
        <Pressable className="bg-red-500 p-2 px-3 rounded-lg active:bg-red-400">
          <Ionicons name="caret-forward" color={"white"} />
        </Pressable>
      </View>
    );
  }
}
