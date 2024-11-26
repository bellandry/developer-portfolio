import { create } from "zustand";

// Définit le type de l'état
interface OpenSheetState {
  isOpen: boolean;
  setIsOpen: () => void;
}

const useOpenSheetStore = create<OpenSheetState>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useOpenSheetStore;
