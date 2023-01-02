import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Header from "../../components/Header";
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto da dentista',
    value: '329,00',
    date: '12/03/2023',
    type: 0 //despesa
  },
  {
    id: 2,
    label: 'Pix do cliente',
    value: '600,00',
    date: '10/03/2023',
    type: 1 //entrada
  },
  {
    id: 3,
    label: 'Salario',
    value: '1.900,00',
    date: '05/03/2023',
    type: 1 //entrada
  }

]



export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Guilherme Benso' />

      <Balance saldo="15.000,00" gastos="-527,00" />
      
      <Actions/>

      <Text style={styles.title}>Ultimas Movimentações</Text>

      <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false} 
      renderItem={({item})=> <Moviments data={item} />}
      />

    

    </View>  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom:10,
  },
  list:{
    marginLeft: 8,
    marginRight: 8
  }
});