import { createContext, PropsWithChildren, useContext } from "react";
import { Track } from "../types";
import { useState } from "react";
type PlayerContextType = {
  track?: Track;
  setTrack: (track: Track) => void;
};

const PlayerContext = createContext<PlayerContextType>({
  track: undefined,
  setTrack: () => {},
});

export default function PlayerProvider({ children }: PropsWithChildren) {
  const [track, setTrack] = useState<Track>();
  return (
    <PlayerContext.Provider value={{ track, setTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}
export const usePlayerContext = () => useContext(PlayerContext);
