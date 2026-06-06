"use client";

import { useEffect, useState } from "react";

import { View } from "react-native";
import { SplashScreen } from "../SplachScreen";
import { Campanha } from "./Campanha/Campanha";
import { ComoFunciona } from "./ComoFunciona/ComoFunciona";
import { Sobre } from "./Sobre/Sobre";

type Screen = "Splash" | "sobre" | "campanha" | "comoFunciona";

const screens: Screen[] = ["comoFunciona", "sobre", "campanha"];

export function StepsScreen() {
  const [splashVisible, setSplashVisible] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<Screen>("sobre");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (splashVisible) {
    return <SplashScreen />;
  }

  return (
    <View className="flex-1 bg-white justify-center items-center">
      {currentScreen === "sobre" && (
        <Sobre onNext={() => setCurrentScreen("campanha")} />
      )}

      {currentScreen === "campanha" && (
        <Campanha onNext={() => setCurrentScreen("comoFunciona")} />
      )}

      {currentScreen === "comoFunciona" && (
        <ComoFunciona onNext={() => setCurrentScreen("sobre")} />
      )}

      <View className="flex-row mt-5 absolute bottom-5">
        {screens.map((screen) => (
          <View
            key={screen}
            className={`w-[10px] h-[10px] rounded-[5px] m-[5px] ${
              currentScreen === screen ? "bg-[#FF0000]" : "bg-[#ccc]"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
