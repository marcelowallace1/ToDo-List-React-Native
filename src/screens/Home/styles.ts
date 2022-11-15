import { StyleSheet, TouchableWithoutFeedback, Dimensions  } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

export const styles = StyleSheet.create({


    container:{
        
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 24,
        
    },       
    foguete:{
        flex: 1,
        marginRight: 4,
        marginTop: 15 
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
        padding: 16,
        marginRight: 4
        
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
        
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 42  
    }
    



})