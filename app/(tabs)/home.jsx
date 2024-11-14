import React from 'react';
import { View, Text, ScrollView, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Home = () => {
  // Example image data for the grid
  const imageData = [
    { id: '1', uri: 'https://i.pinimg.com/736x/05/81/82/05818273671da92bf9774e500ecaeb3c.jpg' },
    { id: '2', uri: 'https://i.pinimg.com/736x/fe/d4/2b/fed42b0fd3451aca5b46fb5dc658ea69.jpg' },
    { id: '3', uri: 'https://i.pinimg.com/564x/f9/a4/6e/f9a46e8df24ae591c772d7b76179f1a1.jpg' },
    { id: '4', uri: 'https://i.pinimg.com/736x/d1/12/63/d11263c382a973a1f0bed719ded37807.jpg' },
    { id: '5', uri: 'https://i.pinimg.com/736x/f7/c1/67/f7c167df3fbf4584b4d1e22199120ff7.jpg' },
    { id: '6', uri: 'https://i.pinimg.com/564x/46/6b/51/466b518cc14df50cea98935819b3d899.jpg' },
  ];

  const renderImage = ({ item }) => (
    <TouchableOpacity style={styles.imageWrapper}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/5c/ce/b2/5cceb20ec1857dad5be7e6ef354dac3d.jpg' }} // Replace with your background image URL
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Discover</Text>
        <View style={styles.watchNew}>
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/fd/80/c6/fd80c6547ef34cc113dc290d0714b37b.jpg' }} // Replace with your image link
            style={styles.mainImage}
          />
          <Text style={styles.authorText}>Alexa Balolot</Text>
        </View>

        <Text style={styles.browseAll}>Browse All</Text>
        <FlatList
          data={imageData}
          numColumns={2} // Grid layout
          renderItem={renderImage}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.row}
        />

        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreText}>See More</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  watchNew: {
    marginBottom: 24,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  authorText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  browseAll: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  imageWrapper: {
    flex: 1,
    margin: 4,
  },
  image: {
    width: (screenWidth / 2) - 24, // Two columns, adjust margin
    height: 150,
    borderRadius: 8,
  },
  seeMoreButton: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FF1493',
    borderRadius: 10,
    marginTop: 16,
  },
  seeMoreText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
