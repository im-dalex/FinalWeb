(function(a){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],d=0,v=[];d<c.length;d++)i=c[d],o[i]&&v.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var a,t=0;t<n.length;t++){for(var e=n[t],r=!0,c=1;c<e.length;c++){var s=e[c];0!==o[s]&&(r=!1)}r&&(n.splice(t--,1),a=i(i.s=e[0]))}return a}var r={},o={app:0},n=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=a,i.c=r,i.d=function(a,t,e){i.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)i.d(e,r,function(t){return a[t]}.bind(null,r));return e},i.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(t,"a",t),t},i.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;n.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"01cf":function(a,t,e){},"0735":function(a,t,e){"use strict";var r=e("3237"),o=e.n(r);o.a},"0895":function(a,t,e){a.exports=e.p+"img/google.09aea0f5.svg"},"0bea":function(a,t,e){"use strict";var r=e("a8cd"),o=e.n(r);o.a},"0d0e":function(a,t,e){},"14f2":function(a,t,e){},2018:function(a,t,e){"use strict";var r=e("d740"),o=e.n(r);o.a},"22cd":function(a,t,e){},"2e81":function(a,t,e){"use strict";var r=e("d07d"),o=e.n(r);o.a},3237:function(a,t,e){},3511:function(a,t,e){"use strict";var r=e("14f2"),o=e.n(r);o.a},"3e28":function(a,t,e){"use strict";var r=e("f8c7"),o=e.n(r);o.a},"4c348":function(a,t,e){"use strict";var r=e("eaa5"),o=e.n(r);o.a},"56d7":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),o=e("bb71");e("da64");r["a"].use(o["a"],{iconfont:"md"});var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",[e("router-view")],1)},i=[],c=(e("ac6a"),e("59ca")),s=e.n(c),l=(e("ea7b"),e("e71f"),e("588e"),{apiKey:"AIzaSyA6iHyl_YeiYD7ke5lIyKmbqvXr7OKyfG8",authDomain:"dcu-project-bc1df.firebaseapp.com",databaseURL:"https://dcu-project-bc1df.firebaseio.com",projectId:"dcu-project-bc1df",storageBucket:"dcu-project-bc1df.appspot.com",messagingSenderId:"700804365297"});s.a.initializeApp(l);var u=s.a.firestore(),d={timestampsInSnapshots:!0};u.settings(d);var v=s.a,f=v.firestore(),h=null,m=null,p={data:function(){return{}},beforeCreate:function(){var a=this;v.auth().onAuthStateChanged(function(t){t?(m=f.collection("tareas").where("userID","==",t.uid).onSnapshot(function(t){var e=[];t.forEach(function(a){var t=a.data();t.id=a.id,t.fecha_vencimiento&&(t.fecha_vencimiento=t.fecha_vencimiento.toDate()),e.push(t)}),console.log(e),a.$store.commit("cargarTareas",e)}),h=f.collection("listas").where("userID","==",t.uid).onSnapshot(function(t){var e=[];t.forEach(function(a){var t=a.data();t.id=a.id,e.push(t)}),a.$store.commit("cargarListas",e)}),a.$store.commit("login",t),a.$router.push("/panel")):(m&&(m(),m=null),h&&(h(),h=null),a.$store.commit("cargarTareas",[]),a.$store.commit("cargarListas",[]),a.$router.push("/"))})}},g=p,b=e("2877"),_=e("6544"),x=e.n(_),T=e("7496"),w=Object(b["a"])(g,n,i,!1,null,null,null);w.options.__file="App.vue";var V=w.exports;x()(w,{VApp:T["a"]});var k=e("8c4f"),A=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("formulario-base",{attrs:{titulo:"INGRESAR",error:a.error}},[r("v-form",{attrs:{slot:"formulario"},slot:"formulario",model:{value:a.valido,callback:function(t){a.valido=t},expression:"valido"}},[r("v-text-field",{attrs:{"prepend-icon":"email",rules:a.reglasEmail,label:"Correo electrónico"},model:{value:a.email,callback:function(t){a.email=t},expression:"email"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",label:"Contraseña",type:"password"},model:{value:a.password,callback:function(t){a.password=t},expression:"password"}}),r("div",{staticClass:"text-xs-right"},[r("router-link",{attrs:{to:"/recuperar"}},[a._v("¿Olvidó su contraseña?")])],1),r("v-btn",{staticClass:"primary elevation-0",attrs:{disabled:!a.valido,loading:a.cargandoFormulario,block:""},on:{click:a.loginCorreo}},[a._v("INGRESAR")]),r("div",{staticClass:"my-2"},[r("span",[a._v("¿No tiene una cuenta? "),r("router-link",{attrs:{to:"/registrese"}},[a._v("REGISTRESE")])],1)]),r("v-divider"),r("v-btn",{staticClass:"my-3 bg-facebook",attrs:{block:"",loading:a.cargandoFormulario,dark:""},on:{click:a.loginFacebook}},[r("img",{staticClass:"mr-1 mb-1",attrs:{height:"16",src:e("aaa3")}}),a._v("\n            Facebook\n        ")]),r("v-btn",{attrs:{loading:a.cargandoFormulario,block:""},on:{click:a.loginGoogle}},[r("img",{staticClass:"mr-1 mb-1",attrs:{height:"16",src:e("0895")}}),a._v("\n            Google\n        ")])],1)],1)},y=[],I=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-content",{staticClass:"blue"},[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",[r("v-responsive",[r("img",{staticClass:"mt-2",attrs:{height:"160",src:e("895f")}})]),r("v-card-text",[r("h4",[a._v(a._s(a.titulo))]),a._t("formulario"),r("v-alert",{directives:[{name:"show",rawName:"v-show",value:Boolean(a.error),expression:"Boolean(error)"}],attrs:{color:"red"}},[a._v("\n                            "+a._s(a.error)+"\n                        ")])],2)],1)],1)],1)],1)],1)},C=[],E={props:["titulo","error"]},$=E,F=(e("d3fc"),e("0798")),D=e("b0af"),L=e("99d9"),P=e("a523"),O=e("549c"),S=e("0e8f"),j=e("a722"),N=e("6b53"),R=Object(b["a"])($,I,C,!1,null,null,null);R.options.__file="FormularioBase.vue";var M=R.exports;x()(R,{VAlert:F["a"],VCard:D["a"],VCardText:L["a"],VContainer:P["a"],VContent:O["a"],VFlex:S["a"],VLayout:j["a"],VResponsive:N["a"]});var H={data:function(){var a=this;return{error:"",valido:!1,cargandoFormulario:!1,email:"",password:"",reglasNombre:[function(a){return a.length>0||"Debe ingresar un nombre valido"},function(a){return a.length<=25||"Debe ingresar menos de 25 caracteres"}],reglasEmail:[function(t){return a.validarEmail(t)||"Ingrese un correo válido"}],reglasPassword:[function(a){return a.length>8||"Debe ingresar una contraseña mayor de 8 caracteres"}],reglasRepetirPassword:[function(t){return a.password===t||"Las contraseñas deben coincidir"}]}},methods:{validarEmail:function(a){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(a).toLowerCase())}}},z=(e("5df3"),e("f400"),new Map);z.set("auth/user-not-found","El usuario no se encuentra registrado"),z.set("auth/wrong-password","Contraseña incorrecta"),z.set("auth/account-exists-with-different-credential","La cuenta ya estaba registrada usando un método de ingreso distinto."),z.set("auth/email-already-in-use","El correo electrónico ya está registrado");var U=function(a){console.log(a);var t=z.get(a);return t||"Ha ocurrido un error mientras se realizaba esta acción. Por favor, comuníquese con soporte técnico"},B={components:{FormularioBase:M},mixins:[H],methods:{loginCorreo:function(){var a=this;this.cargandoFormulario=!0,this.$store.dispatch("loginCorreo",{email:this.email,password:this.password}).then(function(t){a.cargandoFormulario=!1}).catch(function(t){a.cargandoFormulario=!1,a.error=U(t.code)})},loginFacebook:function(){var a=this;this.cargandoFormulario=!0,this.$store.dispatch("loginFacebook").then(function(t){a.cargandoFormulario=!1}).catch(function(t){a.cargandoFormulario=!1,a.error=U(t.code)})},loginGoogle:function(){var a=this;this.cargandoFormulario=!0,this.$store.dispatch("loginGoogle").then(function(t){a.cargandoFormulario=!1}).catch(function(t){a.cargandoFormulario=!1,a.error=U(t.code)})}}},G=B,Y=(e("6a88"),e("8336")),W=e("ce7e"),Z=e("4bd4"),K=e("2677"),q=Object(b["a"])(G,A,y,!1,null,"4baf070b",null);q.options.__file="FormularioIngreso.vue";var J=q.exports;x()(q,{VBtn:Y["a"],VDivider:W["a"],VForm:Z["a"],VTextField:K["a"]});var X=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("formulario-base",{attrs:{titulo:"RECUPERAR CONTRASEÑA",error:a.error}},[e("v-form",{attrs:{slot:"formulario"},slot:"formulario",model:{value:a.valido,callback:function(t){a.valido=t},expression:"valido"}},[e("v-text-field",{attrs:{label:"Correo electrónico","prepend-icon":"email",rules:a.reglasEmail},model:{value:a.email,callback:function(t){a.email=t},expression:"email"}}),e("v-btn",{attrs:{disabled:!a.valido,loading:a.cargandoFormulario,color:"success",block:""},on:{click:a.recuperarPassword}},[a._v("Recuperar contraseña")]),e("v-alert",{directives:[{name:"show",rawName:"v-show",value:Boolean(a.exito),expression:"Boolean(exito)"}],attrs:{color:"success"}},[a._v("\n            "+a._s(a.exito)+"\n        ")]),e("router-link",{attrs:{to:"/"}},[a._v("Regresar")])],1)],1)},Q=[],aa={components:{FormularioBase:M},mixins:[H],data:function(){return{exito:""}},methods:{recuperarPassword:function(){var a=this;this.cargandoFormulario=!0,this.$store.dispatch("recuperarPassword",this.email).then(function(){a.cargandoFormulario=!1,a.exito="Se ha enviado un mensaje a su correo electrónico para el reestablecimiento de su contraseña."}).catch(function(t){a.cargandoFormulario=!1,a.error=U(t.code)})}}},ta=aa,ea=(e("2e81"),Object(b["a"])(ta,X,Q,!1,null,null,null));ea.options.__file="FormularioRecuperar.vue";var ra=ea.exports;x()(ea,{VAlert:F["a"],VBtn:Y["a"],VForm:Z["a"],VTextField:K["a"]});var oa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("formulario-base",{attrs:{titulo:"REGISTRARSE",error:a.error}},[e("v-form",{attrs:{slot:"formulario"},slot:"formulario",model:{value:a.valido,callback:function(t){a.valido=t},expression:"valido"}},[e("v-text-field",{attrs:{label:"Nombre completo","prepend-icon":"person",rules:a.reglasNombre},model:{value:a.nombreCompleto,callback:function(t){a.nombreCompleto=t},expression:"nombreCompleto"}}),e("v-text-field",{attrs:{label:"Correo electrónico","prepend-icon":"email",rules:a.reglasEmail},model:{value:a.email,callback:function(t){a.email=t},expression:"email"}}),e("v-text-field",{attrs:{label:"Contraseña",type:"password","prepend-icon":"lock",rules:a.reglasPassword},model:{value:a.password,callback:function(t){a.password=t},expression:"password"}}),e("v-text-field",{attrs:{label:"Repita su contraseña","prepend-icon":"lock",type:"password",rules:a.reglasRepetirPassword},model:{value:a.repetirPassword,callback:function(t){a.repetirPassword=t},expression:"repetirPassword"}}),e("v-btn",{staticClass:"mb-3",attrs:{color:"primary",loading:a.cargandoFormulario,disabled:!a.valido,block:""},on:{click:a.crearUsuario}},[a._v("REGISTRARSE")]),e("router-link",{attrs:{to:"/"}},[a._v("¿Ya tiene una cuenta?")])],1)],1)},na=[],ia={components:{FormularioBase:M},mixins:[H],data:function(){return{nombreCompleto:"",repetirPassword:""}},methods:{crearUsuario:function(){var a=this,t={};this.cargandoFormulario=!0,t.nombreCompleto=this.nombreCompleto,t.password=this.password,t.email=this.email,this.$store.dispatch("crearUsuario",t).then(function(t){a.cargandoFormulario=!1}).catch(function(t){a.cargandoFormulario=!1,a.error=U(t.code)})}}},ca=ia,sa=(e("2018"),Object(b["a"])(ca,oa,na,!1,null,null,null));sa.options.__file="FormularioRegistro.vue";var la=sa.exports;x()(sa,{VBtn:Y["a"],VForm:Z["a"],VTextField:K["a"]});var ua=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("barra-superior"),e("menu-principal"),e("dialog-actualizar-tarea"),e("v-content",[e("v-container",[e("v-layout",[e("v-flex",{attrs:{xs12:""}},[e("router-view")],1)],1)],1)],1)],1)},da=[],va=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-toolbar",{attrs:{app:"",color:"blue",dark:"","clipped-left":""}},[e("v-toolbar-side-icon",{on:{click:a.notificarDrawer}}),e("v-toolbar-title",[a._v("Planificador Docente")])],1)},fa=[],ha=new r["a"],ma=ha,pa={methods:{notificarDrawer:function(){ma.$emit("notificarDrawer")}}},ga=pa,ba=(e("3511"),e("71d9")),_a=e("706c"),xa=e("2a7f"),Ta=Object(b["a"])(ga,va,fa,!1,null,null,null);Ta.options.__file="BarraSuperior.vue";var wa=Ta.exports;x()(Ta,{VToolbar:ba["a"],VToolbarSideIcon:_a["a"],VToolbarTitle:xa["a"]});var Va=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:a.drawer,callback:function(t){a.drawer=t},expression:"drawer"}},[e("v-list",[e("v-list-tile",[e("v-list-tile-avatar",[e("v-avatar",{attrs:{size:"36"}},[e("img",{attrs:{src:a.usuario.photoURL}})])],1),e("v-list-tile",[a._v("\n                "+a._s(a.usuario.displayName)+"\n            ")])],1),e("v-divider"),e("v-list-tile",{attrs:{to:"/panel",exact:""}},[e("v-list-tile-action",[e("v-icon",[a._v("today")])],1),e("v-list-tile-title",[a._v("\n                Hoy\n            ")]),e("v-list-tile-action",{directives:[{name:"show",rawName:"v-show",value:a.numeroTareasHoy>0,expression:"numeroTareasHoy >0"}]},[e("v-chip",{attrs:{color:"red",small:"","text-color":"white"}},[a._v(a._s(a.numeroTareasHoy))])],1)],1),e("v-list-tile",{attrs:{to:"/panel/manana"}},[e("v-list-tile-action",[e("v-icon",[a._v("event")])],1),e("v-list-tile-title",[a._v("\n                Mañana\n            ")]),e("v-list-tile-action",{directives:[{name:"show",rawName:"v-show",value:a.numeroTareasManana>0,expression:"numeroTareasManana >0"}]},[e("v-chip",{attrs:{color:"red",small:"","text-color":"white"}},[a._v(a._s(a.numeroTareasManana))])],1)],1),e("v-list-tile",{attrs:{to:"/panel/listas"}},[e("v-list-tile-action",[e("v-icon",[a._v("list")])],1),e("v-list-tile-title",[a._v("\n                    Mis listas\n                ")])],1),e("v-divider"),e("v-list-tile",{on:{click:a.desconectarse}},[e("v-list-tile-action",[e("v-icon",[a._v("exit_to_app")])],1),e("v-list-tile-title",[a._v("\n                    Salir\n                ")])],1)],1)],1)},ka=[],Aa=e("6aa1"),ya=e.n(Aa),Ia={data:function(){return{drawer:!1}},computed:{usuario:function(){var a=this.$store.getters.getUsuario;return a||{photoURL:ya.a,displayName:""}},numeroTareasHoy:function(){return this.$store.getters.tareasHoy.filter(function(a){return!a.completado}).length},numeroTareasManana:function(){return this.$store.getters.tareasManana.filter(function(a){return!a.completado}).length}},beforeMount:function(){var a=this;ma.$on("notificarDrawer",function(){a.drawer=!a.drawer})},methods:{desconectarse:function(){this.$store.dispatch("desconectarse")}}},Ca=Ia,Ea=(e("9357"),e("8212")),$a=e("cc20"),Fa=e("132d"),Da=e("8860"),La=e("ba95"),Pa=e("40fe"),Oa=e("c954"),Sa=e("5d23"),ja=e("f774"),Na=Object(b["a"])(Ca,Va,ka,!1,null,null,null);Na.options.__file="MenuPrincipal.vue";var Ra=Na.exports;x()(Na,{VAvatar:Ea["a"],VChip:$a["a"],VDivider:W["a"],VIcon:Fa["a"],VList:Da["a"],VListTile:La["a"],VListTileAction:Pa["a"],VListTileAvatar:Oa["a"],VListTileTitle:Sa["a"],VNavigationDrawer:ja["a"]});var Ma=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{width:"500"},model:{value:a.dialogTarea,callback:function(t){a.dialogTarea=t},expression:"dialogTarea"}},[e("v-card",[e("v-toolbar",{attrs:{color:"transparent",flat:""}},[e("v-toolbar-title",[a._v("ACTUALIZAR TAREA")]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(t){a.dialogTarea=!1}}},[e("v-icon",{attrs:{color:"red"}},[a._v("cancel")])],1)],1),e("v-divider"),e("v-card-text",[e("v-form",[e("v-container",[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Titulo de la tarea"},model:{value:a.contenido,callback:function(t){a.contenido=t},expression:"contenido"}}),e("v-text-field",{attrs:{label:"Actividad"},model:{value:a.actividad,callback:function(t){a.actividad=t},expression:"actividad"}}),e("v-text-field",{attrs:{label:"Descripción de la actividad"},model:{value:a.descripcion,callback:function(t){a.descripcion=t},expression:"descripcion"}})],1),e("v-flex",{attrs:{xs12:"",sm6:""}},[e("v-menu",{attrs:{"close-on-content-click":!0}},[e("v-text-field",{attrs:{slot:"activator",readonly:"",label:"Fecha de vencimiento","append-icon":"close"},on:{"click:append":function(t){a.fecha_ISO=""}},slot:"activator",model:{value:a.fechaVencimientoFormateada,callback:function(t){a.fechaVencimientoFormateada=t},expression:"fechaVencimientoFormateada"}}),e("v-date-picker",{attrs:{locale:"es","allowed-dates":a.filtrarFechas,"first-day-of-week":"1"},model:{value:a.fecha_ISO,callback:function(t){a.fecha_ISO=t},expression:"fecha_ISO"}})],1)],1),e("v-flex",{attrs:{xs12:"",sm6:""}},[e("v-menu",{attrs:{"close-on-content-click":!1}},[e("v-text-field",{attrs:{slot:"activator",readonly:"",label:"Hora de vencimiento",clearable:""},slot:"activator",model:{value:a.hora_seleccionada,callback:function(t){a.hora_seleccionada=t},expression:"hora_seleccionada"}}),e("v-time-picker",{model:{value:a.hora_seleccionada,callback:function(t){a.hora_seleccionada=t},expression:"hora_seleccionada"}})],1)],1),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"inputArchivo",attrs:{type:"file"},on:{change:a.seleccionarArchivo}}),e("v-flex",{attrs:{xs12:""}},[e("v-list",{staticClass:"lista_archivos",attrs:{dense:""}},[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[a._v("Archivos")]),e("v-spacer"),e("v-btn",{attrs:{loading:a.cargando,icon:""},on:{click:a.abrirArchivos}},[e("v-icon",{attrs:{color:"success"}},[a._v("add")])],1)],1),a._l(a.archivos,function(t,r){return e("v-list-tile",{key:r},[e("v-list-tile-title",[e("a",{attrs:{href:t.url}},[a._v(a._s(t.nombre))])]),e("v-list-tile-action",[e("v-btn",{attrs:{icon:""},on:{click:function(t){a.eliminarArchivo(r)}}},[e("v-icon",{attrs:{color:"red"}},[a._v("delete")])],1)],1)],1)})],2)],1),e("v-flex",{attrs:{xs12:"",sm6:""}},[e("v-btn",{attrs:{loading:a.cargando,color:"success",outline:"",block:""},on:{click:a.guardarCambios}},[a._v("GUARDAR")])],1),e("v-flex",{attrs:{xs12:"",sm6:""}},[e("v-btn",{attrs:{loading:a.cargando,color:"red",outline:"",dark:"",block:""},on:{click:a.eliminarTarea}},[a._v("ELIMINAR")])],1)],1)],1)],1)],1)],1)],1)},Ha=[],za=(e("7f7f"),e("340b")),Ua=e.n(za),Ba=e("fd2d"),Ga=e.n(Ba),Ya={beforeMount:function(){var a=this;ma.$on("dialogTarea",function(t){var e,r,o,n,i,c=a.$store.getters.tareaPorID(t);(a.id=t,a.contenido=c.contenido,a.actividad=c.actividad,a.descripcion=c.descripcion,a.fecha_ISO="",a.hora_seleccionada="",c.fecha_vencimiento)&&(e=c.fecha_vencimiento.getFullYear(),r=c.fecha_vencimiento.getMonth()+1,o=c.fecha_vencimiento.getDate(),n=c.fecha_vencimiento.getHours(),i=c.fecha_vencimiento.getMinutes(),a.fecha_ISO="".concat(e,"-").concat(r,"-").concat(o),0==n&&0==i||(a.hora_seleccionada="".concat(n,":").concat(i)));a.archivos=c.archivos,a.dialogTarea=!a.dialogTarea})},computed:{fechaVencimientoFormateada:function(){return this.fecha_ISO?Ua.a.format(this.fecha_ISO,"DD/MM/YYYY",{locale:Ga.a}):""}},data:function(){return{cargando:!1,dialogTarea:!1,contenido:"",id:0,fecha_ISO:"",hora_seleccionada:"",archivos:[]}},methods:{filtrarFechas:function(a){return!(!Ua.a.isToday(a)&&!Ua.a.isAfter(a,new Date))},convertirAFechaVencimiento:function(){return""!=this.fecha_ISO?""!=this.hora_seleccionada?Ua.a.parse("".concat(this.fecha_ISO," ").concat(this.hora_seleccionada)):Ua.a.parse(this.fecha_ISO):null},abrirArchivos:function(){this.$refs.inputArchivo.click()},seleccionarArchivo:function(a){var t=this,e=a.target.files[0];this.$store.dispatch("subirArchivo",e).then(function(a){var r=t.$store.getters.tareaPorID(t.id);r.archivos.push({nombre:e.name,url:a}),t.$store.dispatch("actualizarArchivos",r).catch(function(a){console.log(a)})}).catch(function(a){console.log(a)})},eliminarArchivo:function(a){var t=this;this.cargando=!0,this.$store.dispatch("eliminarArchivo",{indice:a,tareaID:this.id}).then(function(){t.cargando=!1}).catch(function(a){t.cargando=!1,console.log(a)})},guardarCambios:function(){var a=this;this.cargando=!0;var t={};t.contenido=this.contenido,t.actividad=this.actividad,t.descripcion=this.descripcion,t.fecha_vencimiento=this.convertirAFechaVencimiento(),t.id=this.id,this.$store.dispatch("actualizarTarea",t).then(function(){a.cargando=!1,a.dialogTarea=!1}).catch(function(t){a.cargando=!1,console.log(t)})},eliminarTarea:function(){var a=this;this.$store.dispatch("eliminarTarea",this.id).then(function(){a.cargando=!1,a.dialogTarea=!1}).catch(function(t){a.cargando=!1,console.log(t)})}}},Wa=Ya,Za=(e("64eb"),e("2e4b")),Ka=e("169a"),qa=e("e449"),Ja=e("9910"),Xa=e("c964"),Qa=Object(b["a"])(Wa,Ma,Ha,!1,null,null,null);Qa.options.__file="DialogActualizarTarea.vue";var at=Qa.exports;x()(Qa,{VBtn:Y["a"],VCard:D["a"],VCardText:L["a"],VContainer:P["a"],VDatePicker:Za["a"],VDialog:Ka["a"],VDivider:W["a"],VFlex:S["a"],VForm:Z["a"],VIcon:Fa["a"],VLayout:j["a"],VList:Da["a"],VListTile:La["a"],VListTileAction:Pa["a"],VListTileTitle:Sa["a"],VMenu:qa["a"],VSpacer:Ja["a"],VTextField:K["a"],VTimePicker:Xa["a"],VToolbar:ba["a"],VToolbarTitle:xa["a"]});var tt={components:{BarraSuperior:wa,MenuPrincipal:Ra,DialogActualizarTarea:at}},et=tt,rt=(e("3e28"),Object(b["a"])(et,ua,da,!1,null,null,null));rt.options.__file="PanelPrincipal.vue";var ot=rt.exports;x()(rt,{VContainer:P["a"],VContent:O["a"],VFlex:S["a"],VLayout:j["a"]});var nt=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("lista-tareas",{attrs:{titulo:"Hoy",tareas:a.tareasHoy,agregarTarea:a.agregarTarea}})},it=[],ct=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-text-field",{attrs:{label:"Agregar tarea a esta lista"},on:{keyup:function(t){return"button"in t||13===t.keyCode?a.agregandoTarea(t):null}},model:{value:a.tareaNueva,callback:function(t){a.tareaNueva=t},expression:"tareaNueva"}}),e("v-card",[e("v-toolbar",{attrs:{color:"transparent",flat:""}},[e("v-toolbar-title",[a._v(a._s(a.titulo))]),e("v-spacer"),a._t("editar")],2),e("v-divider"),e("v-card-text",[e("v-list",a._l(a.tareas,function(a){return e("tarea",{key:a.id,attrs:{tarea:a}})}),1)],1)],1)],1)},st=[],lt=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-list-tile",[e("v-list-tile-action",[e("v-checkbox",{model:{value:a.tarea.completado,callback:function(t){a.$set(a.tarea,"completado",t)},expression:"tarea.completado"}})],1),e("v-list-tile-title",{class:{tarea:a.tarea.completado}},[e("span",[a._v(a._s(a.tarea.contenido))])]),e("v-list-tile-action",[e("v-btn",{attrs:{icon:""},on:{click:a.actualizarTarea}},[e("v-icon",{attrs:{color:"success"}},[a._v("edit")])],1)],1)],1),e("v-divider")],1)},ut=[],dt={props:{tarea:Object},methods:{actualizarTarea:function(){ma.$emit("dialogTarea",this.tarea.id)}},watch:{"tarea.completado":function(a){this.$store.dispatch("actualizarEstadoTarea",this.tarea)}}},vt=dt,ft=(e("4c348"),e("ac7c")),ht=Object(b["a"])(vt,lt,ut,!1,null,"2a68723f",null);ht.options.__file="Tarea.vue";var mt=ht.exports;x()(ht,{VBtn:Y["a"],VCheckbox:ft["a"],VDivider:W["a"],VIcon:Fa["a"],VListTile:La["a"],VListTileAction:Pa["a"],VListTileTitle:Sa["a"]});var pt={props:{titulo:String,tareas:Array,agregarTarea:Function},components:{Tarea:mt},data:function(){return{tareaNueva:""}},methods:{agregandoTarea:function(){var a=this;this.agregarTarea(this.tareaNueva).then(function(){a.tareaNueva=""}).catch(function(t){console.log(t),a.tareaNueva=""})}}},gt=pt,bt=(e("7e52"),Object(b["a"])(gt,ct,st,!1,null,null,null));bt.options.__file="ListaTareas.vue";var _t=bt.exports;x()(bt,{VCard:D["a"],VCardText:L["a"],VDivider:W["a"],VList:Da["a"],VSpacer:Ja["a"],VTextField:K["a"],VToolbar:ba["a"],VToolbarTitle:xa["a"]});var xt={components:{ListaTareas:_t},computed:{tareasHoy:function(){return this.$store.getters.tareasHoy}},methods:{agregarTarea:function(a){var t=new Date,e={};return e.contenido=a,e.completado=!1,t.setHours(t.getHours()+1),e.fecha_vencimiento=t,this.$store.dispatch("agregarTarea",e)}}},Tt=xt,wt=(e("0bea"),Object(b["a"])(Tt,nt,it,!1,null,null,null));wt.options.__file="VistaListaTareasHoy.vue";var Vt=wt.exports,kt=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("lista-tareas",{attrs:{titulo:"Mañana",tareas:a.tareasManana,agregarTarea:a.agregarTarea}})},At=[],yt={components:{ListaTareas:_t},computed:{tareasManana:function(){return this.$store.getters.tareasManana}},methods:{agregarTarea:function(a){var t=new Date,e={};return e.contenido=a,e.completado=!1,t.setHours(t.getHours()+24),e.fecha_vencimiento=t,this.$store.dispatch("agregarTarea",e)}}},It=yt,Ct=(e("7a85"),Object(b["a"])(It,kt,At,!1,null,null,null));Ct.options.__file="VistaListaTareasManana.vue";var Et=Ct.exports,$t=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("lista-tareas",{attrs:{titulo:a.titulo,tareas:a.tareas,agregarTarea:a.agregarTarea}},[e("v-btn",{attrs:{slot:"editar",icon:""},on:{click:a.abrirDialog},slot:"editar"},[e("v-icon",{attrs:{color:"success"}},[a._v("edit")])],1)],1),e("v-dialog",{attrs:{width:"300"},model:{value:a.dialogEditar,callback:function(t){a.dialogEditar=t},expression:"dialogEditar"}},[e("v-card",[e("v-toolbar",{attrs:{dense:"",flat:""}},[e("v-toolbar-title",[a._v("ACTUALIZANDO PLANIFICACION ")]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(t){a.dialogEditar=!1}}},[e("v-icon",[a._v("cancel")])],1)],1),e("v-divider"),e("v-card-text",[e("center",[e("v-card-text",[a._v("LISTA DE PLANIFICACIONES")])],1),e("v-text-field",{attrs:{label:"El nombre de la lista"},model:{value:a.nombreEditar,callback:function(t){a.nombreEditar=t},expression:"nombreEditar"}}),e("v-btn",{attrs:{block:"",outline:"",loading:a.cargando,color:"success"},on:{click:a.guardarCambios}},[a._v("\n                    GUARDAR\n                ")]),e("v-btn",{attrs:{block:"",outline:"",loading:a.cargando,color:"red"},on:{click:a.eliminarLista}},[a._v("\n                    ELIMINAR\n                ")])],1)],1)],1)],1)},Ft=[],Dt={components:{ListaTareas:_t},computed:{tareas:function(){var a=this.$route.params.id;return this.$store.getters.tareasPorLista(a)},titulo:function(){var a=this.$route.params.id,t=this.$store.getters.listaPorID(a);return t?t.nombre:""}},data:function(){return{dialogEditar:!1,nombreEditar:"",cargando:!1}},methods:{agregarTarea:function(a){var t=this.$route.params.id,e={};return e.contenido=a,e.completado=!1,e.listaID=t,this.$store.dispatch("agregarTarea",e)},abrirDialog:function(){var a=this.$route.params.id,t=this.$store.getters.listaPorID(a);this.dialogEditar=!0,this.nombreEditar=t.nombre},guardarCambios:function(){var a=this,t=this.$route.params.id;this.cargando=!0,this.$store.dispatch("actualizarLista",{nombre:this.nombreEditar,id:t}).then(function(){a.dialogEditar=!1,a.cargando=!1}).catch(function(t){a.cargando=!1})},eliminarLista:function(){var a=this,t=this.$route.params.id;this.cargando=!0,this.$store.dispatch("eliminarLista",t).then(function(){a.dialogEditar=!1,a.cargando=!1,a.$router.push("/panel/listas")}).catch(function(t){console.log(t),a.cargando=!1})}}},Lt=Dt,Pt=(e("95b4"),Object(b["a"])(Lt,$t,Ft,!1,null,null,null));Pt.options.__file="VistaListaTareasGeneral.vue";var Ot=Pt.exports;x()(Pt,{VBtn:Y["a"],VCard:D["a"],VCardText:L["a"],VDialog:Ka["a"],VDivider:W["a"],VIcon:Fa["a"],VSpacer:Ja["a"],VTextField:K["a"],VToolbar:ba["a"],VToolbarTitle:xa["a"]});var St=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-form",{model:{value:a.valido,callback:function(t){a.valido=t},expression:"valido"}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("h2",[a._v("Nueva Planificacion")]),e("v-divider")],1),e("v-flex",{attrs:{xs12:"",sm8:""}},[e("v-text-field",{attrs:{label:"Nombre de la nueva lista de planificacion",counter:40,rules:a.reglaLista},model:{value:a.listaNueva,callback:function(t){a.listaNueva=t},expression:"listaNueva"}})],1),e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{disabled:!a.valido,color:"success",block:""},on:{click:a.agregarLista}},[a._v("AGREGAR LISTA DE PLANIFICACION")])],1)],1)],1),e("v-layout",{staticClass:"mt-3",attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("h2",[a._v("MIS LISTAS DE PLANIFICACIONES")]),e("v-divider")],1),e("v-container",{attrs:{fluid:"","grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},a._l(a.listas,function(t){return e("v-flex",{key:t.id,attrs:{xs12:"",sm6:"",md3:""}},[e("v-card",{staticClass:"text-xs-center card-lista",attrs:{height:"100"},on:{click:function(e){a.irLista(t.id)}}},[e("v-container",{attrs:{"fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:""}},[e("span",{staticClass:"body-2"},[a._v(a._s(t.nombre))])])],1)],1)],1)],1)}),1)],1)],1)],1)},jt=[],Nt={data:function(){return{listaNueva:"",valido:!1,reglaLista:[function(a){return a.length>0||"Debe ingresar un nombre a la nueva lista"},function(a){return a.length<=40||"El nombre de la nueva lista no debe exceder los 40 caracteres"}]}},computed:{listas:function(){return this.$store.getters.listas}},methods:{irLista:function(a){this.$router.push("/panel/listas/".concat(a))},agregarLista:function(){var a=this;this.$store.dispatch("agregarLista",{nombre:this.listaNueva}).then(function(){a.listaNueva=""})}}},Rt=Nt,Mt=(e("0735"),Object(b["a"])(Rt,St,jt,!1,null,null,null));Mt.options.__file="VistaListas.vue";var Ht=Mt.exports;x()(Mt,{VBtn:Y["a"],VCard:D["a"],VContainer:P["a"],VDivider:W["a"],VFlex:S["a"],VForm:Z["a"],VLayout:j["a"],VTextField:K["a"]}),r["a"].use(k["a"]);var zt=[{path:"/",component:J},{path:"/registrese",component:la},{path:"/recuperar",component:ra},{path:"/panel",component:ot,children:[{path:"",component:Vt},{path:"manana",component:Et},{path:"listas",component:Ht},{path:"listas/:id",component:Ot}]}],Ut=new k["a"]({routes:zt}),Bt=e("2f62"),Gt=e("8468"),Yt={state:{usuario:null},getters:{getUsuario:function(a){return a.usuario}},mutations:{login:function(a,t){a.usuario=t}},actions:{loginCorreo:function(a,t){a.commit;return v.auth().signInWithEmailAndPassword(t.email,t.password)},loginFacebook:function(a){a.commit;var t=new v.auth.FacebookAuthProvider;return v.auth().signInWithPopup(t)},loginGoogle:function(a){a.commit;var t=new v.auth.GoogleAuthProvider;return v.auth().signInWithPopup(t)},recuperarPassword:function(a,t){return Object(Gt["a"])(a),v.auth().sendPasswordResetEmail(t)},desconectarse:function(a){var t=a.commit;return new Promise(function(a,e){v.auth().signOut().then(function(){t("login",null),a()}).catch(function(a){return e(a)})})},crearUsuario:function(a,t){a.commit;return new Promise(function(a,e){v.auth().createUserWithEmailAndPassword(t.email,t.password).then(function(){var r=v.auth().currentUser;r.updateProfile({displayName:t.nombreCompleto}).then(function(){a()}).catch(function(a){e(a)})}).catch(function(a){return e(a)})})}}},Wt=Yt,Zt=(e("20d6"),e("7514"),v.firestore()),Kt=v.storage().ref(),qt={state:{tareas:[]},getters:{tareasHoy:function(a){var t=new Date;return t.setHours(23,59,59),a.tareas.filter(function(a){return a.fecha_vencimiento<=t})},tareasManana:function(a){var t=new Date;t.setDate(t.getDate()+1),t.setHours(23,59,59);var e=new Date;return e.setDate(e.getDate()+1),e.setHours(0,0,1),a.tareas.filter(function(a){return a.fecha_vencimiento>=e&&a.fecha_vencimiento<=t})},tareasPorLista:function(a){return function(t){return a.tareas.filter(function(a){return a.listaID==t})}},tareaPorID:function(a){return function(t){return a.tareas.find(function(a){return a.id===t})}}},mutations:{agregarTarea:function(a,t){a.tareas.push(t)},actualizarTarea:function(a,t){var e=a.tareas.findIndex(function(a){return a.id==t.id});a.tareas.splice(e,1,t)},cargarTareas:function(a,t){a.tareas=t}},actions:{agregarTarea:function(a,t){Object(Gt["a"])(a),t.archivos=[];var e=v.auth().currentUser;return t.userID=e.uid,Zt.collection("tareas").add(t)},eliminarTarea:function(a,t){return Object(Gt["a"])(a),Zt.collection("tareas").doc(t).delete()},actualizarTarea:function(a,t){return Object(Gt["a"])(a),Zt.collection("tareas").doc(t.id).update({contenido:t.contenido,actividad:t.actividad,descripcion:t.descripcion,fecha_vencimiento:t.fecha_vencimiento})},actualizarEstadoTarea:function(a,t){return Object(Gt["a"])(a),Zt.collection("tareas").doc(t.id).update({completado:t.completado})},eliminarTareasPorLista:function(a,t){return Object(Gt["a"])(a),new Promise(function(a,e){Zt.collection("tareas").where("listaID","==",t).get().then(function(t){t.forEach(function(a){a.ref.delete()}),a()}).catch(function(a){return e(a)})})},subirArchivo:function(a,t){Object(Gt["a"])(a);var e=v.auth().currentUser.uid;return new Promise(function(a,r){Kt.child("".concat(e,"/").concat(t.name)).put(t).then(function(t){t.ref.getDownloadURL().then(function(t){a(t)}).catch(function(a){return r(a)})}).catch(function(a){return r(a)})})},actualizarArchivos:function(a,t){return Object(Gt["a"])(a),Zt.collection("tareas").doc(t.id).update({archivos:t.archivos})},eliminarArchivo:function(a,t){var e=a.getters,r=a.dispatch,o=t.indice,n=t.tareaID,i=e.tareaPorID(n),c=i.archivos.splice(o,1)[0];return new Promise(function(a,t){var e=v.auth().currentUser.uid;r("actualizarArchivos",i).then(function(){Kt.child("".concat(e,"/").concat(c.nombre)).delete().then(function(){a()}).catch(function(a){return t(a)})}).catch(function(a){return t(a)})})}}},Jt=qt,Xt=v.firestore(),Qt=v.auth(),ae={state:{listas:[]},getters:{listas:function(a){return a.listas},listaPorID:function(a){return function(t){return a.listas.find(function(a){return a.id==t})}}},mutations:{cargarListas:function(a,t){a.listas=t}},actions:{agregarLista:function(a,t){Object(Gt["a"])(a);var e=Qt.currentUser.uid;return t.userID=e,Xt.collection("listas").add(t)},eliminarLista:function(a,t){var e=a.dispatch;return new Promise(function(a,r){Xt.collection("listas").doc(t).delete().then(function(){e("eliminarTareasPorLista",t).then(function(){a()}).catch(function(a){return r(a)})}).catch(function(a){return r(a)})})},actualizarLista:function(a,t){return Object(Gt["a"])(a),Xt.collection("listas").doc(t.id).update({nombre:t.nombre})}}},te=ae;r["a"].use(Bt["a"]);var ee=new Bt["a"].Store({modules:[Wt,Jt,te]});r["a"].config.productionTip=!1,new r["a"]({render:function(a){return a(V)},router:Ut,store:ee}).$mount("#app")},"5b02":function(a,t,e){},"64eb":function(a,t,e){"use strict";var r=e("22cd"),o=e.n(r);o.a},"6a88":function(a,t,e){"use strict";var r=e("5b02"),o=e.n(r);o.a},"6aa1":function(a,t,e){a.exports=e.p+"img/usuario_placeholder.51c10256.svg"},"7a85":function(a,t,e){"use strict";var r=e("b622"),o=e.n(r);o.a},"7e52":function(a,t,e){"use strict";var r=e("01cf"),o=e.n(r);o.a},"895f":function(a,t,e){a.exports=e.p+"img/escuela.a209914f.jpg"},9357:function(a,t,e){"use strict";var r=e("a35d"),o=e.n(r);o.a},"95b4":function(a,t,e){"use strict";var r=e("dc76"),o=e.n(r);o.a},a35d:function(a,t,e){},a8cd:function(a,t,e){},aaa3:function(a,t,e){a.exports=e.p+"img/facebook.3ae13bc8.svg"},b622:function(a,t,e){},d07d:function(a,t,e){},d3fc:function(a,t,e){"use strict";var r=e("0d0e"),o=e.n(r);o.a},d740:function(a,t,e){},dc76:function(a,t,e){},eaa5:function(a,t,e){},f8c7:function(a,t,e){}});
//# sourceMappingURL=app.ae851a54.js.map