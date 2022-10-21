import react from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Button(props) {
  return (
    <TouchableOpacity onPress={props.click}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
