import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeEstudante from "./estudante/HomeEstudante";
import CriarEstudante from "./estudante/CriarEstudante";
import ListarEstudante from "./estudante/ListarEstudante";
import EditarEstudante from "./estudante/EditarEstudante";
import CriarProfessor from "./Professor/CriarProfessor";
import ListarProfessor from "./Professor/ListarProfessor";
import EditarProfessor from "./Professor/EditarProfessor";

const Stack = createNativeStackNavigator()

const RoutesCrud = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeEstudante' 
                component={HomeEstudante} 
                options={{title:'Home'}}/>
            <Stack.Screen 
                name='CriarEstudante' 
                component={CriarEstudante} 
                options={{title:'Criar Estudante'}}/>
            <Stack.Screen 
                name='ListarEstudante' 
                component={ListarEstudante} 
                options={{title:'Listar Estudantes'}}/>
            <Stack.Screen 
                name='EditarEstudante' 
                component={EditarEstudante} 
                options={{title:'Editar Estudante'}}/>
            <Stack.Screen 
                name='CriarProfessor' 
                component={CriarProfessor} 
                options={{title:'Criar Professor'}}/>
            <Stack.Screen 
                name='ListarProfessor' 
                component={ListarProfessor} 
                options={{title:'Listar Professors'}}/>
            <Stack.Screen 
                name='EditarProfessor' 
                component={EditarProfessor} 
                options={{title:'Editar Professor'}}/>
        </Stack.Navigator>
    )
}

export default RoutesCrud