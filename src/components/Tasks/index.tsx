import { View, Text, TouchableOpacity,  } from 'react-native';
import { styles } from "./styles";
import Trash from "../../assets/trash.svg"
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
    taskText: string;
    onRemove: () => void; 
  }
export function Tasks({taskText, onRemove}: Props){    
    return(
        <View style={styles.container}>
            <BouncyCheckbox            
            onPress={(isChecked: boolean) => {}}
            text={taskText}
            textStyle={styles.taskValue}
            size={18}
            innerIconStyle={{ borderWidth: 2 }}
            fillColor={"#5E60CE"}
            iconStyle={styles.checkBox}
            />
        
        <TouchableOpacity style={styles.button} onPress={onRemove}>
        
            <Trash />   
        
      </TouchableOpacity>
    

        </View>
    )
}

