import { View, Text, StyleSheet, Image, DimensionValue } from "react-native";
import React, { useEffect, useState } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { Ionicons } from "@expo/vector-icons";
import { usePlayerContext } from "../providers/PlayerProvider";

const Player = () => {
  const { track } = usePlayerContext();
  const [sound, setSound] = useState<Sound>();
  const [isPlaying, setIsPlaying] = useState<boolean>();
  const [trackPos, setTrackPos] = useState<DimensionValue>();
  useEffect(() => {
    playTrack();
  }, [track]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  const playTrack = async () => {
    if (!track?.preview_url) return;

    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: track.preview_url,
    });
    setSound(newSound);
    newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    await newSound.playAsync();
  };

  const PlayPauseTrack = async () => {
    if (!sound) return;

    if (isPlaying) await sound.pauseAsync();
    else await sound.playAsync();
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    setIsPlaying(status.isPlaying);
    if (status.durationMillis) {
      let percent: string = (
        (status.positionMillis / status.durationMillis) *
        100
      ).toFixed(0);
      let progress: `${number}%` = `${parseInt(percent)}%`;
      setTrackPos(progress);
    }
  };
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
          name={isPlaying ? "pause" : "play"}
          size={22}
          color={track?.preview_url ? "white" : "gray"}
          onPress={PlayPauseTrack}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 3,
          borderRadius: 5,
          top: -4,
          width: trackPos,
        }}
      >
        {/*Seeking Bar*/}
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
    padding: 5,
    paddingRight: 15,
  },

  img: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 5,
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
