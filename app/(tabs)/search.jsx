import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  // Sample data for search results
  const results = [
    { id: '1', uri: 'https://i.pinimg.com/564x/20/89/48/2089485acd610bcf5c858ff313fbfbdb.jpg', title: 'Beautiful Sunset', photographer: 'John Doe' },
    { id: '2', uri: 'https://i.pinimg.com/564x/d6/0e/87/d60e8723379f841af18a5f69cb4e3668.jpg', title: 'Mountain View', photographer: 'Jane Smith' },
    { id: '3', uri: 'https://i.pinimg.com/564x/0d/42/9f/0d429f87188594ba4b7524f0c4c13aa6.jpg', title: 'Ocean Breeze', photographer: 'Emily Johnson' },
    { id: '4', uri: 'https://i.pinimg.com/564x/ef/01/a8/ef01a8e74c2dfe90811bc1f0fc6adf48.jpg', title: 'Starry Night', photographer: 'Tom Brown' },
    { id: '5', uri: 'https://i.pinimg.com/564x/fa/6d/fa/fa6dfae38bf73e2eeeef8c618a8c041a.jpg', title: 'Desert Oasis', photographer: 'Sara White' },
    { id: '6', uri: 'https://i.pinimg.com/564x/f8/4e/74/f84e74790aaba06be99a030b73b1a61a.jpg', title: 'Forest Path', photographer: 'Mike Green' },
    { id: '7', uri: 'https://i.pinimg.com/564x/0e/e2/57/0ee25761c9bd7c3df743cb8a7eb793ba.jpg', title: 'Winter Snow', photographer: 'M.A Walsh' },
    { id: '8', uri: 'https://i.pinimg.com/564x/5f/00/f9/5f00f977a0a99991379b33c55f81995c.jpg', title: 'Waterfall', photographer: 'Sakina' },
    { id: '9', uri: 'https://i.pinimg.com/564x/04/e0/e7/04e0e7d5c3677a10c04d7c809503c152.jpg', title: 'Sunflower Field', photographer: 'Sunshine Whispers' },
    { id: '10', uri: 'https://i.pinimg.com/564x/80/a9/b3/80a9b35b13cdfa53f78abcca184172d7.jpg', title: 'Seascape', photographer: 'Pioter Lunin' },
    // Add more items as needed
  ];

  const [visibleResults, setVisibleResults] = useState(3); // Start by showing 3 results

  const handleSeeMore = () => {
    setVisibleResults(prev => prev + 3); // Increase the number of visible results by 3
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/5c/ce/b2/5cceb20ec1857dad5be7e6ef354dac3d.jpg' }}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for photos..."
            placeholderTextColor="#888"
          />
        </View>
        {results.length > 0 ? (
          <>
            <FlatList
              data={results.slice(0, visibleResults)} // Show only the visible results
              keyExtractor={(item) => item.id}
              numColumns={2} // Set number of columns for the grid to 2
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.resultItem}>
                  <Image source={{ uri: item.uri }} style={styles.resultImage} />
                  <View style={styles.resultTextContainer}>
                    <Text style={styles.resultTitle}>{item.title}</Text>
                    <Text style={styles.photographer}>by {item.photographer}</Text>
                  </View>
                </TouchableOpacity>
              )}
              columnWrapperStyle={styles.row} // Style for row spacing
            />
            {visibleResults < results.length && ( // Only show the button if there are more results
              <TouchableOpacity style={styles.seeMoreButton} onPress={handleSeeMore}>
                <Text style={styles.seeMoreText}>See More</Text>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <Text style={styles.noResults}>No results found.</Text>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundImage: {
    opacity: 0.9,
  },
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  resultItem: {
    flex: 1,
    margin: 5, // Space between items
    alignItems: 'center',
  },
  resultImage: {
    width: '100%',
    height: 100, // Adjust height for your design
    borderRadius: 10,
  },
  resultTextContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  photographer: {
    fontSize: 12,
    color: '#666',
  },
  noResults: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
  row: {
    justifyContent: 'space-between', // Space out the columns
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

export default Search;
