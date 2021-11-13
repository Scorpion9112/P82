import React from "react"
import {View, Text, Image, StyleSheet} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import {RFValue} from "react-native-responsive-fontsize"

export default class PostCard extends React.Component(){
 render(){
   return(
     <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.authorContainer}>
          <View style={styles.authorImageContainer}>
            <Image
              source={require("../assets_2/profile_img.png")}
              style={styles.profileImage}>
            </Image>
          </View>
        <View styles={styles.authorNameContainer}>
          <Text style={styles.authorNameText}>{this.props.post.author}</Text>
        </View>
      </View>
      <Image source={require("../assets_2/post.jpeg")} style={styles.postImage}/>
      <View style={styles.captionContainer}>
      <Text style={styles.captionText}>
        {this.props.post.caption}
      </Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.likeButton}>
        <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
        <Text style={styles.likeText}>12k</Text>
       </View>
       </View>
     </View>
 </View>
   )
 }
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  cardContainer:{
    margin:15,
    backgroundColor:"#f2f2e4",
    borderRadius:22.5
  },
  storyImage:{
    resizeMode:"contain",
    width:"95%",
    height:250,
    alignSelf:"center"
  },
  titleContainer:{
    paddingLeft:20,
    justifyContent:"center"
  },
  storyTitle:{
    fontSize:25,
    fontFamily:"bubbleGum-Sans"
  },
  storyAuthor:{
    fontSize:18,
    fontFamily:"bubbleGum-Sans"
  },
  storySummary:{
    fontSize:13,
    fontFamily:"bubbleGum-Sans"
  },
  actionContainer:{
    justifyContent:"center",
    alignItems:"center",
    padding:10
  }, 
  likeButton:{
    width:160,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"red",
    borderRadius:30
  },
  likeText:{
fontFamily:"bubbleGum-Sans",
fontSize:25
  }
})

