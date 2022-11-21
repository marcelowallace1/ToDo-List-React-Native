import { View, Text, TouchableOpacity,  } from 'react-native';
import { styles } from "./styles";
import Trash from "../../assets/trash.svg"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from 'react';

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
            textStyle={{
                color: '#F2F2F2',
                fontSize: 14,
                flex: 1,
                marginTop: 12,
                marginRight: 12,
                textAlign: "center",
                maxWidth: 250,
            }}
            size={18}
            innerIconStyle={{ borderWidth: 8 }}
            fillColor={"#5E60CE"}
            iconStyle={styles.checkBox}

            />

            
        
        <TouchableOpacity style={styles.button} onPress={onRemove}>
        
            <Trash />   
        
      </TouchableOpacity>
    

        </View>
    )
    
}

