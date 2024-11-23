import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Track } from "../types";
import { usePlayerContext } from "../providers/PlayerProvider";

type TrackItemProps = {
  track: Track;
};

const TrackListItem = ({ track }: TrackItemProps) => {
  const { setTrack } = usePlayerContext();
  return (
    <Pressable onPress={() => setTrack(track)} style={styles.container}>
      <Image style={styles.img} source={{ uri: track.album.images[0].url }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.albname}>{track.name}</Text>
        <Text style={styles.artist}>{track.artists[0].name}</Text>
      </View>
    </Pressable>
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

    marginLeft: 10,
    fontWeight: "500",
  },
  artist: {
    color: "grey",
    fontSize: 12,
    marginHorizontal: 10,
  },
});
export default TrackListItem;
