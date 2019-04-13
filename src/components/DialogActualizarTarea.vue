<template>
    <v-dialog 
        v-model="dialogTarea"
        width="500"
        >
        <v-card>
            <v-toolbar color="transparent" flat>
                <v-toolbar-title>ACTUALIZAR CONTACTO</v-toolbar-title>
               
                <v-spacer/>
                <v-btn icon @click="dialogTarea = false">
                    <v-icon color="red">cancel</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <v-card-text>
                <v-form>
                    <v-container>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field
                                    label="Nombres"
                                    v-model="nombre"
                                />
                                <v-text-field
                                    label="Apellidos"
                                    v-model="apellido"
                                />

                              <v-text-field
                                    label="Email"
                                    v-model="email"
                                />
                                <v-text-field
                                    label="Numero de celular"
                                    v-model="celular"
                                />    
                            </v-flex>
                            <center><v-card-text>Llenar todos los campos</v-card-text></center>

                
                        
                            <input ref="inputArchivo" @change="seleccionarArchivo" v-show="false" type="file"/>
                            <v-flex xs12>
                                <v-list dense class="lista_archivos">
                                    <v-toolbar flat>
                                        <v-toolbar-title>Foto de contacto</v-toolbar-title>
                                        <v-spacer/>
                                        <v-btn :loading="cargando" icon @click="abrirArchivos">
                                            <v-icon color="success">add</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <v-list-tile v-for="(archivo,indice) in archivos" :key="indice">
                                        <v-list-tile-title>
                                            <a  :href="archivo.url">{{archivo.nombre}}</a>
                                        </v-list-tile-title>
                                        <v-list-tile-action>
                                            <v-btn icon @click="eliminarArchivo(indice)"><v-icon color="red">delete</v-icon></v-btn>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                    
                                </v-list>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-btn :loading="cargando" color="success" @click="guardarCambios" outline block>GUARDAR</v-btn>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-btn :loading="cargando" color="red" @click="eliminarTarea" outline dark block>ELIMINAR</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import bus from '../bus'
import dateFns from 'date-fns'
import esLocale from 'date-fns/locale/es'
export default {
    beforeMount(){
        bus.$on('dialogTarea',(tareaID)=>{
            var tarea = this.$store.getters.tareaPorID(tareaID)
            this.id = tareaID
            this.nombre = tarea.nombre
            this.apellido =  tarea.apellido,
            this.email =  tarea.email,
            this.celular =   tarea.celular,
       




           
            this.archivos = tarea.archivos
            this.dialogTarea = !this.dialogTarea
        })
    },
    computed:{
        fechaVencimientoFormateada(){
            // 2018-12-28 00:00 GMT0
            // Perú GMT-5
            if(this.fecha_ISO){
                return dateFns.format(this.fecha_ISO,'DD/MM/YYYY',{
                    locale: esLocale
                })
            }
            return ''
        },
       
    },
    data(){
        return {
            cargando : false,
            dialogTarea: false,
            contenido: '',
            id: 0,
            fecha_ISO : '',
            hora_seleccionada : '',
            archivos: []
        }
    },
    methods:{
        filtrarFechas(fechaISO){
            if(dateFns.isToday(fechaISO) || dateFns.isAfter(fechaISO,new Date())){
                return true
            }
            return false
        },
        convertirAFechaVencimiento(){
            if(this.fecha_ISO != ""){
                if(this.hora_seleccionada != ""){
                    return dateFns.parse(`${this.fecha_ISO} ${this.hora_seleccionada}`)
                }
                else{
                    return dateFns.parse(this.fecha_ISO)
                }
            }
            else{
                return null
            }
        },
        abrirArchivos(){
            this.$refs.inputArchivo.click()
        },
        seleccionarArchivo(e){
            var archivoSeleccionado = e.target.files[0]
            this.$store.dispatch('subirArchivo',archivoSeleccionado).then((url)=>{
                var tarea = this.$store.getters.tareaPorID(this.id)
                tarea.archivos.push({
                    nombre: archivoSeleccionado.name,
                    url: url
                })
                this.$store.dispatch('actualizarArchivos',tarea).catch((error)=>{
                    console.log(error)
                })
            }).catch((error)=>{
                console.log(error)
            })
        },
        eliminarArchivo(indice){
            this.cargando = true
            this.$store.dispatch('eliminarArchivo',{
                indice:indice,
                tareaID:this.id
            }).then(()=>{
                this.cargando = false
            }).catch((error)=>{
                this.cargando = false
                console.log(error)
            })
        },
        guardarCambios(){
            this.cargando = true
            var tarea = {}
            tarea.nombre = this.nombre
            tarea.apellido =  this.apellido
            tarea.email =  this.email
            tarea.celular = this.celular  
         




         
            tarea.id = this.id
            this.$store.dispatch('actualizarTarea',tarea).then(()=>{
                this.cargando = false
                this.dialogTarea = false
            }).catch((error)=>{
                this.cargando = false
                console.log(error)
            })
        },  
        eliminarTarea(){
            this.$store.dispatch('eliminarTarea',this.id).then(()=>{
                this.cargando = false
                this.dialogTarea = false
            }).catch((error)=>{
                this.cargando = false
                console.log(error)
            })
        }
    }
    
}
</script>

<style>
    .lista_archivos{
        max-height: 350px;
        overflow-y: scroll;
    }
</style>    
