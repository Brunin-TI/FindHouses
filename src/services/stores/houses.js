import create from 'zustand';

export const useHousesStore = create(set => ({
  housesList: [],
  setHouseList: housesList => set({ housesList }),

  selectedHouse: null,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),
}));
