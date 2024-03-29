import {
  Share,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ResultsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // console.log(route.params);

  const handleSharePress = async () => {
    try {
      const result = await Share.share({
        message: 'Check out your results',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };


  return (
    <SafeAreaView style={{ margin: 30 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textStyle}>Your Results</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 14,
          }}
        >
        <Pressable onPress={handleSharePress}>
          {/* <Text>Share</Text> */}
          <AntDesign
            style={{ marginLeft: 4 }}
            name="sharealt"
            size={34}
            color="black"
            />
        </Pressable>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={styles.textStyle}>Questions Answered</Text>
        <Text style={styles.textStyle}>(5/5)</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          height: 220,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "magenta",
            fontSize: 15,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Score Card
        </Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
                flexDirection: "row",
                marginLeft:"auto",
                marginRight:"auto"
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color="green" />
              ) : (
                <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="red" />
              )}
            </View>
          )}
        />

        <Pressable 
          style={{
            backgroundColor:"green",
            width:100,
            padding:8,
            marginLeft:"auto",
            marginRight:"auto",
            marginBottom:20,
            borderRadius:5
          }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{color:"white",textAlign:"center"}}>Continue</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default ResultsScreen;
