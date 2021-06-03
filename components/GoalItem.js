import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function GoalItem({ itemData, onDelete, id }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
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
