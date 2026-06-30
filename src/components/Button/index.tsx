import { Pressable, PressableProps, Text } from "react-native";

type ButtonProps = PressableProps & {
  className?: string;
  children: React.ReactNode;
};

export function ButtonComponent({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={`bg-secondary rounded-[13px] px-[60px] py-4 items-center ${className ?? ""}`}
      {...props}
    >
      <Text className="text-textSecondary text-[18px] font-medium">
        {children}
      </Text>
    </Pressable>
  );
}
