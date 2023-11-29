import { StyleSheet, Text, SafeAreaView, View, Pressable, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import questions from "../../../data/questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const ContraMontreScreen = () => {
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(15);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index/totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];
  console.log(answerStatus)

  return (
    <SafeAreaView style={{ margin: 30 }}>
      {/* <View> */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
        >
        <Text>Quiz Challenge</Text>

        <Pressable
          style={{ padding: 10, backgroundColor: "#712ADE", borderRadius: 20 }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
            >
            {counter}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text>Your Progress</Text>
        <Text>
          ({index}/{totalQuestions}) questions answered
        </Text>
      </View>

      {/* Progress Bar */}
      <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: 20,
            borderRadius: 20,
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              backgroundColor: "#FFA726",
              borderRadius: 12,
              position: "absolute",
              left: 0,
              height: 10,
              right: 0,
              width: `${progressPercentage}%`,
              marginTop: 20,
            }}
            />
        </View>

      <View
        style={{
          marginTop: 20,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 12,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 20 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
            key={index}
            onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex
                ? {
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                      borderColor: "#FFA726",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "#712ADE",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "#712ADE",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === index &&
            index === currentQuestion.correctAnswerIndex ? (
              <AntDesign
              style={{
                borderColor: "#FFA726",
                textAlign: "center",
                borderWidth: 2,
                width: 40,
                height: 40,
                borderRadius: 20,
                padding: 10,
              }}
              name="check"
              size={20}
              color="white"
            />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                  <AntDesign
                  style={{
                    borderColor: "#712ADE",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                style={{
                  borderColor: "#712ADE",
                    textAlign: "center",
                    borderWidth: 2,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {item.options}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answerStatus === null
            ? null
            : {
              marginTop: 35,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
            }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
            >
            {answerStatus ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: points,

                answers: answers,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>

    
      {/* </View> */}
    </SafeAreaView>
  );
};

export default ContraMontreScreen;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#712ADE",
    alignItems: "flex-end",
    paddingVertical: 10,
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "white",
  },
  exitButton: {
    padding: 10,
  },
});