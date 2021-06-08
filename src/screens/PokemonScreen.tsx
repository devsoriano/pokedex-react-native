import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonDetails} from '../components/PokemonDetails';
import {styles} from '../styles/PokemonScreen';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon} = usePokemon(id);
  console.log(pokemon);

  return (
    <View style={{flex: 1}}>
      {/*Back button*/}
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 10,
          }}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>

        {/*Nombre del Pokemon*/}
        <Text style={{...styles.pokemonName, top: top + 40}}>
          {name + '\n'} #{id}
        </Text>

        {/*Pokebola blanca*/}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />

        {/*Pokemon*/}
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>

      {/* Detalles y loading */}
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};
