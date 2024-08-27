import { useLayoutEffect } from "react"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealList from "../components/MealsList/MealList"

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId

  //设置页面标题
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title
    navigation.setOptions({
      title: categoryTitle,
    })
  }, [categoryId, navigation])

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0
  })
  return <MealList items={displayedMeals} />
}

export default MealsOverviewScreen
