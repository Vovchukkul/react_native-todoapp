import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Buy car' },
    { id: 3, text: 'Clean the room' },
    { id: 4, text: 'Became a millioner' },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => [
      {
        id: listOfItems.length + 1,
        text: text,
      },
      ...list,
    ]);
  };

  const deleteHandler = (id) => {
    setListOfItems((list) => list.filter((item) => item.id !== id));
  }

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
