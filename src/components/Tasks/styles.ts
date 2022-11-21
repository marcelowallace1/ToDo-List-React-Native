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
        borderWidth: 1,
        flex: 1,
        
        flexGrow: 1,
        
    },
    taskValue:{
        color: '#F2F2F2',
        fontSize: 14,
        flex: 1, 
        marginRight: 12,
        marginTop: 12,
        textAlign: "center",
        maxWidth: 250  
        
        
    },
    checkBox:{
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#4EA8DE',
        marginLeft: 12,
    },
     
    button: {

        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        
    },












})