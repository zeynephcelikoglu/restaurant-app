import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import React from 'react'

export default function ResultDetail({results}) {
  return (
    <View style={styles.container}>
        {results.image_url ? (
        <Image
            style={styles.image}
            source={{ uri: results.image_url }}/>
        ) : null}
      <Text style={styles.name}>{results.name}</Text>
      <Text>{results.rating} Yıldızlı Restoran, {results.review_count} Değerlendirme </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:10,
    },
    image:{
        width: 250,
        height:120,
        borderRadius:8,
        marginBottom: 5,
    },
    name: {
        fontWeight:"bold",
    }
})