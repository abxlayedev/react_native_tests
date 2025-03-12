// srx/redux/grocerySlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GroceryState {
    items: string[];
}

const initialState: GroceryState = {
    items: [],
};

const grocerySlice = createSlice({
    name: 'grocery',
    initialState,
    reducers: {
        addItems: (state: any, action: PayloadAction<string>) => {
            if (!state.items.includes(action.payload)) {
                state.items.push(action.payload);
            }
        },
        removeItem: (state: any, action: PayloadAction<string>) => {
            state.items = state.items.filter((item: string) => item !== action.payload);
        },
    },
});

export const {addItems, removeItem} = grocerySlice.actions;

export default grocerySlice.reducer;
