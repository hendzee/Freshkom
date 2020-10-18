import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { CustomText as Text } from './CustomText';

const CartNavigationIcon = (props) => (
    <>
        <Image
            style={navStyle.iconCart}
            source={
                props.isActive ? require('../../images/icon-cart-fill.png')
                    : require('../../images/icon-cart.png')
            }
        />
        <Text
            style={
                props.isActive ? navStyle.iconTextActive
                    : navStyle.iconText
            }
        >
            Cart
        </Text>
    </>
);

const DiscoverNavigationIcon = (props) => (
    <>
        <Image
            style={
                props.isActive ? navStyle.iconSearchActive
                    : navStyle.iconSearch
            }
            source={require('../../images/icon-search.png')}
        />
        <Text
            style={
                props.isActive ? navStyle.iconTextActive
                    : navStyle.iconText
            }
        >
            Discover
        </Text>
    </>
);

const HomeNavigationIcon = (props) => (
    <>
        <Layout style={navStyle.iconHomeContainer}>
            <Image
                style={navStyle.iconHome}
                source={
                    props.isActive ? require('../../images/icon-home-fill.png')
                        : require('../../images/icon-home.png')
                }
            />
        </Layout>
        <Text
            style={
                props.isActive ? navStyle.iconTextHomeActive
                    : navStyle.iconTextHome
            }
        >
            Home
        </Text>
    </>
);

const OrderNavigationIcon = (props) => (
    <>
        <Image
            style={navStyle.iconOrder}
            source={
                props.isActive ? require('../../images/icon-order-fill.png')
                    : require('../../images/icon-order.png')
            }
        />
        <Text
            style={
                props.isActive ? navStyle.iconTextActive
                    : navStyle.iconText
            }
        >
            Order
        </Text>
    </>
);

const AccountNavigationIcon = (props) => (
    <>
        <Image
            style={navStyle.iconAccount}
            source={
                props.isActive ? require('../../images/icon-account-fill.png')
                    : require('../../images/icon-account.png')
            }
        />
        <Text style={navStyle.iconText}>Account</Text>
    </>
);

const navStyle = StyleSheet.create({
    iconText: {
        fontSize: 12,
        color: '#9FA6AB'
    },
    iconTextActive: {
        fontSize: 12,
        color: '#39B54A'
    },
    iconCart: {
        width: 26,
        height: 23,
        resizeMode: 'cover'
    },
    iconSearch: {
        width: 20,
        height: 20,
        margin: 1,
        resizeMode: 'cover'
    },
    iconSearchActive: {
        width: 20,
        height: 20,
        margin: 1,
        resizeMode: 'cover',
        tintColor: '#39B54A'
    },
    iconHomeContainer: {
        position: 'absolute',
        bottom: 20.5,
        backgroundColor: 'transparent'
    },
    iconHome: {
        width: 45,
        height: 45,
        resizeMode: 'cover'
    },
    iconTextHome: {
        fontSize: 12,
        position: 'relative',
        top: 11,
        color: '#9FA6AB'
    },
    iconTextHomeActive: {
        fontSize: 12,
        position: 'relative',
        top: 11,
        color: '#39B54A'
    },
    iconOrder: {
        width: 22,
        height: 25,
        resizeMode: 'cover'
    },
    iconAccount: {
        width: 21,
        height: 25,
        resizeMode: 'cover'
    }
});

export {
    CartNavigationIcon,
    DiscoverNavigationIcon,
    HomeNavigationIcon,
    OrderNavigationIcon,
    AccountNavigationIcon
};