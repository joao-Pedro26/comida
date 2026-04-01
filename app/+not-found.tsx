import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found 404" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go to home page!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
