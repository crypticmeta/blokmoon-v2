import create, { State } from "zustand";

interface DataStore extends State {
  loading: boolean;
}

const useDataStore = create<DataStore>((set, _get) => ({
  loading: false,
//     getLoading: async () => {
//         loading
//     set((s) => {
//       s.loading = loading
//     });
//   },
}));

export default useDataStore;
