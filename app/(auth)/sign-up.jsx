import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome for icons
import { useRouter } from 'expo-router'; // Importing router for navigation
import { images } from '../../constants'; // Ensure you have the path to your images

const SignUp = () => {
    const router = useRouter(); // Initialize router
    const backgroundImageUrl = 'https://i.pinimg.com/736x/5c/ce/b2/5cceb20ec1857dad5be7e6ef354dac3d.jpg'; // Background image URL
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

    // Function to handle Sign Up navigation
    const handleSignUpPress = () => {
        router.push('/sign-in'); // Change to your desired path
    };

    // Function to navigate to the Login screen
    const handleLogInPress = () => {
        router.push('/sign-in'); // Change to your login path
    };

    return (
        <ImageBackground
            source={{ uri: backgroundImageUrl }}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <View style={{
                        width: '100%',
                        maxWidth: 400,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 12,
                        padding: 24,
                        marginVertical: 24,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 8,
                        elevation: 5,
                    }}>
                        {/* Logo Image */}
                        <Image
                            source={images.logo} // Make sure this points to your logo image
                            style={{ width: 150, height: 150, alignSelf: 'center', marginBottom: 20 }} // Adjust size as needed
                            resizeMode='contain'
                        />

                        <Text style={{
                            fontSize: 28,
                            fontWeight: 'bold',
                            color: '#001F3F',
                            marginBottom: 20,
                            textAlign: 'center',
                        }}>
                            Create Your Account
                        </Text>

                        {/* Name Input */}
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#E0E0E0',
                                borderRadius: 8,
                                width: '100%',
                                marginTop: 10,
                                padding: 12,
                                borderColor: '#000000',
                                borderWidth: 1,
                            }}
                        />
                        <TextInput
                            placeholder="Lastname"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#E0E0E0',
                                borderRadius: 8,
                                width: '100%',
                                marginTop: 10,
                                padding: 12,
                                borderColor: '#000000',
                                borderWidth: 1,
                            }}
                        />

                        {/* Email Input */}
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#E0E0E0',
                                borderRadius: 8,
                                width: '100%',
                                marginTop: 10,
                                padding: 12,
                                borderColor: '#000000',
                                borderWidth: 1,
                            }}
                            keyboardType="email-address"
                        />

                        {/* Password Input */}
                        <View style={{ position: 'relative', marginTop: 10 }}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#B0BEC5"
                                secureTextEntry={!passwordVisible}
                                style={{
                                    backgroundColor: '#E0E0E0',
                                    borderRadius: 8,
                                    width: '100%',
                                    padding: 12,
                                    borderColor: '#000000',
                                    borderWidth: 1,
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 12,
                                    top: 12,
                                    padding: 8,
                                }}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            >
                                <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#B0BEC5" />
                            </TouchableOpacity>
                        </View>

                        {/* Sign Up Button */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#FF1493',
                                borderRadius: 12,
                                width: '100%',
                                height: 48,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 20,
                                elevation: 3,
                            }}
                            activeOpacity={0.7}
                            onPress={handleSignUpPress}
                        >
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: 'white'
                            }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                        {/* Additional Links */}
                        <Text style={{
                            color: '#001F3F',
                            marginTop: 16,
                            textAlign: 'center'
                        }}>
                            Already have an account?{' '}
                            <TouchableOpacity onPress={handleLogInPress}>
                                <Text style={{
                                    color: '#FF1493',
                                    fontWeight: 'bold',
                                    textDecorationLine: 'underline'
                                }}>
                                    Log In
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignUp;
