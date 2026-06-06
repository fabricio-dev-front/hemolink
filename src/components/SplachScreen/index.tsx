import { Text, View } from "react-native";
import { IconGolaSague } from "../../assets/icons/golaSague";

export function SplashScreen() {
  return (
    <View className="flex-1 bg-redPrimary items-center justify-center">
      <View className="items-center justify-center">
        <IconGolaSague color="#ffffff" height={300} width={300} />
        <View className="flex-row">
          <Text className="text-[58px] text-textPrimary font-bold">Doe</Text>
          <Text className="text-redSecondary absolute -right-10 -top-5 font-bold text-[58px]">+</Text>
        </View>
      </View>
    </View>
  );
}
