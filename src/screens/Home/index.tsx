import { View, Text, TextInput, TouchableOpacity,  } from "react-native";
import { styles } from "./styles";
import Rocket from "../../assets/rocket.svg"




export default function Home() {

    return (
    
        
        <View style={styles.container}>


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

        </View>
        
    )


}