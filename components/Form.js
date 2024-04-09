import { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';

export default function Form({ addHandler }) {
  const [text, setText] = useState('');

  const onChange = (text) => {
    setText(text);
  }

  return (
    <View>
      <TextInput 
        style={styles.input}
        onChangeText={onChange}
        placeholder='Write todo'
      />
      <Button style={styles.button} onPress={() => addHandler(text)} title='Add todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  },
  button: {
    backgroundColor: 'green',
    color: 'green',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
    height: 100,
  }
});
