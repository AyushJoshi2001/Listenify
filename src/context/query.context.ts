import { createContext } from "react";

interface QueryData {
    query: string;
    setQuery: (query: string) => void;
}

const queryContext = createContext<QueryData>({query: "", setQuery: () => {}});

export default queryContext;