import React from 'react'
import { Button, StyleSheet, Text, View,TextInput, ScrollView ,FlatList,TouchableOpacity} from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>CKmobile tasks</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"red",
        height:80,
        paddingTop:30
    },
    title:{
        textAlign:"center",
        color:'white',
        fontSize:20
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mystyle:{
      color:'red',
      fontWeight:'bold',
    },
    buttonstyle:{
      backgroundColor:'red',
      fontWeight:'bold',
      color:'black'
    },
    textinput:{
      borderWidth:1,
      borderColor:'black',
      width:300,
      height:30,
      margin:10
    },
    todo:{
      margin:10,
      // backgroundColor:'wheat',
      // color:'red',
      fontSize:10,
      padding:10
    },
    content:{
      padding:30
    },
    list:{
      marginTop:30
    },
  
  });

export default Header
