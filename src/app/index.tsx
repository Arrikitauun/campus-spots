import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
       console.log("Hello from my phone");

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>Best student spots in Kraków</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Arturo Rodríguez Ollero</Text>
        <Text style={styles.cardText}>
          I am from Córdoba, Spain, and I study Computer Engineering at UPM (Madrid).
        </Text>
        <Text style={styles.cardText}>
          My favourite place in Córdoba is the Alcázar de los Reyes Cristianos and its gardens.
        </Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: "#e76f51" }]} />
        <View style={[styles.square, styles.middle, { backgroundColor: "#2a9d8f" }]} />
        <View style={[styles.square, { backgroundColor: "#e9c46a" }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
    padding: 24,
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  card: {
    alignSelf: "stretch",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: "#333",
    marginTop: 4,
  },
  row: {
    alignSelf: "stretch",
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  square: {
    width: 60,
    height: 60,
  },
  middle: {
    flex: 1,
  },
});