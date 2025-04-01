import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Yelp from '../api/Yelp'

export default function ResultsShowScreen({route}) {
    const [result, setResult] = useState(null)
    const id = route.params.id

    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
      };
      

    useEffect (()=>{
        getResult(id)
    },[])
    if(result === null) {
        return <Text>Loading...</Text>
    }

  return (
    <View>
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
            <Image
                style={{ width: 150, height: 150, margin: 10, borderRadius: 8, backgroundColor: 'lightgray' }}
                source={{ uri: item }}
            />
        )}
        horizontal
        />

    </View>
  )
}

const styles = StyleSheet.create({})