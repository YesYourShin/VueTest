
Vue.component('add', {
    template:'<button @click="add">{{save}}</button>',
    data(){
        return {save:'save'}
    },
    methods:{
        add(){
            this.count += 1;
            this.$emit('save', save);
        }
    }
})

let app = new Vue({
    el:'#app',
    data: {
        user:{
            userid:'user123',
            name:'June vue',
            email:'user123@gmail.com'
        },

        totalCount:0
    },
    methods:{
        updateTotal(count){
            this.totalCount += count
        }
    },

    

    
});