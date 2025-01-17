import React, { useEffect, useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Sodium from 'react-native-sodium-boa'

import { styles } from './styles'
import RandomDataTests from './SodiumTests/RandomDataTests'
import SecretKeyCryptographyTests from './SodiumTests/SecretKeyCryptographyTests'
import PublicKeyCryptographyTests from './SodiumTests/PublicKeyCryptographyTests'
import PasswordHashingTests from './SodiumTests/PasswordHashingTests'
import AdvancedTests from './SodiumTests/AdvancedTests'
import CryptoCoreTests from './SodiumTests/CryptoCoreTests'
import CryptoScalarmultTests from './SodiumTests/CryptoScalarmultTests'
import CryptoGenerichashTests from './SodiumTests/CryptoGenerichashTests'
import CryptoXchacha20poly1305Tests from './SodiumTests/CryptoXchacha20poly1305Tests'

export default function YourApp() {

    const [sodiumVersion, setSodiumVersion] = useState("")
    const [selectedTest, setSelectedTest] = useState(0)

    useEffect(() => {
        Sodium.sodium_version_string()
            .then((version) => setSodiumVersion(version))
            .catch((error) => this._handleError(error))
    },[])

    return (
        <SafeAreaView style={{flex:1}}>
            <View>
                <Text style={[styles.header,{marginTop: 60}]}>Salted React Native!</Text>
                <Text style={styles.header}>{sodiumVersion}</Text>
            </View>
            {selectedTest == 0 &&
            <View>
                <Button onPress={() => setSelectedTest(1)} title="Random data generation"/>
                <Button onPress={() => setSelectedTest(2)} title="Secret-key cryptography"/>
                <Button onPress={() => setSelectedTest(3)} title="Public-key cryptography"/>
                <Button onPress={() => setSelectedTest(4)} title="Password Hashing"/>
                <Button onPress={() => setSelectedTest(5)} title="Advanced"/>
                <Button onPress={() => setSelectedTest(6)} title="Crypto core"/>
                <Button onPress={() => setSelectedTest(7)} title="Crypto scalarmult"/>
                <Button onPress={() => setSelectedTest(8)} title="Crypto generichash"/>
                <Button onPress={() => setSelectedTest(9)} title="Crypto Xchacha20"/>
            </View>
            }
            <View style={{flex:1}}>
                {selectedTest == 1 && <RandomDataTests/> }
                {selectedTest == 2 && <SecretKeyCryptographyTests/> }
                {selectedTest == 3 && <PublicKeyCryptographyTests/> }
                {selectedTest == 4 && <PasswordHashingTests/> }
                {selectedTest == 5 && <AdvancedTests/> }
                {selectedTest == 6 && <CryptoCoreTests/> }
                {selectedTest == 7 && <CryptoScalarmultTests/> }
                {selectedTest == 8 && <CryptoGenerichashTests/> }
                {selectedTest == 9 && <CryptoXchacha20poly1305Tests/> }
            </View>
            {selectedTest != 0 &&
            <View>
                <Button onPress={() => setSelectedTest(0)} title="Clear"/>
            </View>
            }
        </SafeAreaView>
    )
}
