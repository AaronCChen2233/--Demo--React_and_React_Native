import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Button, StyleSheet, Text, View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require('./assets/favicon.png')}
    />
  )
}

function HomeScreen({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Post: {route.params?.postText} </Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Custom profile header' })
        }
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            // itemId: 86,
            otherParam: 'anything you want',
          })
        }
      />
      <Button
        title="Create a Post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Update Title!"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  )
}

function DetailsScreen({ route, navigation }: any) {
  const { itemId } = route.params
  const { otherParam } = route.params

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go Back to First Screen in Stack"
        onPress={() => navigation.popToTop()}
      />
      <StatusBar style="auto" />
    </View>
  )
}

function CreatePostScreen({ navigation, route }: any) {
  const [postText, setPostText] = React.useState('')
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        value={postText}
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        // pass params back to home screen
        onPress={() => navigation.navigate('Home', { postText })}
      />
    </>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: (props: any) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                title="Post"
                color="#fff"
                onPress={() => navigation.navigate('CreatePost')}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 1 }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }: any) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
