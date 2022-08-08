import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recentlyAdded: [],
};

export const recentlyAddedSlice = createSlice({
    name: 'recentlyAdded',
    initialState,
    reducers: {
        recentlyAddedAdd: (state, action) => {
            state.recentlyAdded.push({
                id: action.payload.id,
                img: action.payload.img,
                title: action.payload.title,
                rate: action.payload.rate,
                type: action.payload.type,
            });
        },

        recentlyAddedRemove: (state, action) => {
            const itemId = action.payload;
            state.recentlyAdded = state.recentlyAdded.filter(
                (itme) => itme.id !== itemId
            );
        },
    },
});

export const { recentlyAddedAdd, recentlyRemove } = recentlyAddedSlice.actions;

export default recentlyAddedSlice.reducer;
