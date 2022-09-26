import React from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImg from './../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/gameCard';
import { Heading } from '../../components/heading';

import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading title='Encontre seu Duo!' subtitle='Selecione o game que deseja jogar...' />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<GameCard data={item} />)}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}