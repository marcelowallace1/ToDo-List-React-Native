import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";
import Rocket from "../../assets/rocket.svg"
import Background from "../../assets/Background.svg"
import { useFonts } from 'expo-font'
import ClipBoard from "../../assets/Clipboard.svg"



export default function Home() {

    const [loaded] = useFonts({
        inter: require('../../assets/fonts/InterB.ttf')
    })
    if (!loaded) {
        return null;
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/Backgroundd.png')}
                style={styles.blackbox}
            >
                <View style={styles.flexLogo}>

                    <Rocket style={styles.foguete} />
                    <Text style={styles.to}>
                        to
                        <Text style={{ color: "#5E60CE" }}>
                            do
                        </Text>
                    </Text>

                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={'#808080'}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>

            {/* hud das tasks criadas e concluidas */}
            <View style={styles.listOfTasks}>
                <View style={styles.counter}>
                    <Text style={styles.create}>
                        Criadas

                    </Text>
                    <Text style={styles.counterButton}>
                        0
                    </Text>
                </View >
                <View style={styles.counter}>
                    <Text style={styles.completed}>
                        Concluídas

                    </Text>
                    <Text style={styles.counterButton}>
                        0
                    </Text>
                
            </View>
            </View>

                <View style={styles.placeHolderToDo}>
                <View style={styles.borderLine}></View>
                <ClipBoard style={styles.clipBoard}/>
                <Text style={styles.tasksEmpty}>
                Você ainda não tem tarefas cadastradas
                Crie tarefas e organize seus itens a fazer.
                </Text>
                </View>
        </View>
    )


}