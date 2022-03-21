import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import CustomButton from '../utils/customButton';
import RNFS from 'react-native-fs'

export default function Camera(){

    const [{cameraRef}, {takePicture}] = useCamera(null);

    const captureHandle = async () => {
        try {
            const data = await takePicture()
            console.log(data.uri)
            const filePath = data.uri
            const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg'
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath,'-- to --', newFilePath)
                })
                .catch(error => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <CustomButton
                    title="Capture"
                    color='#262835'
                    androidRipple = '#46495b'
                    onPressFunction={() => captureHandle()}
                />
            </RNCamera>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    preview:{
        flex:1,
        alignContent: 'center',
        justifyContent: 'flex-end',
    },
})