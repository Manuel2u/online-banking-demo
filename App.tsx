import {Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-screen">
        <Text className="text-3xl">Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
