import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [searchApi, results] = useResults()
  console.log(results);
  
  const filterResultsByPrice = (price)=> {
    return results.filter((results)=>{
      return results.price === price
    })
  }

  return (
    <View>
      <SearchBar/>
      <ResultsList title="Ucuz Restoranlar" results={filterResultsByPrice("₺")}/>
      <ResultsList title="Uygun Restoranlar" results={filterResultsByPrice("₺₺")}/>
      <ResultsList title="Pahalı Restoranlar" results={filterResultsByPrice("₺₺₺")}/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})