import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const todos = useSelector((state) => state.todos.data);

  return (
    <>
      <View className="gap-4">
        <CustomHeader title="Todos" />
        <View className="px-4">
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<View className="h-4"></View>}
            ListEmptyComponent={
              <View className="h-[70vh] justify-center items-center">
                <Text className="text-lg font-[SpaceMono]">
                  No Todos to show,
                </Text>
                <Text className="text-lg font-[SpaceMono] text-center">
                  Please click on plus icon to add your todo
                </Text>
              </View>
            }
          />
        </View>
      </View>
      <MaterialCommunityIcons
        className="absolute bottom-[20] right-[20]"
        name="plus-circle"
        size={64}
        color="#3b82f6"
        onPress={() => router.push("/todos")}
      />
    </>
  );
};

export default Home;
