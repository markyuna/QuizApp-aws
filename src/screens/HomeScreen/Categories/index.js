import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../components/CustomHeader';

const CategoriesScreen = () => {
  const navigation = useNavigation();

  // Categorías regulares en francés
  const regularCategories = [
    'Géographie',
    'Divertissement',
    'Histoire',
    'Art et Littérature',
    'Science et Nature',
    'Sports',
  ];

  // Categorías especiales desbloqueables
  const unlockableCategories = [
    { name: 'Musique', image: require('../../../../assets/images/music_icon.png'), pointsRequired: 50 },
    { name: 'Films', image: require('../../../../assets/images/film_icon.png'), pointsRequired: 75 },
    { name: 'Football', image: require('../../../../assets/images/football_icon.png'), pointsRequired: 100 },
  ];

  // Definir userPoints (reemplaza esto con la lógica real para obtener puntos del usuario)
  const userPoints = useState(80)[0];

  // Estado local para manejar el estado de bloqueo de cada categoría
  const [lockedCategories, setLockedCategories] = useState([true, true, true]);

  return (
    <View style={styles.container}>
      <CustomHeader userPoints={userPoints} />

      {/* Categorías regulares */}
      <View style={styles.categoriesContainer}>
        {regularCategories.map((category, index) => (
          <Pressable
            key={index}
            style={styles.categoryButton}
            onPress={() => navigation.navigate('Quiz', { category: category })}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </Pressable>
        ))}
      </View>

      {/* Categorías especiales desbloqueables */}
      <Text style={styles.footer}>Categorías especiales</Text>
      <View style={styles.footer}>
        <MaterialCommunityIcons name="star-circle-outline" size={24} color="gold" />
        <MaterialCommunityIcons name="star-circle-outline" size={24} color="gold" />
        <MaterialCommunityIcons name="star-circle-outline" size={24} color="gold" />
        <MaterialCommunityIcons name="star-circle-outline" size={24} color="gold" />
        <MaterialCommunityIcons name="star-circle-outline" size={24} color="gold" />
      </View>

      <View style={styles.specialCategoriesContainer}>
        {unlockableCategories.map((category, index) => (
          <Pressable
            key={index}
            style={[
              styles.unlockableCategoryButton,
              { borderColor: lockedCategories[index] ? '#712ADE' : 'transparent' },
            ]}
            onPress={() => {
              // Verificar si tienes suficientes puntos para desbloquear la categoría
              if (userPoints >= category.pointsRequired && lockedCategories[index]) {
                // Desbloquear la categoría y navegar al cuestionario
                setLockedCategories((prev) => {
                  const updatedLockedCategories = [...prev];
                  updatedLockedCategories[index] = false;
                  return updatedLockedCategories;
                });
                navigation.navigate('Quiz', { category: category.name });
              }
            }}
          >
            <Image source={category.image} style={styles.unlockableCategoryImage} />
            {lockedCategories[index] && (
              <MaterialCommunityIcons
                name="lock"
                size={24}
                color={userPoints >= category.pointsRequired ? '#F5B530' : '#712ADE'}
                style={styles.lockIcon}
              />
            )}
            <Text style={styles.unlockableCategoryText}>{category.name}</Text>
            {userPoints >= category.pointsRequired && (
              <Text style={styles.unlockableCategoryPoints}>{`(${category.pointsRequired} points)`}</Text>
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  footer: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#F5B530',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#712ADE',
    padding: 15,
    borderRadius: 10,
    marginBottom: 50,
    width: '48%',
  },
  categoryText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  specialCategoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unlockableCategoryButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    width: '30%',
    position: 'relative',
  },
  lockIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  unlockableCategoryImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    borderWidth: 5,
    marginBottom: 10,
    padding: 20,
  },
  unlockableCategoryText: {
    fontWeight: 'bold',
  },
  unlockableCategoryPoints: {
    color: '#F5B530',
  },
});

export default CategoriesScreen;
