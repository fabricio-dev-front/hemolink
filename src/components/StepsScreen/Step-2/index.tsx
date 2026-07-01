import { Image } from "expo-image";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { IconBloodCollar } from "../../../assets/icons/IconBloodCollar";
import { IconCalendar } from "../../../assets/icons/IconCalendar";
import { IconHearth } from "../../../assets/icons/IconHearth";
import { IconShare } from "../../../assets/icons/IconShare";

const DOADORES_AVATAR = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
];

function DoadoresFotos() {
  return (
    <View style={styles.doadoresContainer}>
      {DOADORES_AVATAR.map((src, index) => (
        <Image
          key={index}
          source={{ uri: src }}
          style={[styles.avatar, index > 0 && styles.avatarOverlap]}
        />
      ))}
      <View style={[styles.avatar, styles.avatarOverlap, styles.avatarMore]}>
        <Text style={styles.avatarMoreText}>+7</Text>
      </View>
    </View>
  );
}

interface CampanhaButtonProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function CampanhaButton({ icon, title, subtitle }: CampanhaButtonProps) {
  return (
    <View style={styles.campanhaButton}>
      <View style={styles.campanhaButtonIcon}>{icon}</View>
      <View style={styles.campanhaButtonTextContainer}>
        <Text style={styles.campanhaButtonTitle}>{title}</Text>
        <Text style={styles.campanhaButtonSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export function Step2() {
  const current = 12;
  const target = 20;
  const percentage = Math.round((current / target) * 100);
  const [displayPercentage, setDisplayPercentage] = useState(0);

  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: percentage,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    const duration = 3000;
    const startTime = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= duration) {
        setDisplayPercentage(percentage);
      } else {
        const t = elapsedTime / duration;
        const easeOutQuad = t * (2 - t);
        setDisplayPercentage(Math.round(easeOutQuad * percentage));
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, [percentage]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          Crie e participe de{" "}
          <Text style={styles.headerTitleRed}>campanhas</Text>
          {"\n"}
          de doação!
        </Text>
      </View>

      <View style={styles.campaignBox}>
        <Text style={styles.sectionTitle}>Minha campanha</Text>

        <View style={styles.campaignCard}>
          <View style={styles.progressHeader}>
            <View style={styles.bloodIconContainer}>
              <IconBloodCollar width={24} height={23} color="#E31B23" />
            </View>
            <View style={styles.progressHeaderTextContainer}>
              <Text style={styles.targetText}>Meta: {target} doações</Text>
              <Text style={styles.currentText}>{current} doações</Text>
            </View>
          </View>

          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarBackground}>
              <Animated.View
                style={[
                  styles.progressBarFill,
                  {
                    width: progressAnim.interpolate({
                      inputRange: [0, 100],
                      outputRange: ["0%", "100%"],
                    }),
                  },
                ]}
              />
            </View>
            <Text style={styles.progressPercentText}>{displayPercentage}%</Text>
          </View>

          <DoadoresFotos />
        </View>

        <View style={styles.buttonList}>
          <CampanhaButton
            icon={<IconShare width={24} height={24} color="#E31B23" />}
            title="Compartilhe"
            subtitle="Alcance mais pessoas para ajudar"
          />
          <CampanhaButton
            icon={<IconCalendar width={26} height={26} color="#E31B23" />}
            title="Acompanhe o progresso"
            subtitle="Veja cada doação realizada"
          />
          <CampanhaButton
            icon={<IconHearth width={22} height={22} color="#E31B23" />}
            title="Transforme vidas"
            subtitle="Cada gota faz a diferença"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerContainer: {
    maxWidth: "80%",
    // marginTop: 45,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
  },
  headerTitleRed: {
    color: "#E31B23",
  },
  campaignBox: {
    borderWidth: 1,
    borderColor: "#0000001A",
    marginHorizontal: 28,
    borderRadius: 13,
    padding: 14,
    width: "90%",
    maxWidth: 340,
  },
  sectionTitle: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 16,
  },
  campaignCard: {
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#0000001A",
    marginTop: 14,
    padding: 15,
    flexDirection: "column",
    gap: 14,
  },
  progressHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  bloodIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#E31B2340",
    alignItems: "center",
    justifyContent: "center",
  },
  progressHeaderTextContainer: {
    flexDirection: "column",
  },
  targetText: {
    color: "#555555",
    fontSize: 12,
  },
  currentText: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 14,
    backgroundColor: "#E8E5E6",
    borderRadius: 13,
    overflow: "hidden",
  },
  progressBarFill: {
    height: 14,
    backgroundColor: "#E31B23",
    borderRadius: 13,
  },
  progressPercentText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "500",
    width: 45,
    textAlign: "right",
  },
  doadoresContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  avatarOverlap: {
    marginLeft: -10,
  },
  avatarMore: {
    backgroundColor: "#E8E5E6",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarMoreText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "400",
  },
  buttonList: {
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
  },
  campanhaButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
  },
  campanhaButtonIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  campanhaButtonTextContainer: {
    flexDirection: "column",
  },
  campanhaButtonTitle: {
    fontWeight: "500",
    fontSize: 14,
    color: "#000000",
  },
  campanhaButtonSubtitle: {
    color: "#555555",
    fontSize: 10,
    lineHeight: 14,
  },
});
