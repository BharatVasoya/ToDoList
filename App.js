import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import TaskInputField from "./src/components/TaskInputField";
import TaskItem from "./src/components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <FlatList
      style={{ marginBottom: 50, }}
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.taskContainer}>
            <TaskItem
              key={index}
              index={index + 1}
              task={item}
              deleteTask={() => deleteTask(index)}
            />
          </View>
        )}
      />
      <TaskInputField addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1A3C",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  taskContainer: {
    marginTop: 20,
  },
});
