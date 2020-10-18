import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { CustomText as Text } from '../components/global';
import { PRIMARY_COLOR } from '../styles/globalStyle';

class SplashScreen extends Component {
    state = {}
    render() {
        return (
            <Layout style={pageStyle.rootContainer}>
                <Layout style={pageStyle.quoteContainer}>
                    <Image
                        style={pageStyle.logo}
                        source={require('../images/logo.png')}
                    />
                    <Text
                        style={pageStyle.text}
                    >
                        The place where you can get
                    </Text>
                    <Text
                        status='primary'
                        style={pageStyle.textBold}
                    >
                        fresh products
                    </Text>
                </Layout>

                <Layout style={pageStyle.splashImageContainer}>
                    <Image
                        style={pageStyle.splashImage}
                        source={require('../images/splash.png')}
                    />
                </Layout>
            </Layout>
        );
    }
}

const pageStyle = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    quoteContainer: {
        position: 'absolute',
        zIndex: 1,
        top: 200,
        left: 20,
        maxWidth: 230,
    },
    logo: {
        tintColor: PRIMARY_COLOR,
        width: 238.5,
        height: 60,
        marginBottom: 30
    },
    text: {
        fontSize: 29,
        marginBottom: 5
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 29
    },
    splashImageContainer: {
        position: 'absolute',
        zIndex: 0,
        bottom: 0,
        right: 0
    },
    splashImage: {
        width: 316,
        height: 394,
    }
});

export { SplashScreen };