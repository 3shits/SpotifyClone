import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import TrackListItem from "@/src/components/TrackListItem";
import { tracks } from "@/assets/data/tracks";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        {/*Header*/}
        <FontAwesome name="search" size={16} color={"gray"} />
        <TextInput
          placeholder="Start Discovering"
          style={styles.input}
          placeholderTextColor={"grey"}
        />
        <Text style={{ color: "white" }}>Cancel</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#121314",
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    color: "white",
  },
});
