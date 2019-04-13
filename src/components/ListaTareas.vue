<template>
    <div>
        <v-text-field
            label="Agregar nuevo contacto a la lista"
            v-model="tareaNueva"
            @keyup.13="agregandoTarea"
        />
        <v-card>
            <v-toolbar color="transparent" flat>
                <v-toolbar-title>{{titulo}}</v-toolbar-title>
                <v-spacer/>
                <slot name="editar"/>
            </v-toolbar>
            <v-divider/>
            <v-card-text>
                <v-list>
                    <tarea v-for="tarea in tareas" :key="tarea.id" :tarea="tarea"/>
                </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import Tarea from './Tarea.vue'
export default {
    props:{
        titulo:String,
        tareas:Array,
        agregarTarea: Function
    },
    components:{Tarea},
    data(){
        return {
            tareaNueva : '',
            search:''
           
        }
    },
    methods:{
        agregandoTarea(){
            this.agregarTarea(this.tareaNueva).then(()=>{
                this.tareaNueva = ''
            }).catch((error)=>{
                console.log(error)
                this.tareaNueva = ''
            })
        },
        buscar(){

        }
    },

}
</script>

<style>

</style>
