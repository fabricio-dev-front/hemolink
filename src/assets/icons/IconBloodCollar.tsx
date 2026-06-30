import { TYPE_ICONS } from "@/types/typeIcon";
import Svg, { Path } from "react-native-svg";

export function IconBloodCollar({ color = "#E31B23", width = 24, height = 23 }: TYPE_ICONS) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M12 21.5c-3.5 0-6.5-2.5-6.5-6 0-3 3-6.5 6.5-12 3.5 5.5 6.5 9 6.5 12 0 3.5-3 6-6.5 6z"
        fill={color}
      />
    </Svg>
  );
}
