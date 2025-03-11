// src/components/GroceryShoppingList.tsx
import React, { useState, useCallback } from 'react';
import { 
    TextInput,
    Button,
    Text,
    View,
    TouchableOpacity
 } from 'react-native';

function GroceryShoppingList() {

    const [groceryItem, setGroceryItem] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const addNewItemToShoppingList = useCallback(() => {
        setItems([...items, groceryItem]);
        setGroceryItem('');
    }, [groceryItem, items]);

    const removeItem = (itemToRemove: string) => {
        setItems(items.filter(item => item !== itemToRemove));
    };

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
                    <View>
                        <Text key={index}>{item}</Text>
                        <TouchableOpacity
                        testID="button-delete-item-from-list"
                        onPress={() => removeItem(item)}
                        >
                            <Text style={{color: 'red'}}>Delete item</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}

        </>
    )
}

export default GroceryShoppingList