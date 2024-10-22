import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,ScrollView,StyleSheet,Image,Text, View,FlatList } from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from "./news_data.json";
import news_banner_data from "./news_banner_data.json";
import { Dimensions } from 'react-native';


function App(){
  const renderNews=({item}) =><NewsCard haber={item}/>;
    
  
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>NEWS</Text>
        
      <FlatList
      ListHeaderComponent={()=>(
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(banner_data=>
          (
          <Image 
            style={styles.banner_image} 
            source={{uri:banner_data.imageUrl}}/>
          ))}
        </ScrollView>
      )}
      keyExtractor={(item)=> item.u_id.toString()}
      data={news_data}
      renderItem={renderNews}
     />

    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1"
  },
  banner_image:{
    height:Dimensions.get('window').height /5,
    width:Dimensions.get('window').width / 2
  },
  header_text:{
    fontWeight:'bold',
    fontSize:50,
    marginTop:45,
    textAlign:'center'
  }
});

export default App;