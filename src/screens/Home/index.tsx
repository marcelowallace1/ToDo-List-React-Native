import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import Rocket from "../../assets/rocket.svg"
import { useFonts } from 'expo-font'
import ClipBoard from "../../assets/Clipboard.svg"
import { Tasks } from '../../components/Tasks'


export default function Home() {

    const [taskLista, setTaskLista]  = useState<string[]>([]);
    const [tasksItem, setTasksItem ] = useState('');
    const taskCreated = taskLista.length

    const [loaded] = useFonts({
        inter: require('../../assets/fonts/InterB.ttf')
    })
    if (!loaded) {
        return null;
    }





    
    function taskDelect(taskLista: string) {

        Alert.alert("Remover", `Deseja remover a Tarefa? ${taskLista}`, [
            {
                text: 'Sim',
                onPress: () => setTaskLista(prevState => prevState.filter(tasks => tasks !== taskLista))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    function taskAdd() {
        if(taskLista.includes(tasksItem)){
            return  Alert.alert("Tarefa já inserida", "Tarefa já inserida na lista")
          }

        
        setTaskLista(prevState => [...prevState, tasksItem]);
        setTasksItem('');
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
                        onChangeText={setTasksItem}
                        value={tasksItem}
                    />
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={taskAdd}
                    >
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
                    <Text style={styles.counterButton}
                    >
                        {taskCreated}
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
            {/* 

                    */}
            <FlatList
                data={taskLista}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Tasks
                        key={item}
                        taskText={item}
                        onRemove={() => taskDelect(item)}
                    />
                    
                )}
                ListEmptyComponent={() => (
                    <View style={styles.placeHolderToDo}>
                    <View style={styles.borderLine}></View>
                    <ClipBoard style={styles.clipBoard}/>
                    <Text style={styles.tasksEmpty}>
                    Você ainda não tem tarefas cadastradas
                    Crie tarefas e organize seus itens a fazer.
                    </Text>
                    </View>
                )}
            />



        </View>
    )


}