import { ScrollView, StyleSheet, Text } from "react-native";
import { SpotCard } from "@/components/spot-card";
import { CATEGORY_EMOJI, Category, SPOTS, Spot } from "@/data/spots";

const CATEGORY_NAMES: Record<Category, { one: string; many: string }> = {
  sight: { one: "sight", many: "sights" },
  food: { one: "food", many: "food" },
  park: { one: "park", many: "parks" },
  museum: { one: "museum", many: "museums" },
  campus: { one: "campus", many: "campuses" },
  club: { one: "club", many: "clubs" },
};

// All categories, in the same order as CATEGORY_EMOJI
const CATEGORIES = Object.keys(CATEGORY_EMOJI) as Category[];

function countByCategory(spots: Spot[]) {
  const counts: Partial<Record<Category, number>> = {};
  for (const spot of spots) {
    counts[spot.category] = (counts[spot.category] ?? 0) + 1;
  }
  return counts;
}

function categorySummary(spots: Spot[]) {
  const counts = countByCategory(spots);
  return CATEGORIES
    .filter((category) => (counts[category] ?? 0) > 0)
    .map((category) => {
      const n = counts[category] ?? 0;
      const name = n === 1 ? CATEGORY_NAMES[category].one : CATEGORY_NAMES[category].many;
      return `${n} ${name}`;
    })
    .join(" · ");
}

export default function Index() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.subtitle}>{SPOTS.length} places worth visiting</Text>
      <Text style={styles.summary}>{categorySummary(SPOTS)}</Text>
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
    color: "#666",
  },
  summary: {
    marginTop: 4,
    marginBottom: 16,
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
});
