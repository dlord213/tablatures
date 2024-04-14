import { View } from "react-native";
import RenderTabSection from "./render_tab_section";
export default function GenerateTopTabs(props) {
  return (
    <View className="flex flex-col bg-gray-200 rounded-lg">
      {props.data.slice(props.start, props.end).map((elem, index) => {
        if (index == 9) {
          return (
            <RenderTabSection
              title={elem.trackData + " - " + elem.artistData}
              last={true}
              key={index}
              link={elem.link}
            />
          );
        }
        return (
          <RenderTabSection
            title={elem.trackData + " - " + elem.artistData}
            key={index}
            link={elem.link}
          />
        );
      })}
    </View>
  );
}
