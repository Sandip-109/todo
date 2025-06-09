import Entypo from "@expo/vector-icons/Entypo";
import { Button, Modal, Text, TextInput, View } from "react-native";
import HView from "./HView";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/reducers/todoSlice";

const TodoItem = ({ item }) => {
  const [value, setValue] = useState(item?.title);
  const [desc, setDesc] = useState(item?.desc);

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(editTodo({ id, title: value, desc }));
    setVisible(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <>
      <HView className="p-2 justify-between border items-center border-blue-300 rounded-lg">
        <View className="w-full max-w-[65%]">
          <Text className="font-[SpaceMono]">{item?.title}</Text>
          <Text className="text-xs opacity-70 font-[SpaceMono]">
            {item?.desc}
          </Text>
        </View>
        <HView className="gap-2">
          <Button title="EDIT" onPress={() => setVisible(true)} />
          <Button
            title="DELETE"
            color="#ff3903"
            onPress={() => handleDelete(item?.id)}
          />
        </HView>

        <Modal
          visible={visible}
          onRequestClose={() => setVisible(!visible)}
          transparent
          animationType="slide"
        >
          <View className="p-7 gap-4  bg-white/70 absolute top-[30%] w-[90%] rounded-lg ml-[5%] ">
            <TextInput
              className="border border-blue-300 rounded-lg px-2 font-[SpaceMono]"
              value={value}
              onChangeText={setValue}
              placeholder="Enter your todo"
            />
            <TextInput
              className="border border-blue-300 rounded-lg px-2 min-h-[125] font-[SpaceMono]"
              value={desc}
              onChangeText={setDesc}
              placeholder="Enter your description"
              multiline
              style={{
                textAlignVertical: "top",
              }}
            />
            <Button onPress={() => handleEdit(item?.id)} title="Edit" />
            <Entypo
              name="cross"
              size={24}
              color="darkred"
              onPress={() => setVisible(false)}
              className="absolute right-1 top-1"
            />
          </View>
        </Modal>
      </HView>
    </>
  );
};

export default TodoItem;
