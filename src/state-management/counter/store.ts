// Managing the state of counter using zustand.

import { create } from "zustand";

// Create a store for managing the state of our counter

// Create the shape of the store
interface CounterStore {
    counter: number; // The state
    increment: () => void; // The dispatch
    reset: () => void;
}

// Create takes a functions as an argument
// Create returns a custom hook.
const useCounterStore = create<CounterStore>((set) => {
    // In this object we implement our store.
    return {
        counter: 0,
        increment: () => set(store => ({ counter: store.counter + 1 })), // set takes the current state and returns the next state
        reset: () => set(() => ({counter: 0}))
}})

export default useCounterStore;