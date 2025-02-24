import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Zoo {
  id: number;
  title: string;
  desc: string;
  breed: string;
  image: string;
}

interface ZooState {
  data: Zoo[];
}

const initialState: ZooState = {
  data: [],
};

export const zooSlice = createSlice({
  name: "zoo",
  initialState,
  reducers: {
    addZoo: (state, action: PayloadAction<Omit<Zoo, "id">>) => {
      const zooData: Zoo = {
        id: state.data.length + 1,
        ...action.payload,
      };
      state.data = [zooData, ...state.data];
    },
    deleteZoo: (state, action: PayloadAction<{ id: number }>) => {
      state.data = state.data.filter((i) => i.id !== action.payload.id);
    },
    updateZoo: (state, action: PayloadAction<Zoo>) => {
      const index = state.data.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload };
      }
    },
  },
});

export const { addZoo, deleteZoo, updateZoo } = zooSlice.actions;
export default zooSlice.reducer;