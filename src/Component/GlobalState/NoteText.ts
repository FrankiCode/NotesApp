import { create } from "zustand";

const useText = create((set) => ({
    text: JSON.parse(localStorage.getItem("text")) || [],
    myNewNote: (myNote) => set((state) => ({
        text: [myNote, ...state.text]
    })),
    deleteButton: (id) => set((state) => ({
        text: state.text.filter((note) => note.id !== id)
    }))
}))

export default useText;