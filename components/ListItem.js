import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity style={styles.main} onPress={() => deleteHandler(el.id)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
  },
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%',
  }
});
