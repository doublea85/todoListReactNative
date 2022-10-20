import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go 
            I want to show somethings here that's why i will create a component*/}
          <Task text={"SIUUUUUUUUUU!!!!!🇲🇱"} />
          <Task text={"SIUUUUU!!!!!🇲🇱"} />
          <Task text={"SIUUUUUUUUUUUUUUUUUU!!!!!🇲🇱🇲🇱"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper : {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle : {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items : {
    marginTop: 30,
  },
        
});
