import React, { useState, useCallback } from 'react';
import { 
    TextInput,
    Button,
    Text
 } from 'react-native';

function GroceryShoppingList() {

    const [groceryItem, setGroceryItem] = useState<string>('');
    const [items, setItems] = useState<String[]>([]);

    const addNewItemToShoppingList = useCallback(() => {
        setItems([...items, groceryItem]);
        setGroceryItem('');
    }, [groceryItem, items]);

    return (
        <>
            <TextInput
                value={groceryItem}
                placeholder="Enter grocery item"
                onChangeText={(text) => setGroceryItem(text)}
            />

            <Button
                title="Add the item to the list"
                onPress={addNewItemToShoppingList}
            />

            {items.map((item, index) => {
                return (
                    <Text key={index}>{item}</Text>
                )
            })}
        </>
    )
}

export default GroceryShoppingList