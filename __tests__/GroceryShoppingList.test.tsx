// __tests__/GroceryShoppingList.test.tsx
import React from 'react';
import { fireEvent, waitFor, render, screen } from '@testing-library/react-native';
import GroceryShoppingList from '../src/components/GroceryShoppingList';
import store from '../src/redux/store';
import { Provider } from 'react-redux';

const renderWithStore = (component: any) => {
    return render(<Provider store={store}>{component}</Provider>);
};




describe('GroceryShoppingList', () => {

    test('should remove item from list when delete button is pressed', async () => {
        const {getByPlaceholderText, getByText, getByTestId, getAllByText} = renderWithStore(
            <GroceryShoppingList />
        );

        const input = getByPlaceholderText('Enter grocery item');
        fireEvent.changeText(input, 'Banana');

        const button = getByText('Add the item to the list');
        fireEvent.press(button);

        const bananaElements = getAllByText('Banana');

        expect(bananaElements).toHaveLength(1);

        const deleteButton = getByTestId('button-delete-item-from-list-0');
        fireEvent.press(deleteButton);

        await waitFor(() => {
            // expect(screen.queryByText('Banana')).toBeNull();
            expect(() => screen.getByText('Banana')).toThrow();
        });
    });

    test('given empty GrecoryShoppingList, user can add an item to it', () => {
        const {getByPlaceholderText, getByText, getAllByText} = renderWithStore(
            <GroceryShoppingList />
        );

        fireEvent.changeText(
            getByPlaceholderText('Enter grocery item'),
            'Juice'
        );
        fireEvent.press(
            getByText('Add the item to the list')
        );

        const juiceElements = getAllByText('Juice');
        expect(juiceElements).toHaveLength(1);
    });

    test('should update groceryItem state when typing in the TextInput', () => {
        const {getByPlaceholderText} = renderWithStore(
            <GroceryShoppingList/>
        );

        const input = getByPlaceholderText('Enter grocery item');
        fireEvent.changeText(input, 'Apple');

        expect(input.props.value).toBe('Apple');
    });

    test('should clear groceryItem state after adding item', () => {

        const {getByPlaceholderText, getByRole} = renderWithStore(
            <GroceryShoppingList />
        );

        const input = getByPlaceholderText('Enter grocery item');
        fireEvent.changeText(input, 'Pencil');

        const button = getByRole('button');
        fireEvent.press(button);

        expect(input.props.value).toBe('');
    });




});



describe('GroceryShoppingList - test integration', () => {

    test('should enter grocery item, add item to the list and clear input', async () => {
        const {getByPlaceholderText, getByRole} = renderWithStore(
            <GroceryShoppingList />
        );

        const input = getByPlaceholderText('Enter grocery item');
        fireEvent.changeText(input, 'Water');

        const button = getByRole('button');
        fireEvent.press(button);

        await waitFor(() => {
            // expect(screen.getByText('Water')).toBeTruthy();
            expect(screen.getByText('Water')).toBeDefined();
        });

        await waitFor(() => {
            expect(input.props.value).toBe('');
        });
    });

});


