import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';

const Slide = () => {
  return (
    <Fragment>
      <View className="relative inset-0">
        <View className="bg-blue-500 h-screen w-screen relative inset-0 z-10 opacity-30" />
        <View className="absolute inset-0 z-0">
          <Image
            className="h-screen w-screen"
            source={require('../assets/slide1.jpg')}
          />
        </View>
        <View className="absolute z-20 flex items-end pr-8 mt-16 w-screen">
          <Text className="font-semibold text-xl text-white">Skip</Text>
        </View>
        <View className="absolute flex justify-center items-center w-screen h-screen z-20">
          <Text className="text-white text-4xl font-bold pt-96">
            Save your balance
          </Text>
          <Text className="text-center w-72 pb-10 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
            tellus risus odio quis.
          </Text>
          <View className="flex flex-row gap-x-2">
            <View className="w-2 h-2 bg-white rounded-full" />
            <View className="w-2 h-2 bg-white rounded-full" />
            <View className="w-2 h-2 bg-white rounded-full" />
          </View>
          <View className="bg-blue-800 rounded-md mt-20 w-72 h-14 flex items-center justify-center">
            <TouchableOpacity>
              <Text className="text-2xl text-white font-medium">Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default Slide;
