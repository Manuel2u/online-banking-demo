// import {Image} from 'react-native';
import React, {useState} from 'react';
import {data} from '../../components/slide';
import Slide from '../../components/slide/Slide';

const OnBoard = ({navigation}: any) => {
  const [id, setId] = useState(0);

  // useEffect(() => {
  //   const prefetchImages = async () => {
  //     const imageAssets = data.map(item => Image.prefetch(item.img.uri));
  //     await Promise.all(imageAssets);
  //   };

  //   prefetchImages();
  // }, []);

  const handleNext = () => {
    if (id < data.length - 1) {
      setId(prevId => prevId + 1);
    } else {
      navigation.navigate('SignIn');
    }
  };

  const handleSkip = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Slide
      img={data[id].img}
      heading={data[id].heading}
      text={data[id].text}
      OnNext={handleNext}
      navigation={navigation}
      OnSkip={handleSkip}
    />
  );
};

export default OnBoard;
