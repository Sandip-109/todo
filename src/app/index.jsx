import { resetAndNavigate } from "@/utils/helper";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function Index() {
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loaded) {
        resetAndNavigate("/home");
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [loaded]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        className="w-[40vw] h-[40vw]"
        source={require("@/assets/images/icon.png")}
      />
    </View>
  );
}
