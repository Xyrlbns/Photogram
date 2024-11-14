import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    alert('Logged out!');
    navigation.navigate('index'); // Navigate to SignIn screen
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/5c/ce/b2/5cceb20ec1857dad5be7e6ef354dac3d.jpg' }} // Background image URL
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/12/fb/46/12fb46e27d649b3eab28bfa2777595f4.jpg' }} // Profile picture URL
            style={styles.profilePicture}
          />
          <Text style={styles.name}>Rosiee</Text>
          <Text style={styles.bio}>Photography</Text>

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>120</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>300</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Photos</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.followButton} onPress={() => alert('Followed!')}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageButton} onPress={() => alert('Type a message!')}>
              <Text style={styles.buttonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.photosContainer}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <View style={styles.photosGrid}>
            {[
              'https://i.pinimg.com/564x/d0/2f/23/d02f23d26229b45cd82feb7aee247cd6.jpg',
              'https://i.pinimg.com/564x/49/ba/b4/49bab4bf047d107d783b0acacc33da80.jpg',
              'https://i.pinimg.com/564x/3d/cb/52/3dcb52bb824f52be29b9fa3d20fec92c.jpg',
              'https://i.pinimg.com/736x/59/da/17/59da17e09060d6619cdda9aee75dad45.jpg',
              'https://i.pinimg.com/564x/31/3e/93/313e936f8a3feba714c6ab7f39e3fca7.jpg',
              'https://i.pinimg.com/564x/f1/94/fa/f194fae14b201d2a371421f0e92739cb.jpg',
              'https://i.pinimg.com/564x/68/ab/de/68abdedde356ee9415e2b59736e677bb.jpg',
              'https://i.pinimg.com/564x/1c/d2/28/1cd228f2d284a7c61302836581925927.jpg',
              'https://i.pinimg.com/736x/55/6e/54/556e5452ef968a9e8fc0a485bd8cdd53.jpg',
              'https://i.pinimg.com/736x/d8/00/1b/d8001bc0ceb0c889b5d2a0713945e80f.jpg',
            ].map((uri, index) => (
              <Image key={index} source={{ uri }} style={styles.photo} />
            ))}
          </View>
        </View>

        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <View style={styles.logoutTextContainer}>
              <Text style={styles.logoutButtonText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  photosContainer: {
    marginBottom: 16,
  },
  photosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photo: {
    width: '48%', // Adjust width for two columns
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  followButton: {
    backgroundColor: '#FF1493',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  messageButton: {
    backgroundColor: '#FF1493',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#FF1493',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 125,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logoutTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
