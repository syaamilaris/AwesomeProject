import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Button from "./Button";

export default function App() {
  const [name, setName] = useState();
  const [nameInput, setNameInput] = useState("");

  return (
    <View style={styles.container}>
      {!name && (
        <View>
          <Text>
            This is my first try on making a mobile apps using react native :D
          </Text>
          <Text>Wait for the awesome contents later!</Text>
        </View>
      )}
      {name && (
        <View>
          <Text style={styles.nameText}>Hi {name}!</Text>
        </View>
      )}

      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 250, height: 250 }}
      />
      <StatusBar style="auto" />
      <TextInput
        placeholder="Enter Name"
        onChangeText={(text) => setNameInput(text)}
      />
      <Button
        name="This is my name!"
        click={() => {
          setName(nameInput);
          setNameInput("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 42,
    color: "aqua",
  },
});
