import { View,Text,Button } from "react-native";
import { estilos } from "../css/MeuCSS";

const HomeEstudante = (props)=> {
    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Estudante Home</Text>
            <View style={estilos.botao}>
                <Button 
                    title='Criar Estudante'
                    onPress={()=>props.navigation.navigate('CriarEstudante')}/>
            </View>
            <View style={estilos.botao}>
                <Button 
                    title='Criar Professor'
                    onPress={()=>props.navigation.navigate('CriarProfessor')}/>
            </View>
            <View style={estilos.botao}>
                <Button 
                    title='Listar Estudante'
                    onPress={()=>props.navigation.navigate('ListarEstudante')}/>
            </View>
            <View style={estilos.botao}>
                <Button 
                    title='Listar Professor'
                    onPress={()=>props.navigation.navigate('ListarProfessor')}/>
            </View>
        </View>
    )
}
export default HomeEstudante