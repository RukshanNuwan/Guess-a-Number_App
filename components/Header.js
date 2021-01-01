import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },

    headerTitle: {
        color: '#fff',
        fontSize: 18
    }
});

export default Header;