import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// function LogoTitle(){
//   return <Image source={require('./assets/favicon.png')}></Image>
// }

function HomeScreen({route, navigation} : any){

  return(
    <View style={styles.container}>
    <Text>Home</Text>
    <Text>Post: {route.params?.postText}</Text>
    <Button title="Go to Detail" onPress={() => navigation.navigate('Details', { 
      // itemId: 61, 
      otherParam:'test'
      
      })}></Button>

      <Button title="Create a Post" onPress={() => navigation.navigate('CreatePost')}></Button>
    <StatusBar style="auto" />
  </View>
  )
}

function Details({route, navigation} : any){

  const {itemId} = route.params
  const {otherParam } = route.params
  return(
    <View style={styles.container}>

    <Text>{itemId}</Text>
    <Text>{otherParam}</Text>

    <Text>Details</Text>
    <Button title="Go to Detail again" onPress={() => navigation.push('Details', {
      itemId: Math.floor(Math.random()*100)
    })}></Button>
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    <Button title="Go to Home" onPress={() => navigation.goBack()}></Button>
    <Button title="Go to Top" onPress={() => navigation.popToTop()}></Button>
    <StatusBar style="auto" />
  </View>
  )
}


function CreatePostScreen({navigation, route} : any){

  const [postText, setPost] = React.useState('')

  return(
    <>
      <TextInput multiline placeholder='What is on your mind?' onChangeText={setPost} ></TextInput>
      <Button title="Done" onPress={()=>{
          navigation.navigate('Home'),
          /** pass params back to home screen */
          {postText : postText}
      }} ></Button>
    </>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle:{
          backgroundColor:'#f4511e',
        }
      }
      }>
        <Stack.Screen name = "Home" component={HomeScreen} options={({navigation})=>({title :'Overview',
        // headerTitle:(props: any) =><LogoTitle {...props}></LogoTitle>,
        headerRight:()=>(
          <Button title="Post" onPress={()=>
            navigation.navigate('CreatePost')
            // alert('This is a bar button ityem')
          }></Button>
        )
    
      })}></Stack.Screen>
        <Stack.Screen name = "Details" component ={Details} initialParams={{itemId:1}}></Stack.Screen>
        <Stack.Screen name = "CreatePost" component ={CreatePostScreen}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
