import React from 'react';
import { fireEvent, waitFor, render } from '@testing-library/react-native';
import GroceryShoppingList from '../src/components/GroceryShoppingList';


describe('GroceryShoppingList', () => {
    test('given empty GrecoryShoppingList, user can add an item to it', () => {
        const {getByPlaceholderText, getByText, getAllByText} = render(
            <GroceryShoppingList />
        );

        fireEvent.changeText(
            getByPlaceholderText('Enter grocery item'),
            'banana'
        );
        fireEvent.press(
            getByText('Add the item to the list')
        );

        const bananaElements = getAllByText('banana');
        expect(bananaElements).toHaveLength(1);
    });

    test('should update groceryItem state when typing in the TextInput', () => {
        const {getByPlaceholderText} = render(
            <GroceryShoppingList/>
        );

        const input = getByPlaceholderText('Enter grocery item');
        fireEvent.changeText(input, 'Apple');

        expect(input.props.value).toBe('Apple');
    });

    test('should clear groceryItem state after adding item', () => {

        const {getByPlaceholderText, getByRole} = render(
            <GroceryShoppingList />
        );

        const input = getByPlaceholderText('Enter grocery item');
        fireEvent.changeText(input, 'Banana');

        const button = getByRole('button');
        fireEvent.press(button);

        expect(input.props.value).toBe('');
    });




});

