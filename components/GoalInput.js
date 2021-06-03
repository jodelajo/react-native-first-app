import React, { useState} from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'

function GoalInput({onAddGoal}) {
    const [enteredGoal, setEnteredGoal] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
      }
    
    return (
    <View style={styles.inputContainer}>
    <TextInput
      placeholder="Course goal"
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
    <Button title="add" onPress={()=> onAddGoal(enteredGoal)} />
  </View>
  )
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      textInput: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
      },
})

export default GoalInput