import { View } from "react-native";

const HView = ({ children, ...props }) => {
  return (
    <View style={{ flexDirection: "row" }} {...props}>
      {children}
    </View>
  );
};

export default HView;
