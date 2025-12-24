import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Hello World.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "orange",
  },
  content: {
    fontSize: 52,
  },
})
