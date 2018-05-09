import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    Modal,
    ScrollView,
    Image,
} from 'react-native';

import {
    Icon,
    Button
} from 'react-native-elements';


import { getDateTimeString, getDateString, getTimeString } from '../../../util/timeservices';
import colorScheme from '../../../config/colors';


const PortCallDetails = (props) => {
    const { portCall } = props;
    console.log(portCall)
    const actualIcon = (<View style={[styles.actualContainer]}>
                            <Text style={styles.actualText}>A</Text>
                        </View>);

    const estimateIcon = (<View style={[styles.estimateContainer]}>
                            <Text style={styles.estimateText}>E</Text>
                          </View>);

    return(
        <Modal
            visible={props.isVisible}
            onRequestClose={props.onClose}
            animationType='fade'
            transparent={true}
        >
            {/* Fix the background stuff */}
            <View style={styles.outerContainer}>
                {/* The actual modal window */}
                <View style={styles.innerContainer}>
                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{portCall.vessel.name}</Text> 
                    </View>
                    {/* Main view */}
                    <ScrollView>
                        <View style={styles.tableHeaderContainer}>
                            <Text key={-1} style={[styles.statementHeaderText]}>Arrival Vessel Berth</Text>
                        </View>
                        <View>
                            <Image style={{width: 200, height: 200}} source={{ uri: portCall.vessel.photoURL}} />
                        </View>
                    </ScrollView>


                    {/* Bottom row, with buttons */}
                    <View style={styles.buttonsContainer}>
                        <TouchableWithoutFeedback
                            onPress={props.onClose}
                        >
                            <View style={[styles.button, {borderBottomRightRadius: 10, marginLeft: 5}]}>
                                <Text style={styles.headerText}>Ok</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default PortCallDetails;  

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#00000080',
    },
    innerContainer: {
        flexDirection: 'column',
        borderRadius: 10,
        width: 400,
        height: 300,
        backgroundColor: colorScheme.primaryContainerColor,
        justifyContent: 'space-between',
    },
    headerContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        height: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: colorScheme.primaryColor,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerText: {
        alignSelf: 'center',
        color: colorScheme.primaryTextColor,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        height: 40,
        backgroundColor: colorScheme.primaryColor,
    },
    statementHeaderText: {
        fontSize: 15,
        fontStyle: 'italic',
        flex: 1,
        marginHorizontal: 7,
        textAlign: 'left', 
        marginLeft: 10,
    },
    tableHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginHorizontal: 5,
        marginBottom: 10,
    },
    actualText: {
        color: colorScheme.primaryTextColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    actualContainer: {
        backgroundColor: colorScheme.actualColor,
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
    },
    estimateText: {
        color: colorScheme.primaryTextColor,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    estimateContainer: {
        backgroundColor: colorScheme.estimateColor,
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
    },  

});