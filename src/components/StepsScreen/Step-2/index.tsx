import { Button, Text, View } from "react-native";

type Props = {
  onNext: () => void;
};

export function Step2({ onNext }: Props) {
  return (
    <View>
      <Text>Sobre</Text>
      <Button title="Próximo" onPress={onNext} />
    </View>
  );
}
