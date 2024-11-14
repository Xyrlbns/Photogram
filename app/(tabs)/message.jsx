import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, ImageBackground } from 'react-native';

const profiles = [
  { id: '1', name: 'Deborah', avatar: 'https://i.pinimg.com/564x/3a/ad/f4/3aadf4c91a80d2fbf84d2dc63ad6f3a9.jpg' },
  { id: '2', name: 'Rebecca', avatar: 'https://i.pinimg.com/736x/6d/a3/cf/6da3cf17a9cfde30b5a1265f01e43ee6.jpg' },
  { id: '3', name: 'Tyler', avatar: 'https://i.pinimg.com/564x/ab/b1/a2/abb1a28d04a5c5a73245684f1f4b4eaa.jpg' },
  { id: '4', name: 'Noah', avatar: 'https://i.pinimg.com/736x/28/11/5b/28115bba3d4d4545f4102caf883586cd.jpg' },
  { id: '5', name: 'Sarah', avatar: 'https://i.pinimg.com/736x/a7/ce/d0/a7ced0ffe453cafa12a65825c8b034d9.jpg' },
  { id: '6', name: 'Daniel', status: 'Active 2h ago', avatar: 'https://i.pinimg.com/736x/65/ad/aa/65adaaa6ac72c5e51dbc6b5aa109c015.jpg' },
  { id: '7', name: 'Grace', status: 'Shared a photo', avatar: 'https://i.pinimg.com/564x/fa/8c/29/fa8c292cc02864350eecfb04d8b366e9.jpg' },
  { id: '8', name: 'Alex', status: 'Last seen 30m ago', avatar: 'https://i.pinimg.com/736x/c9/a8/fa/c9a8faf95195d9948f4f68dcf2a4a39f.jpg' },
  { id: '9', name: 'Olivia', status: 'Typing...', avatar: 'https://i.pinimg.com/736x/f0/5f/a6/f05fa63ec5aa57e71d6c4e667af5f360.jpg' },
  { id: '10', name: 'Chris', status: 'Active 1d ago', avatar: 'https://i.pinimg.com/564x/48/6a/23/486a23e14b3ce080c2fbdd37412ccb25.jpg' },
  { id: '11', name: 'Sophia', status: 'Liked your post', avatar: 'https://i.pinimg.com/564x/3f/0a/ab/3f0aabde18f33322f1c89e9429d322e1.jpg' },
  { id: '12', name: 'Ethan', status: 'Active 30m ago', avatar: 'https://i.pinimg.com/736x/6c/40/08/6c4008aae3152eb240a25da869e803d6.jpg' },
];

const chats = [
  { id: '1', name: 'Deborah', status: 'Active', avatar: 'https://i.pinimg.com/564x/3a/ad/f4/3aadf4c91a80d2fbf84d2dc63ad6f3a9.jpg' },
  { id: '2', name: 'Rebecca', status: 'Mentioned you in a story', avatar: 'https://i.pinimg.com/736x/6d/a3/cf/6da3cf17a9cfde30b5a1265f01e43ee6.jpg' },
  { id: '3', name: 'Tyler', status: 'Active', avatar: 'https://i.pinimg.com/564x/ab/b1/a2/abb1a28d04a5c5a73245684f1f4b4eaa.jpg' },
  { id: '4', name: 'Noah', status: 'Sent a message', avatar: 'https://i.pinimg.com/736x/28/11/5b/28115bba3d4d4545f4102caf883586cd.jpg' },
  { id: '5', name: 'Sarah', status: 'Active 5h ago', avatar: 'https://i.pinimg.com/736x/a7/ce/d0/a7ced0ffe453cafa12a65825c8b034d9.jpg' },
  { id: '6', name: 'Daniel', status: 'Active 2h ago', avatar: 'https://i.pinimg.com/736x/65/ad/aa/65adaaa6ac72c5e51dbc6b5aa109c015.jpg' },
  { id: '7', name: 'Grace', status: 'Shared a photo', avatar: 'https://i.pinimg.com/564x/fa/8c/29/fa8c292cc02864350eecfb04d8b366e9.jpg' },
  { id: '8', name: 'Alex', status: 'Last seen 30m ago', avatar: 'https://i.pinimg.com/736x/c9/a8/fa/c9a8faf95195d9948f4f68dcf2a4a39f.jpg' },
  { id: '9', name: 'Olivia', status: 'Typing...', avatar: 'https://i.pinimg.com/736x/f0/5f/a6/f05fa63ec5aa57e71d6c4e667af5f360.jpg' },
  { id: '10', name: 'Chris', status: 'Active 1d ago', avatar: 'https://i.pinimg.com/564x/48/6a/23/486a23e14b3ce080c2fbdd37412ccb25.jpg' },
  { id: '11', name: 'Sophia', status: 'Liked your post', avatar: 'https://i.pinimg.com/564x/3f/0a/ab/3f0aabde18f33322f1c89e9429d322e1.jpg' },
  { id: '12', name: 'Ethan', status: 'Active 30m ago', avatar: 'https://i.pinimg.com/736x/6c/40/08/6c4008aae3152eb240a25da869e803d6.jpg' },
];

const ChatScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/5c/ce/b2/5cceb20ec1857dad5be7e6ef354dac3d.jpg' }}
      style={styles.background}
    >
      {/* Header */}
      <Text style={styles.header}>Chats</Text>

      {/* Horizontal Scroll View for Stories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        {profiles.map(profile => (
          <View key={profile.id} style={styles.story}>
            <Image source={{ uri: profile.avatar }} style={styles.storyAvatar} />
            <View style={styles.onlineDot} />
            <Text style={styles.storyName}>{profile.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Chat List */}
      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatContainer}>
            <View style={styles.chatRow}>
              <Image source={{ uri: item.avatar }} style={styles.chatAvatar} />
              <View style={styles.chatDetails}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatStatus}>{item.status}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    color: '#fff',
    textAlign: 'center',
  },
  storiesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 1,
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#C13584',
  },
  onlineDot: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    left: 45,
    top: 45,
    borderWidth: 1,
    borderColor: '#fff',
  },
  storyName: {
    marginTop: 6,
    marginBottom: 30,
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatDetails: {
    flexDirection: 'column',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  chatStatus: {
    fontSize: 14,
    color: '#000',
  },
});

export default ChatScreen;
