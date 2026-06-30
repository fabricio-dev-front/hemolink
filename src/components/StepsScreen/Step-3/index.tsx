import { StyleSheet, Text, View } from "react-native";

export function Step3() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Encontre hemocentros precisando do seu tipo sanguíneo perto de você
        </Text>
        <View>
          <Text style={styles.textRed}>Mais facilidade para doar,</Text>
          <Text style={styles.textP}>mais vidas para salvar.</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
  },
  textRed: {
    color: "#e31b23",
  },
  textP: {
    color: "green",
  },
});
