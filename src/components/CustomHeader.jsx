import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = ({ title, canGoBack }) => {
  return (
    <View className="flex-row h-[11vh] bg-blue-500 items-center justify-center">
      <SafeAreaView />
      {canGoBack && (
        <Ionicons
          name="chevron-back-circle-outline"
          className="absolute left-2"
          size={32}
          color="white"
          onPress={() => router.back()}
        />
      )}
      <View className="items-center justify-center ">
        <Text className="text-white text-3xl">{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
