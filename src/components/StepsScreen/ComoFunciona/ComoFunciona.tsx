import { Button, Text, View } from "react-native";

type Props = {
  onNext: () => void;
};

export function ComoFunciona({ onNext }: Props) {
  return (
    <View>
      <Text>Como Funciona</Text>
      <Button title="Próximo" onPress={onNext} />
    </View>
  );
}
