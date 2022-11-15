import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        width: 340,
        height: 64,
        backgroundColor: '#262626',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 24,
        justifyContent: 'space-between',
        marginTop: 15,
        borderColor: '#5E60CE',
        borderWidth: 1
        
    },
    taskText:{
        color: '#F2F2F2',
        fontSize: 14,
        flex: 1,
        marginLeft: 23,
        marginRight: 15,

        
    },
    buttonOk:{
        
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 2,
        borderRadius: 13,
        borderColor: '#4EA8DE',
        width: 17.45,
        height: 17.45,
        marginLeft: 12

    },
    trash: {
     
    },
    button: {

        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    }













})