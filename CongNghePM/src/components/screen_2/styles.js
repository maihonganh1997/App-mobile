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
        alignItems: 'center'},

    icon_head:{
        fontSize: 40,
        color: '#fff'
    },
    txt_head: {
        color: '#fff',
        fontSize: 20,
        fontWeight:'bold'
    },
    btn_add: {
        backgroundColor: '#6da9ff',
        width: 45,
        height: 35,
        borderRadius: 4,
        justifyContent:'center',
    },
    txt_add: {
        color: '#fff',
        fontWeight:'bold'
    },
    view_add: {
        flex: 2,
        justifyContent: 'center'
    },
});
export default styles