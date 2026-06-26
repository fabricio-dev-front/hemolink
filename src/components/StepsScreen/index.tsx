"use client";

import { router } from "expo-router";
import { useEffect, useState } from "react";

import { View } from "react-native";
import { SplashScreen } from "../SplachScreen";
import { Step1 } from "./Step-1";
import { Step2 } from "./Step-2";
import { Step3 } from "./Step-3";

type Screen = "step1" | "step2" | "step3";

const screens: Screen[] = ["step1", "step2", "step3"];

export function StepsScreen() {
  const [splashVisible, setSplashVisible] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<Screen>("step1");

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
      {currentScreen === "step1" && (
        <Step1 onNext={() => setCurrentScreen("step2")} />
      )}

      {currentScreen === "step2" && (
        <Step2 onNext={() => setCurrentScreen("step3")} />
      )}

      {currentScreen === "step3" && (
        <Step3 onNext={() => router.replace("/homeScreen")} />
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
