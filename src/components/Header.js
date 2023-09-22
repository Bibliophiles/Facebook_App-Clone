import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import FacebookLogo from '../assets/images/fblogo.png';
import {Colors} from '../utils/Colors';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={FacebookLogo} style={styles.fbLogoStyle} />
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.searchBg}>
          <FontAwesome5
            name="search"
            size={19}
            color="grey"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchBg}>
          <Fontisto
            name="messenger"
            size={22}
            color="grey"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fbLogoStyle: {
    height: 25,
    width: 130,
  },
  searchBg: {
    backgroundColor: Colors.lightgrey,
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  container: {
    backgroundColor: Colors.white,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
});

export default Header;
