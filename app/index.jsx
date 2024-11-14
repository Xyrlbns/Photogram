import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  const logoSize = { width: 500, height: 200 }; // Increased logo size

  // URL of the background image
  const backgroundImageUrl = 'https://i.pinimg.com/736x/5c/ce/b2/5cceb20ec1857dad5be7e6ef354dac3d.jpg'; // Background image URL

  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }} // Using URL for background image
      style={{ flex: 1 }}
      resizeMode="cover" // Adjust this to your liking (e.g., "cover", "contain")
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 16 }}>
            <Image
              source={images.logo}
              style={{ width: logoSize.width, height: logoSize.height, marginTop: 40 }}
              resizeMode="contain"
            />
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                A user-friendly mobile application designed for
                sharing and discovering photos.
              </Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 100, textAlign: 'center' }}>
              Capture moments, create memories.
            </Text>

            <CustomButton
              title="Continue To Capture"
              handlePress={() => router.push('/sign-in')}
              containerStyles={{ width: '90%', marginTop: 20 }} // Set custom width here
            />


          </View>
        </ScrollView>
        <StatusBar backgroundColor="orange" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}
