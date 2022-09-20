import React from 'react';
import { View, Image } from 'react-native';
import { Heading } from '../../components/heading';

import logoImg from './../../assets/logo-nlw-esports.png'

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading title='Encontre seu Duo!' subtitle='Selecione o game que deseja jogar...' />
    </View>
  );
}