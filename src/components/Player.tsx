import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { usePlayerContext } from "../providers/PlayerProvider";
const Player = () => {
  const { track } = usePlayerContext();
  if (!track) return null;
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <Image style={styles.img} source={{ uri: track.album.images[0].url }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.albname}>{track.name}</Text>
          <Text style={styles.artist}>{track.artists[0].name}</Text>
        </View>
        <Ionicons
          name={"heart-outline"}
          size={20}
          color={"white"}
          style={{ marginHorizontal: 10 }}
        />
        <Ionicons
          disabled={!track?.preview_url}
          name={"play"}
          size={22}
          color={track?.preview_url ? "white" : "gray"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -80,
    height: 75,
    padding: 10,
    width: "100%",
  },
  player: {
    backgroundColor: "#286660",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderRadius: 5,
    padding: 3,
    paddingRight: 15,
  },

  img: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  albname: {
    color: "white",

    fontWeight: "500",
  },
  artist: {
    color: "lightgray",
    fontSize: 12,
  },
});
export default Player;
