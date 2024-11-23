import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Track } from "../types";

type TrackItemProps = {
  track: Track;
};

const TrackListItem = ({ track }: TrackItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: track.album.images[0].url }} />
      <View style={{ flexDirection: "column", flexShrink: 1 }}>
        <Text style={styles.albname}>{track.name}</Text>
        <Text style={styles.artist}>{track.artists[0].name}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  img: {
    aspectRatio: 1,
    borderRadius: 5,
    height: 60,
    marginRight: 10,
  },
  albname: {
    color: "white",
    fontSize: 15,
    marginRight: 2,
    marginLeft: 10,
    fontWeight: "500",
    flexShrink: 1,
  },
  artist: {
    color: "grey",
    fontSize: 12,
    marginHorizontal: 10,
  },
});
export default TrackListItem;
