import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    bg: {
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#69d22e',
        flexDirection: 'row',
        height: 70,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    icon_head:{
        fontSize: 40,
        color: '#fff'},

    txt_head: {
        color: '#fff',
        fontSize: 20,
        fontWeight:'bold'
    },

    listitem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10 },

    avata: {
        height: 55,
        width: 55,
        borderRadius: 28,
        marginRight: 20
    },

    txt_item: {
        fontSize: 17,
        color: '#424242',
    },

    bor_bot: {
        borderBottomWidth: 0.7,
        borderBottomColor: '#eeeeee'
    },
});
export default styles