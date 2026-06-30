import { StyleSheet, Text, View } from "react-native";
import { IconGolaSague } from "../../assets/icons/golaSague";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <IconGolaSague color="#ffffff" height={300} width={300} />
        <View style={styles.row}>
          <Text style={styles.logoText}>Doe</Text>
          <Text style={styles.plusText}>+</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E31B23",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  logoText: {
    fontSize: 58,
    color: "#F0F0F0",
    fontWeight: "bold",
  },
  plusText: {
    color: "#960018",
    position: "absolute",
    right: -40,
    top: -20,
    fontWeight: "bold",
    fontSize: 58,
  },
});
