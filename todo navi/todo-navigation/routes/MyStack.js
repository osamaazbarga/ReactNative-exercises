import React from 'react'

import Home from '../screens/Home'
import Abount from '../screens/About'
import Tasks from '../screens/Tasks'

import {createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator();
const screenOptionStyle={
    headerStyle:{
        backgroundColor:'red'
    },
    headerTintColor:'white',
    headerTitleStyle:{
        fontWeight:'bold'
    }
}
const AboutStack=()=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="About" 
                component={Abount}
                
                
                />
        </Stack.Navigator>
    )
}
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}
        >
            
            <Stack.Screen 
                name="Home" 
                component={Home}
                
                
                />
            <Stack.Screen name="Task" component={Tasks} options={({route})=>({title:route.params.task})}/>
        </Stack.Navigator>
    )
}

export {AboutStack,HomeStack}
