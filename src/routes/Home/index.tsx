import React from "react";
import { Text, View } from "react-native";

interface Props {}

export default function Home({}: Props) {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Home</Text>
    </View>
  );
}
