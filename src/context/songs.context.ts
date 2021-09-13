import { createContext } from "react";
import { Song } from "../models/Song";

interface SongContextData {
    songs: Song[];
    setSongs: (s: Song[]) => void;
}

const SongContext = createContext<SongContextData>({
    songs: [],
    setSongs: () => {},
});

export default SongContext;

