import { TYPE_ICONS } from "@/types/typeIcon";
import Svg, { Path, Rect } from "react-native-svg";

export function IconCalendar({ color = "#000000", width = 26, height = 26 }: TYPE_ICONS) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <Path d="M16 2v4M8 2v4M3 10h18" />
    </Svg>
  );
}
