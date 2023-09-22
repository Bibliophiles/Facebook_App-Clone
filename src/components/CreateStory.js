import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Profile from '../assets/images/img1.jpeg';
import { Colors } from '../utils/Colors';
import { Entypo } from '@expo/vector-icons';

const CreateStory = () => {
  return (
    <View style={styles.createStoryContainer}>
      <Image
        source={Profile}
        style={styles.profileImg}
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Entypo
          name="circle-with-plus"
          size={35}
          color="blue"
          />
       </TouchableOpacity>
     
      <Text style={styles.createStory}>
        Create story
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({ 
  profileImg: {
    height: 110,
    width: 110,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  createStoryContainer: {
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    borderRadius: 10,
    backgroundColor: Colors.storyImageBg,
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: '55%',
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  createStory: {
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 25,
    width: '50%',
  },
});

export default CreateStory;
