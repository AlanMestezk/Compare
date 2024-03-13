import { Modal, View, Text, Button } from "react-native"

interface ModalProps{

    visible       : boolean
    closeModal    : () => void
    valueGasolina?: number | any
    valueEtanol?  : number | any
}

export const CustomModal: React.FC<ModalProps> = ({visible, closeModal, valueGasolina, valueEtanol})=>{

    return(
        
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            
            <View>

                {
                    valueGasolina < valueEtanol ?
                    (
                        <Text>Gasolina compensa mais</Text>
                    ):
                    (
                        <Text>Etanol compensa mais</Text>
                    )
                }

                <Button
                    title="fechar"
                    onPress={closeModal}
                />

            </View>

        </Modal>

    )
}