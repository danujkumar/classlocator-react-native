import React, { useRef, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';

const AutoScrollingList = ({ data }) => {
  const flatListRef = useRef();

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      flatListRef.current.scrollToEnd({ animated: true });
    }, 3000); // Adjust the interval duration as needed (3000 milliseconds = 3 seconds)

    return () => clearInterval(scrollInterval);
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 20 }}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default AutoScrollingList;