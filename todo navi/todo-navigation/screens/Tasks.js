import React from 'react'
import { View, Text ,Button} from 'react-native'
import {global} from '../styles/global'
const Tasks = ({navigation,route}) => {
    const goToHome=()=>{
        // navigation.goBack()
        navigation.pop()
    }
    return (
        <View style={global.container}>
            <Text>{route.params.task}</Text>
            <Button title="Go to home" onPress={goToHome}/>
        </View>
    )
}

export default Tasks
