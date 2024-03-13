import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Header }                                           from './src/components/Header';
import { GolbalStyles }                                     from './src/styles/GlobalStyles';
import { useState }                                         from 'react';
import { CustomModal }                                      from './src/components/Modal';


export default function App() {

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [gasolina,         setGasolina] = useState<number | any>()
  const [etanol,             setEtanol] = useState<number | any>()

  const handleChangeGasolina = (valueGasolina: string) => {
    setGasolina(parseFloat(valueGasolina));
  };

  const handleChangeEtanol = (valueEtanol: string)=>{
    setEtanol(parseFloat(valueEtanol))
} 
  
  const handleShowModal = ()=>{

    setModalVisible(!modalVisible)

  }


  return (

    <View style={GolbalStyles.container}>
      
      <View>

        <Header/>

      </View>

      <View>

          <Text>Comparar gasolina e etanol?</Text>

      </View>

      <View>

        <TextInput
          placeholder='valor da gasolina'
          keyboardType='numeric'
          value={gasolina}
          onChangeText={handleChangeGasolina}
        />

        <TextInput
          placeholder='valor do etanol'
          keyboardType='numeric'
          value={etanol}
          onChangeText={handleChangeEtanol}
        />
        
        <Button
          title="comparar"
          onPress={handleShowModal}
        />

        <CustomModal
          closeModal={handleShowModal}
          visible={modalVisible}
          valueEtanol={etanol}
          valueGasolina={gasolina}
        />

      </View>
      
    </View>

  );
}


