import React from 'react';
import { Text, View,Image } from 'react-native';
import styles from "./NewsCard.style";
const NewsCard=({haber})=>{
    return(
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:haber.imageUrl}}/>
        <View style={styles.inner_container}>
        <Text style={styles.title}>{haber.title}</Text>
        <Text style={styles.description}>{haber.description}</Text>
        <Text style={styles.author}>{haber.author}</Text>
        </View>
        
        </View>
    );
};
export default NewsCard;



