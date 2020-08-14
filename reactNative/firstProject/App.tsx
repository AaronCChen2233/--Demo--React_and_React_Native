import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

interface SelectImage{
  localUri:string
}

export default function App() {

  const[selectedImage, setSelectedImage] = useState<SelectImage|null>(null)

  let openImagePickerAsync = async () =>{
    const permissionResult = ImagePicker.requestCameraRollPermissionsAsync()
    if((await permissionResult).granted===false){
      alert('not allow')
      return
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    if(pickerResult.cancelled === true){
      return
    }

    setSelectedImage({localUri:pickerResult.uri})
  }

  const openShareDialogAsync = async ()=>{
    if(!(await Sharing.isAvailableAsync())){
      alert('sharing isn\'t available')
      return
    }

    await Sharing.shareAsync(selectedImage !== null ? selectedImage.localUri : '')

  }

  if (selectedImage !== null){
    return (
      <View style={styles.container}>
          <Image source={{uri:selectedImage.localUri}} style={styles.thumbnail}></Image>
          <TouchableOpacity onPress={
        openShareDialogAsync
      } style={styles.button}>
        <Text style={styles.butontext} >Share</Text>

      </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}  ></Image>
      <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>
      <TouchableOpacity onPress={
        openImagePickerAsync
      } style={styles.button}>
        <Text style={styles.butontext} >Pick a photo</Text>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width : 305, 
    height: 159,
    marginBottom:10,
  },

  thumbnail:{
    width:305,
    height: 159,
    resizeMode:'contain',
  },

  instructions:{
    color:'#888',
    fontSize : 18,
    marginHorizontal:15
  },

  button:{
    backgroundColor:'blue',
    padding:20,
    borderRadius:5
  },

  butontext:{
    fontSize:20,
    color:'#fff'
  }

});

