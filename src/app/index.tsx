import { StepsScreen } from "@/components/StepsScreen";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <StepsScreen />
    </ThemedView>
  );
}
