import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import Trash from "../../assets/trash.svg"

type Props = {
    taskText: string;
    onRemove: () => void;
  }
  

export function Tasks({taskText, onRemove}: Props){
    
    return(
        <View style={styles.container}>

            <TouchableOpacity 
            style={styles.buttonOk}
            
            >
            </TouchableOpacity>

            <Text style={styles.taskText}>
            {taskText}
            </Text>

        <TouchableOpacity style={styles.button} onPress={onRemove}>
        
            <Trash style={styles.trash}/>   
        
      </TouchableOpacity>
    

        </View>
    )
}

