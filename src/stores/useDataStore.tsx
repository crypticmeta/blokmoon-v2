import create, { State } from "zustand";
import { devtools } from "zustand/middleware";
interface DataStore extends State {
  setLoadingTrue: any;
  setLoadingFalse: any;
  loading: boolean;
}

const dataStore =((set, _get) => ({
  loading: false,
  setLoadingTrue: () => set({ loading: true }),
  setLoadingFalse: () => set({ loading: false }),
}));

const useDataStore = create(devtools(dataStore));
export default useDataStore;
