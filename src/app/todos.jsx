import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import { addTodo } from "../redux/reducers/todoSlice";

const Todos = () => {
  const [value, setValue] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!value || !desc) {
      Alert.alert(
        `Please enter ${
          !value && !desc
            ? "title and description"
            : !value
            ? "title"
            : "description"
        }`
      );
      return;
    }
    const newTodo = { title: value, desc };
    dispatch(addTodo(newTodo));
    setValue("");
    setDesc("");
    router.push("/home");
  };

  return (
    <View className="gap-4">
      <CustomHeader title="Add New Todo" canGoBack />
      <View className="px-4 gap-4">
        <TextInput
          className="border border-blue-300 rounded-lg px-2"
          value={value}
          onChangeText={setValue}
          placeholder="Enter your todo"
        />
        <TextInput
          className="border border-blue-300 rounded-lg px-2 min-h-[125]"
          value={desc}
          onChangeText={setDesc}
          placeholder="Enter your description"
          multiline
          style={{
            textAlignVertical: "top",
          }}
        />
        <Button onPress={handleSubmit} title="ADD" />
      </View>
    </View>
  );
};

export default Todos;
