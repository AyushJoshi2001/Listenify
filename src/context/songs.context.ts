import { createContext } from "react";

interface SongContextData {
    Song_ID: number;
    Song_Name?: string;
    Artist?: string;
    Year?: number;
    Download_URL?: string;
    Img_URL?: string;
}

const SongContext = createContext<SongContextData>({
    Song_ID: 0,
});

export default SongContext;

