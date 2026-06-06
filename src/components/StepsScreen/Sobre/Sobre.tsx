import { Button, Text, View } from "react-native";

type Props = {
  onNext: () => void;
};

export function Sobre({ onNext }: Props) {
  return (
    <View>
      <Text>Sobre</Text>
      <Button title="Próximo" onPress={onNext} />
    </View>
  );
}
