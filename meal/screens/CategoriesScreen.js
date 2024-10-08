import { View, FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

function CategoriesScreen({ navigation }) {
  //注册的组件会获得一个新的参数 navigation
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      }) //跳转
    }
    item = itemData.item
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      //如果一个函数特别大可以写在外面
      renderItem={renderCategoryItem}
      horizontal={false} //设置两列渲染技巧
      numColumns={2}
    />
  )
}

export default CategoriesScreen
