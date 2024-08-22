import { useState, useEffect, useCallback } from "react"
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import * as SplashScreen from 'expo-splash-screen'
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOverScreen"
import * as Fonts from "expo-font"
export default function App() {

    // const [isFontsLoaded] = useFonts({
    //     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    //     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

    // })

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameOver] = useState(false);
    const [appIsReady, setAppIsReady] = useState(false);
    const [gameRounds, setGameRounds] = useState(0);
    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Fonts.loadAsync({
                    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
                    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')

                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
    }
    function gameOverHandler() {
        setGameOver(true)
    }
    function startNewGameHandler() {
        setUserNumber(null);
        setGameRounds(0);
        setGameOver(false);
    }
    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} onGameRounds={setGameRounds} />
    }
    if (gameIsOver) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={gameRounds} onStartNewGame={startNewGameHandler} />
    }
    return (
        <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb528"]} onLayout={onLayoutRootView}>
            <ImageBackground //由View和Image标签构成
                style={styles.rootScreen}//给图片外的view添加样式
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                imageStyle={styles.imageBackground} //给图片添加样式
            >
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageBackground: {
        opacity: 0.15
    }

})
