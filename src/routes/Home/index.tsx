import React from 'react';
import {Text, TextInput, View, StyleSheet, SafeAreaView, Platform} from 'react-native';

interface Props {}

export default function Home({}: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
        <TextInput style={styles.input}/>
        {
          Platform.OS === "ios" ?
          <Text>Logado de um Iphone</Text>
          :
          <Text>Logado de um Android</Text>
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: "#29292e",
    color: "#f1f1f1",
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  }
});
