import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    render() {
        return(
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Cryptocurrentcy App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 55,
        alignItems: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
});