import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export function Step3() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Encontre
          <Text style={styles.textRed}> hemocentros </Text>
          precisando do seu
          <Text style={styles.textRed}> tipo sanguíneo </Text>
          perto de você
        </Text>
        <View>
          <Text style={styles.subtitle}>Mais facilidade para doar,</Text>
          <Text style={styles.subtitle}>mais vidas para salvar.</Text>
        </View>
      </View>

      <Image
        source={require("../../../assets/img/mapa.png")}
        style={styles.image}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 12,
  },
  image: {
    width: 400,
    height: 370,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    color: "#000000",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: 500,
    color: "#555555",
  },
  textRed: {
    color: "#E31B23",
  },
});
