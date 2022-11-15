import { StyleSheet, TouchableWithoutFeedback, Dimensions  } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

export const styles = StyleSheet.create({


    container:{
        
        flex: 1,
        backgroundColor: '#1A1A1A',
        
        
    },       
    foguete:{
        flex: 1,
        marginRight: 4,
        marginTop: 15 
    },
    blackbox:{
        width: '100%',
        height: 190
    },
    to:{
        
        color: '#4EA8DE',
        fontSize: 40,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
 
    },
    flexLogo:{
        width: '100%',           
        flexDirection: 'row',
        marginTop: 70,
        marginLeft: 132.66,
    },
    input:{
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: 'white',
        padding: 12,
        marginRight: 6,
        marginLeft: 24,
        borderWidth: 1,
        borderColor: '0D0D0D'
        
    },
    buttonText:{
        color: 'white',
        fontSize: 24
    },
    button:{
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 24,
        borderColor: '#0D0D0D'
        
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 42  
    },
    listOfTasks:{
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 24,
        marginRight: 24
    },
    create:{
        color: '#4EA8DE',
        fontFamily: 'inter',
        marginTop: 32
    },
    completed:{
        color: '#8284FA',
        fontFamily: 'inter',
        marginTop: 32
        
    },
    counter:{
        flexDirection: 'row',
    },
    counterButton:{
        marginTop: 32,
        width: 25,
        height: 19,
        borderRadius: 999,
        backgroundColor: '#333333',
        color: 'white',
        marginLeft: 8,
        paddingLeft: 8,
        fontFamily: 'inter'
    },
    placeHolderToDo:{

    },
    borderLine:{
        marginLeft: 24,
        marginRight: 24,
        marginTop: 24,
        borderBottomColor: '#333333',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    clipBoard:{
        marginTop: 48,
        marginRight: 159.9,
        marginLeft: 159.9
    },
    tasksEmpty:{
        fontFamily: 'inter',
        textAlign: 'center',
        marginTop: 16,
        marginLeft: 44,
        marginRight: 44,
        color: '#808080'
    }


})