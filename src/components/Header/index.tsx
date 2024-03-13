import { View, Text } from "react-native"
import { HeaderStyles } from "./HeaderStyles"


export const Header:React.FC = () =>{

    return(

        <View style={HeaderStyles.container}>
            
            <Text style={HeaderStyles.title}>Compare App</Text>

        </View>
    )

}