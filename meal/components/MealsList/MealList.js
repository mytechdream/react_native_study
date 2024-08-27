import { StyleSheet, FlatList, View } from "react-native"
import React from "react"
import MealItem from "./MealItem"
function MealList({ items }) {
  function renderMealIem(itemData) {
    const item = itemData.item
    mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return <MealItem {...mealItemProps} /> //注意这个语法
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealIem}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
