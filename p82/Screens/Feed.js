import React from "react"
import {Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, Image, FlatList} from "react-native"
import {RFValue} from "react-native-responsive-fontsize"
import PostCard from "./PostCard"

let stories=require("../temp_stories.json")
renderItem=({item:story})=>{
  return <PostCard story={story}/>
}

keyExtractor=(item,index)=>index.toString()

export default class Feeds extends React.Component{
render(){
  return(
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.appTitle}>
      <View style={styles.appIcon}>
        <Image
          source={require("../assets_2/logo.png")}
          style={styles.iconImage}>
        </Image>
      </View>
      <View style={styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}>Spectagram</Text>
      </View>
      </View>
      <View style={styles.cardContainer}>
        <Flatlist
          keyExtractor={this.keyExtractor}
          data={posts}
          renderItem={this.rednerItem}
        />
      </View>
    </View>
  )
}

}

const styles=StyleSheet.create({
container:{
flex:1,
background:"black"
},
droidSafeArea:{
  marginTop: Platform.OS==="android"?StatusBar.currentHeight:RFValue(35)
},
appTitle:{
  flex:0.07,
  flexDirection:"row"
},
appIcon:{
  flex:0.2,
  justifyContent:"center",
  alignItems:"center"
},
iconImage:{
  width:"100%",
  height:"100%",
  resizeMode:"contain"
},
appTitleTextContainer:{
  flex:0.8,
  justifyContent:"center"
},
appTitleText:{
  color:"white",
  fontSize: RFValue(28),
},
cardContainer:{
  flex:0.85
}
})