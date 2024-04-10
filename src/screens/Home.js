import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import React from 'react';
import Header from './common/Header';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header
                leftIcon={require('../assets/images/apps.png')}
                rightIcon={require('../assets/images/shopping-cart-1.png')}
                title={"Grocery App"}
            />
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.bottomTab}>
                    <Image
                        source={require('../assets/images/house-chimney.png')}
                        style={styles.bottomTabIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    bottomTab: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTabIcon:{
        width:30,
        height:30
    }
})