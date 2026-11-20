import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTransparent: false }}>
      <Stack.Screen name="index" options={{ title: "Campus Spots" }} />
    </Stack>
  );
}
