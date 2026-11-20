import { StyleSheet, Text, View } from "react-native";
import { Category } from "@/data/spots";

const CATEGORY_COLOR: Record<Category, string> = {
  sight: "#fde2c8",
  food: "#fff1b8",
  park: "#d3f0d2",
  museum: "#e3dcf7",
  campus: "#d6e8fb",
  club: "#fbd5e8",
};

const FALLBACK_COLOR = "#e5e5e5";

interface Props {
  category: Category;
}

export function CategoryBadge({ category }: Props) {
  const backgroundColor = CATEGORY_COLOR[category] ?? FALLBACK_COLOR;

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={styles.label}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    textTransform: "capitalize",
  },
});
