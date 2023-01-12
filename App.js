import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import {collection, onSnapshot} from 'firebase/firestore'
import { db } from './src/config/firebase'
import CreateUser from './src/components/CreateUser'
import DeleteUser from './src/components/DeleteUser'

export default function App() {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const usersQuery = collection(db, 'users')
    onSnapshot(usersQuery, (snapshot) => {
      let usersList = []
      snapshot.docs.map((doc) => usersList.push({ ...doc.data(), id: doc.id}))
      setPeople(usersList)
      setLoading(false)
    })
  }, [])

  const renderItem = ({item}) => (
    <View style={{marginTop:10}}>
      <Text>
        {item.username}
      </Text>
      <DeleteUser id={item.id}/>
    </View>
  )


  return (
    <View style={styles.container}>
      <Text>This is Firebase Example !</Text>
      <CreateUser/>
      <FlatList 
        data={people} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50.
  },
})
