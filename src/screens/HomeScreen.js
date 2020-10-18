import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { CustomText as Text } from '../components/global';

class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <Layout style={pageStyle.rootContainer}>
                <Text>This is home screen</Text>
            </Layout>
        );
    }
}

const pageStyle = StyleSheet.create({
    rootContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { HomeScreen };