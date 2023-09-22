// import React from 'react'
// import { Text } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { s } from 'react-native-wind'

// const MainScreen = () => {
//   return (
//     <SafeAreaView style={ s `justify-center items-center`}>
//       <Text> This is the main screen </Text>
//     </SafeAreaView>
//   )
// }

// export default MainScreen

import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopTabbar from '../navigation/TopTabbar'

const MainScreen = ( {navigation} ) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <TopTabbar />
    </SafeAreaView>
  )
}

export default MainScreen