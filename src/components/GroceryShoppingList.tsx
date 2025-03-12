// src/components/GroceryShoppingList.tsx
import React, { useCallback, useState } from 'react';
import {
    TextInput,
    Button,
    Text,
    View,
    TouchableOpacity,
 } from 'react-native';
 import { useDispatch, useSelector } from 'react-redux';
 import { addItems, removeItem } from '../redux/grocerySlice';

function GroceryShoppingList() {

    const [groceryItem, setGroceryItem] = useState<string>('');
    const items = useSelector((state: any) => state.grocery.items);
    const dispatch = useDispatch();

    const addNewItemToShoppingList = useCallback(() => {
        if (!items.includes(groceryItem)) {
            dispatch(addItems(groceryItem));
        }
        setGroceryItem('');
    }, [items, groceryItem]);

    const deleteItem = (itemToRemove: string) => {
        dispatch(removeItem(itemToRemove));
    };

    return (
        <View>
            <TextInput
                value={groceryItem}
                placeholder="Enter grocery item"
                onChangeText={(text) => setGroceryItem(text)}
            />

            <Button
                title="Add the item to the list"
                onPress={addNewItemToShoppingList}
            />

            {items.map((item: string, index: number) => {
                return (
                    <View key={index}>
                        <Text>{item}</Text>
                        <TouchableOpacity
                        testID={`button-delete-item-from-list-${index}`}
                        onPress={() => deleteItem(item)}
                        >
                            <Text style={{color: 'red'}}>Delete item</Text>
                        </TouchableOpacity>
                    </View>
                );
            })}

        </View>
    );
}

export default GroceryShoppingList