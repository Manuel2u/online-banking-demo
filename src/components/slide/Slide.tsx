import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';

const Slide = ({
  img,
  heading,
  text,
  OnNext,
  OnSkip,
}: {
  img: any;
  heading: string;
  text: string;
  OnNext: any;
  navigation: any;
  OnSkip: any;
}) => {
  // console.log(navigation);
  return (
    <Fragment>
      <View className="relative inset-0">
        <View className="bg-black h-screen w-screen relative inset-0 z-10 opacity-50" />
        <View className="absolute inset-0 z-0">
          <Image className="h-screen w-screen" source={img} />
        </View>
        <View className="absolute z-40 flex items-end pr-8 mt-14 w-screen">
          <TouchableOpacity
            className=""
            onPress={() => {
              OnSkip();
            }}>
            <Text className="font-semibold text-xl text-white">Skip</Text>
          </TouchableOpacity>
        </View>
        <View className="absolute flex justify-end pb-10 gap-y-7 items-center w-screen h-screen z-20">
          <View className="w-3/4">
            <Text className="text-white text-center text-4xl font-bold">
              {heading}
            </Text>
            <Text className="text-center text-gray-200">{text}</Text>
          </View>
          <View className="flex flex-row gap-x-2">
            <View className="w-2 h-2 bg-white rounded-full" />
            <View className="w-2 h-2 bg-white rounded-full" />
            <View className="w-2 h-2 bg-white rounded-full" />
          </View>
          <TouchableOpacity
            className="bg-blue-800 rounded-md w-80 h-14 flex items-center justify-center"
            onPress={() => {
              OnNext();
            }}>
            <Text className="text-2xl text-white font-medium">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

export default Slide;
