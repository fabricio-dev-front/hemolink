import { Button, Text, View } from "react-native";

type Props = {
  onNext: () => void;
};

export function Step3({ onNext }: Props) {
  return (
    <View>
      <Text>Como Funciona</Text>
      <Button title="Próximo" onPress={onNext} />
    </View>
  );
}
