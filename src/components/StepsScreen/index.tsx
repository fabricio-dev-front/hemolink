"use client";

import { useEffect, useState } from "react";

import { router } from "expo-router";
import { View } from "react-native";

import { ButtonComponent } from "../Button";
import { SplashScreen } from "../SplachScreen";

import { Step1 } from "./Step-1";
import { Step2 } from "./Step-2";
import { Step3 } from "./Step-3";
import { Step4 } from "./Step-4";

type Screen = "step1" | "step2" | "step3" | "step4";

const screens: Screen[] = ["step1", "step2", "step3", "step4"];

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

  const handleNext = () => {
    const currentIndex = screens.indexOf(currentScreen);
    if (currentIndex === screens.length - 1) {
      router.replace("/homeScreen");
    } else if (currentIndex !== -1) {
      setCurrentScreen(screens[currentIndex + 1]);
    }
  };

  return (
    <View className="flex-1 bg-white justify-center items-center">
      {currentScreen === "step1" && <Step1 />}
      {currentScreen === "step2" && <Step2 />}
      {currentScreen === "step3" && <Step3 />}
      {currentScreen === "step4" && <Step4 />}

      <View className="flex flex-col items-center gap-3 w-full absolute bottom-[5%] left-0">
        <View className="flex flex-row justify-center items-center">
          {screens.map((screen) => (
            <View
              key={screen}
              className={`w-[10px] h-[10px] rounded-[5px] m-[5px] ${
                currentScreen === screen ? "bg-[#FF0000]" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </View>

        <ButtonComponent onPress={handleNext}>
          {screens.indexOf(currentScreen) === screens.length - 1
            ? "Começar doações"
            : "Próximo"}
        </ButtonComponent>
      </View>
    </View>
  );
}
