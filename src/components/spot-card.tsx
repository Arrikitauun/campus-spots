import { StyleSheet, Text, View } from "react-native";
import { CATEGORY_EMOJI, Spot } from "@/data/spots";
import { CategoryBadge } from "@/components/category-badge";

interface Props {
  spot: Spot;
}

export function SpotCard({ spot }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{CATEGORY_EMOJI[spot.category]}</Text>
      <View style={styles.text}>
        <Text style={styles.name}>{spot.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {spot.description}
        </Text>
        <CategoryBadge category={spot.category} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "white",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  emoji: {
    fontSize: 32,
  },
  text: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
  },
  description: {
    marginTop: 2,
    color: "#666",
  },
});
