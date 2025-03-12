/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// App.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import GroceryShoppingList from './src/components/GroceryShoppingList';
import store from './src/redux/store';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <GroceryShoppingList />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
});

export default App;
