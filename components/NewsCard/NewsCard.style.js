import { Dimensions,StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor:"white",
    margin:10,
    marginTop:20,
    borderRadius:10
  },
  image: {
    height:Dimensions.get('window').height/4,borderTopRightRadius:10,borderTopLeftRadius:10},

  title: {
    fontWeight:'bold',
    fontSize:18
  },
  description: {
    marginTop:3
  },
  inner_container:{
   padding:5
  },
  author:{
    fontStyle:'italic',
    textAlign:'right'
  },
  
})

