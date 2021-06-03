import React from "react";
import { View, Text, StyleSheet } from "react-native";


function GoalItem({itemData}) {
  return (
    <View style={styles.listItem}>
      <Text>{itemData.item.value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc",
  },
});

export default GoalItem;