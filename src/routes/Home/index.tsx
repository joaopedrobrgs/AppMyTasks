import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {}

export default function Home({}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Dev!</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container: {flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#121214"},
  title: {fontSize: 20, fontWeight: "bold", color: "white"}
  }
)
