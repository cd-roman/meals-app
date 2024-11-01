import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({});
