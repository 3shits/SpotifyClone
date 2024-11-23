import { FlatList } from "react-native";
import React from "react";
import TrackListItem from "@/src/components/TrackListItem";
import { tracks } from "@/assets/data/tracks";
const FavouritesScreen = () => {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FavouritesScreen;
