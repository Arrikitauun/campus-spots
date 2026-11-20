import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CATEGORY_EMOJI, Category } from "@/data/spots";

const CATEGORIES = Object.keys(CATEGORY_EMOJI) as Category[];

export function CategoryChips() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.row}
    >
      {CATEGORIES.map((category) => (
        <View key={category} style={styles.chip}>
          <Text style={styles.emoji}>{CATEGORY_EMOJI[category]}</Text>
          <Text style={styles.label}>{category}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginHorizontal: -16,
    marginBottom: 16,
    flexGrow: 0,
  },
  row: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "white",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
  },
  emoji: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textTransform: "capitalize",
  },
});
