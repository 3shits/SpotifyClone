import { FlatList, StyleSheet } from "react-native";
import TrackListItem from "@/src/components/TrackListItem";
import { tracks } from "@/assets/data/tracks";

export default function TabOneScreen() {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
