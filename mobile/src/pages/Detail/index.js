import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as mailComposer from 'expo-mail-composer'
import { View, Linking, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';

function Detail(){

  const route = useRoute();
  const incident = route.params.item
  const navigation = useNavigation();
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$${incident.value},00`;

  function sendMail(){
    mailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsapp(){
    Linking.openURL(`Whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return(
    <View style={ styles.container }>
      <View style={ styles.header } >
        <Image source={logo} />
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <Feather name='arrow-left' size={28} color='#E02041'/>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name}, {incident.city}-{incident.uf}</Text>


        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>


        <Text style={styles.incidentProperty}>DESCRIÇÂO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ {incident.value},00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Detail;