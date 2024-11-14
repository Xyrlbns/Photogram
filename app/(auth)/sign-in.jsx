import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import an icon library
import { router } from 'expo-router'; // Import router for navigation

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const backgroundImageUrl = 'https://i.pinimg.com/736x/5c/ce/b2/5cceb20ec1857dad5be7e6ef354dac3d.jpg';

    // Function to handle Sign Up navigation
    const handleSignUpPress = () => {
        router.push('/sign-up'); // Navigate to the Sign Up screen
    };

    // Function to handle Sign In navigation
    const handleSignInPress = () => {
        router.push('/home'); // Navigate to the Home screen
    };

    return (
        <ImageBackground
            source={{ uri: backgroundImageUrl }}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                    }}
                >
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
                        <Image
                            source={images.logo}
                            style={{ width: 250, height: 100, alignSelf: 'center', marginBottom: 20 }}
                            resizeMode='contain'
                        />
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#001F3F',
                            textAlign: 'center',
                            marginBottom: 20,
                        }}>
                            Welcome Back!
                        </Text>

                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#E0E0E0',
                                borderRadius: 8,
                                width: '100%',
                                padding: 12,
                                marginBottom: 16,
                                borderColor: '#000000',
                                borderWidth: 1,
                            }}
                            keyboardType="email-address"
                        />

                        <View style={{ position: 'relative', marginBottom: 16 }}>
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
                            onPress={handleSignInPress} // Navigate to home on Sign In
                        >
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: 'white'
                            }}>
                                Sign In
                            </Text>
                        </TouchableOpacity>

                        <Text style={{
                            color: '#001F3F',
                            marginTop: 16,
                            textAlign: 'center',
                        }}>
                            Don't have an account?{' '}
                            <TouchableOpacity onPress={handleSignUpPress}>
                                <Text style={{
                                    color: '#FF1493',
                                    fontWeight: 'bold',
                                    textDecorationLine: 'underline',
                                }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignIn;
