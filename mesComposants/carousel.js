import { Dimensions, Text, View, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import React, { useState } from 'react';



var listeRecettes = ["Smoothie protéiné", "Gateau protéiné", "barres de céréales", "Curry"]
const images = [
  require('@/assets/smoothie.png'),
  require('@/assets/cake.png'),
  require('@/assets/curry.png'),
  require('@/assets/barresCer.png'),
]; 


function Index() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width/1.5 }
                autoPlay={true}
                data={listeRecettes}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 10 }}>
                          <Image source={ images[index] } />
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Index;
