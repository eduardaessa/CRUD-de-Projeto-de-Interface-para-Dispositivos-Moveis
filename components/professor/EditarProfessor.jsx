import { useEffect, useState } from "react";
import { View,Text,Button,TextInput } from "react-native";
import { estilos } from "../css/MeuCSS";

import ProfessorService from "../service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config"


const EditarProfessor = (props)=> {

    const [nome,setNome] = useState('')
    const [curso,setCurso] = useState('')
    const [salario,setSalario] = useState('')

    useEffect(
        ()=>{
            ProfessorService.recuperar(
                firestoreDb,
                (professor)=>{
                    setNome(professor.nome)
                    setCurso(professor.curso)
                    setSalario(professor.salario)
                },
                props.route.params.id
            )
        },
        []
    )

    const acaoBotaoSubmeter = ()=> {

        ProfessorService.atualizar(
            firestoreDb,
            ()=>{
                alert('professor atualizado!')
                props.navigation.navigate('ListarProfessor')
            },
            props.route.params.id,
            {nome,curso,salario}
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Editar professor</Text>
            <TextInput
                style={estilos.input}
                placeholder="Nome" 
                value={nome}
                onChangeText={(nome)=>setNome(nome)}
            />
            <TextInput
                style={estilos.input}
                placeholder="Curso" 
                value={curso}
                onChangeText={(curso)=>setCurso(curso)}
            />
            <TextInput
                style={estilos.input}
                placeholder="Salario"
                value={salario}
                keyboardType='numeric'
                onChangeText={(salario)=>setSalario(salario)} 
            />
            <View style={estilos.botao}>
                <Button
                    title="ATUALIZAR" 
                    onPress={acaoBotaoSubmeter}
                />
            </View>
        </View>
    )
}

export default EditarProfessor