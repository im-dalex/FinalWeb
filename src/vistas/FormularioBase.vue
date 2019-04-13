<template>
    <v-content class="blue">
        <v-container fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm6 md4 class="text-xs-center">
                    <v-card>
                        <v-responsive>
                            <img class="mt-2" height="160" src="../assets/log.png">
                        </v-responsive>
                        <v-card-text>
                            <h4>{{titulo}}</h4>
                            <slot name="formulario"></slot>
                            <v-alert color="red" v-show="Boolean(error)">
                                {{error}}
                            </v-alert>
                        </v-card-text>
                        
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    props:['titulo','error']
}
</script>

<style>

.blue{
background: #00B4DB;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>
