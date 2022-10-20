import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  // Defining state
   const [task, setTask] = useState();
   const [taskItems, setTaskItems] = useState([]);

   const handleAddTask = () => {
    //Hide the keyboard after submit
     Keyboard.dismiss();
     // That will take everything previusely in my taskItems array an past the new task in it
     setTaskItems([...taskItems, task]);
     // Then it will clean the input field
     setTask(null);
   };

  // Complete take the index in the array of a task and we can pop it out
   const completeTask = (index) => {
    // We get the copy of the item
     let itemsCopy = [...taskItems];
     // Remove on item from the array and store the result back in items copy 
     itemsCopy.splice(index, 1);
     // Then ste the state the itemsCopy wich will not include the one deleted
     setTaskItems(itemsCopy);
   };

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Task</Text>

          <View style={styles.items}>
            {/* This is where the tasks will go 
              I want to show somethings here that's why i will create a component*/}

            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}

            {/* <Task text={"SIUUUUUUUUUU!!!!!"} />
            /> */}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* It avoid when you click on the input the keyboard commes up and what it gonna push everything up rather than just covering them Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        {/* Every time the text in the text input changes we will grabe whatever the text is and we will set the task to be that text 
        With value={task} we'll see the real time changes*/}
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
