import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13121a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentsList: {
        marginTop: 32,
    },

    incident: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    divider: {
        paddingHorizontal: 24,
        paddingTop: 20
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 20,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E02041',
        flex: 1,
        padding: 20,
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8,
    },

    detailsButtonText: {
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 16
    }
})