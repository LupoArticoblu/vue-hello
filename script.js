const { createApp } = Vue;

createApp({
    data(){
        return {
            messaggio : "Hello Vue",
            sottolinea : "sub",
        }
    }
}).mount('#app')
