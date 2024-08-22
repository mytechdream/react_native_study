import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();
    let imageSize = 300;
    if (width < 380) {
        imageSize = 150;

    }
    if (height < 420) {
        imageSize = 80
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }
    console.log(width, height);

    return (
        <ScrollView>
            <View style={styles.rootContainer}>
                <Title>Game OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')} />
                </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highLight}>{userNumber}</Text>.</Text>
                <View></View>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}
// dimensionWidth = Dimensions.get('window').width
const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // width: dimensionWidth < 380 ? 150 : 300,//
        // height: dimensionWidth < 380 ? 150 : 300,//
        // borderRadius: dimensionWidth < 380 ? 75 : 150,//
        borderWidth: 3,
        borderColor: '#72063c',
        overflow: 'hidden',//
        margin: 36
    },
    image: {
        width: '100%',//
        height: '100%'//画出圆
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 24
    },
    highLight: {
        fontFamily: 'open-sans-bold',
        color: '#4e0329'

    },

})
export default GameOverScreen


