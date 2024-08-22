import { useEffect, useState } from "react"
import {
    View,
    StyleSheet,
    Alert,
    Text,
    FlatList,
    useWindowDimensions,
} from "react-native"
import Title from "../components/ui/Title"
import NumerContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import { Ionicons } from "@expo/vector-icons"
import GuessLogItem from "../components/game/GuessLogItem"
let minBoundary = 1
let maxBoundary = 100

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

function GameScreen({ userNumber, onGameOver, onGameRounds }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRound, setGuessRound] = useState([initialGuess])
    const { width, height } = useWindowDimensions()
    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameRounds(guessRound.length)

            onGameOver()
        }
    }, [currentGuess])

    function nextGuessHandler(direction) {
        //direction greater:变大一点 lower
        // console.log(userNumber, typeof userNumber);

        if (
            (userNumber > currentGuess && direction === "lower") ||
            (userNumber < currentGuess && direction === "greater")
        ) {
            Alert.alert("Don't lie!", "You konw that is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ])
            return
        }
        if (direction === "lower") {
            maxBoundary = currentGuess - 1
        } else {
            minBoundary = currentGuess + 1
        }
        // console.log(minBoundary, maxBoundary);

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        )
        setCurrentGuess(newRndNumber)
        setGuessRound([newRndNumber, ...guessRound])
    }



    let content = (
        <>
            <NumerContainer>{currentGuess}</NumerContainer>
            <Card>
                {/* <View> */}
                <InstructionText style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContianer}>
                    <View style={styles.buttonContianer}>
                        <PrimaryButton
                            onPress={() => {
                                nextGuessHandler("greater")
                            }}
                        >
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContianer}>
                        <PrimaryButton
                            onPress={() => {
                                nextGuessHandler("lower")
                            }}
                        >
                            <Ionicons name="remove-outline" size={24} color={"white"} />
                        </PrimaryButton>
                    </View>
                </View>
                {/* </View> */}
            </Card>
        </>
    )

    if (width > 500) {
        content = (
            <>

                <InstructionText style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonContianerWide}>

                    <View style={styles.buttonContianer}>
                        <PrimaryButton
                            onPress={() => {
                                nextGuessHandler("greater")
                            }}
                        >
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <NumerContainer>{currentGuess}</NumerContainer>
                    <View style={styles.buttonContianer}>
                        <PrimaryButton
                            onPress={() => {
                                nextGuessHandler("lower")
                            }}
                        >
                            <Ionicons name="remove-outline" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRound}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRound.length - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => {
                        item
                    }}
                />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center",
    },
    buttonsContianer: {
        flexDirection: "row",
    },
    buttonContianer: {
        flex: 1,
        // width: '50%'
    },
    buttonContianerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    instructionText: {
        marginBottom: 20,
    },

    listContainer: {
        flex: 1,
        padding: 16,
    },
})
