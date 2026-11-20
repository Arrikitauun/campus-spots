import { ScrollView, StyleSheet, Text } from "react-native";
import { SpotCard } from "@/components/spot-card";
import { SPOTS } from "@/data/spots";

export default function Index() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>{SPOTS.length} places worth visiting</Text>
      {SPOTS.map((spot) => (
        <SpotCard key={spot.id} spot={spot} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f6f4",
  },
  content: {
    padding: 16,
  },
  subtitle: {
    marginBottom: 16,
    color: "#666",
  },
});
