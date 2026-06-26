import { Button, Text, View } from "react-native";

type Props = {
  onNext: () => void;
};

export function Step1({ onNext }: Props) {
  return (
    <View>
      <Text>Campanha</Text>
      <Button title="Próximo" onPress={onNext} />
    </View>
  );
}
