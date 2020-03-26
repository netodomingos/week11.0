import React, { useState ,useEffect } from 'react';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/Api'

import LogoImg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents() {
  const [ incidents, setIncidents ] = useState([])
  const [ total, setTotal ] = useState(0)
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)

  const navigation = useNavigation()
  
  async function loadIncidents(){
    if(loading){
      return
    }

    if(total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)

    const response = await api.get('/incidents',{
      params: { page }
    })

    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])

    setPage(page + 1)
    setLoading(false)
  }
  
  useEffect(() => {
    loadIncidents()
  }, [])

  function navigateDetail(incident){
    navigation.navigate('Details', { incident })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoImg}/>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Esolha um dos casos e salve o dia.</Text>
    
      <FlatList 
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <View style={styles.divider}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperty}>Valor:</Text>
              <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#FFF' /> 
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
