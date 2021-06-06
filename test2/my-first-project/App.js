import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput, ScrollView ,FlatList,TouchableOpacity,SafeAreaView,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Task from './components/Task'
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [tasks,setTasks]=useState([
    {"task":"HTML I","done":true,"id":"1"},
    {"task":"CSS","done":true,"id":"2"},
    {"task":"Responsive design","done":true,"id":"3"},
    {"task":"Git","done":true,"id":"4"},
    {"task":"JavaScript I","done":true,"id":"5"},
    {"task":"JavaScript II","done":false,"id":"6"}
    ])
  const [todos,setTodos]=useState([{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }])
  const pressHandler2=(id)=>{
    // const selectItem=(todos.filter(todo=>todo.id===id))
    // console.log(selectItem);
    let returnValue=[...todos]
    returnValue.forEach(todo=>{
      if(todo.id===id){
        todo.completed=true
      }
    })
    setTodos(returnValue)
  }
  // const [user,setUser]=useState("osama")
  // const [fruit,setFruit]=useState({name:"orange",price:5})
  // const pressHandler=()=>{
  //   setUser("sleman")
  //   setFruit({name:"apple",price:9})
  // }

  const addTask=(text)=>{
    if(!text){
      Alert.alert('No tasks? please add a task')
    }
    else{
      setTasks(prevTasks=>{
        return[{task:text,id:uuidv4()},...prevTasks]
      })
    }
    
  }

  const deleteTask=(id)=>{
    setTasks(prevTasks=>{
      return prevTasks.filter(task=>task.id != id)
    })
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

    
    <SafeAreaView style={styles.container}>
      <Header/>
      
      <View style={styles.content}>
        <AddTask addTask={addTask}/>
        <View style={styles.list}>
          <FlatList
          data={tasks}
          renderItem={({item})=>(
            <Task item={item} deleteTask={deleteTask}/>
          )}/>
        </View>
        

      </View>

      {/* <FlatList
        numColumns={3}
        keyExtractor={(item)=>item.id.toString()}
        data={todos}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandler2(item.id)}>
            <Text style={{...styles.todo,backgroundColor:item.completed?'green':'yellow'}}>
              {item.title}
          </Text>
          </TouchableOpacity>
          
        )}
      /> */}


      {/* <ScrollView>
      {
        todos.map(todo=>{
          return(
            <View key={todo.id} style={styles.todo}>
              
              </View>
          )
        })
      }
      </ScrollView> */}
      
      {/* <Text style={styles.mystyle}>{user} is eating {fruit.name},whitch cost {fruit.price}$</Text> */}

      {/* <TextInput 
      style={styles.textinput}
      placeholder="Enter the username"
      onChange={e=>setUser(e.target.value)}/>

      <TextInput 
      style={styles.textinput}
      multiline
      placeholder="Enter the fruit name"
      onChange={e=>setFruit({...fruit,name:e.target.value})}/>

      <TextInput 
      style={styles.textinput}
      placeholder="Enter the fruit price"
      keyboardType="numeric"
      onChange={e=>setFruit({...fruit,price:e.target.value})}/> */}

      {/* <View style={styles.buttonstyle}>
        <Button 
      onPress={pressHandler}
      title="Click me"
      
      />
      </View> */}
      <StatusBar style="auto" />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    padding:30,
    flex:1
  },
  list:{
    marginTop:30,
    flex:1
  },

});
