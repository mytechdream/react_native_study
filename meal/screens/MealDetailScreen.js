import { useContext } from "react"
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native"

import { MEALS } from "../data/dummy-data"
import MealDetail from "../components/MealDetail"
import Subtitle from "../components/MealDetail/Subtitle"
import List from "../components/MealDetail/List"
import { useLayoutEffect } from "react"
import IconButton from "../components/iconButton"
import { FavoritesContext } from "../store/context/favorites-context"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../store/redux/favorites"

function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const favoriteMealCtx = useContext(FavoritesContext)

  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  //   const mealIsFavorite = favoriteMealCtx.ids.includes(mealId) //包含为true，不包含为false
  const mealIsFavorite = favoriteMealIds.includes(mealId)

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      //   favoriteMealCtx.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }))
    } else {
      //   favoriteMealCtx.addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={mealIsFavorite ? "yellow" : "white"}
            onPress={changeFavoriteStatusHandler}
          />
        )
      },
    })
  }, [navigation, changeFavoriteStatusHandler])
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          titleStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },

  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
})
