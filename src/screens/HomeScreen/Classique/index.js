// Importa las dependencias necesarias y los datos
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import { generalKnowledgeQuestions } from '../../../data/questions';

// Componente ClassiqueScreen
const ClassiqueScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const totalQuestions = generalKnowledgeQuestions.length;

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setPoints((prevPoints) => prevPoints + 5);
    }

    if (index + 1 < totalQuestions) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // Navegar a la pantalla de resultados con los puntos
      navigation.navigate('Results', {
        answers: [], // Puedes pasar las respuestas si las necesitas en ResultsScreen
        points: points,
      });
    }
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={styles.optionButton}
      onPress={() => handleAnswer(item.isCorrect)}
    >
      <Text style={styles.optionText}>{item.answer}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          {generalKnowledgeQuestions[index].question}
        </Text>
      </View>
      <FlatList
        data={generalKnowledgeQuestions[index].options}
        renderItem={renderOption}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ClassiqueScreen;
