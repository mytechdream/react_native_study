import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import { Ionicons } from "@expo/vector-icons"
import { createDrawerNavigator } from "@react-navigation/drawer"
import FavoriteScreen from "./screens/FavoriteScreen"
import FavoritesContextProvider from "./store/context/favorites-context"
import { Provider } from "react-redux"
import { store } from "./store/redux/store"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" }, //主屏幕的背景色
        drawerContentStyle: { backgroundColor: "#351401" }, //抽屉色
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      {/* 设置redux */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            //screenOptions设置通用属性
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              //   设置标题颜色
              headerTintColor: "white",
              //设置界面下面一部分的背景颜色
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              //   嵌套导航栏
              component={DrawerNavigator}
              options={{
                title: "All Categories",
                headerShown: false, //取消tab栏
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const cartId = route.params.categoryId
              //   return {
              //     title: cartId,
              //   }
              // }}
            />
            {/* 注册组件 */}
            <Stack.Screen
              name="MealsDetail"
              component={MealDetailScreen}
              options={{
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  )
}
