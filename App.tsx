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


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <View>
        <GroceryShoppingList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
