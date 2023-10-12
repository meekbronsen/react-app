// We want the component to rerender only if the counter property changes and not max

import { create } from "zustand";

interface CounterStore {
    counter: number;
    max: number
    increment: () => void; 
    reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => {
    return {
        counter: 0,
        max: 5,
        increment: () => set(store => ({ counter: store.counter + 1 })), 
        reset: () => set(() => ({max: 10}))
}})

export default useCounterStore;