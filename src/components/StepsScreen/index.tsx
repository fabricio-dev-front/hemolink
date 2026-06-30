"use client";

import { useEffect, useState } from "react";

import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

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
    <View style={styles.container}>
      {currentScreen === "step1" && <Step1 />}
      {currentScreen === "step2" && <Step2 />}
      {currentScreen === "step3" && <Step3 />}
      {currentScreen === "step4" && <Step4 />}

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {screens.map((screen) => (
            <View
              key={screen}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    currentScreen === screen ? "#E31B23" : "#D9D9D9",
                },
              ]}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  footer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    width: "100%",
    position: "absolute",
    bottom: "5%",
    left: 0,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});
