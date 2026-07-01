import { Image, StyleSheet, Text, View } from "react-native";

export function Step4() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Juntos, somos a corrente que salva vidas
      </Text>

      <Image
        source={require("../../../assets/img/img-step4.webp")}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.mainTextContainer}>
          Crie ou faça parte de campanhas e mobilize o amor
        </Text>
        <Text style={styles.subTextContainer}>
          Comece agora e faça a diferença!
        </Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    maxWidth: 315,
  },
  mainText: {
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 400,
  },
  textContainer: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 150,
    gap: 10,
    maxWidth: 300,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 13,
    // padding: 10,
    width: 500,
    height: 110,
  },
  mainTextContainer: {
    fontWeight: 500,
    fontSize: 15,
    color: "#1E1E1E",
    paddingHorizontal: 40,
  },
  subTextContainer: {
    fontWeight: 400,
    fontSize: 14,
    color: "#555555",
  },
});
