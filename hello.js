let title = new Vue({
    el:'#title',
    data: {
        message: {
            greetings:'Hello',
            name:'user!'
        }
        
    }
});

let app = new Vue({
    el:'#app',
    data: {
        address:'https://www.naver.com',
        age:20,
        todos:[
            {text:'JavaScript 배우기'},
            {text:'Vue 배우기'},
            {text:'멋진 것 만들기'}
        ],
        user:{
            userid:'user123',
            name:'June vue',
            email:'user123@gmail.com'
        },
        counter:0,
        message:'Select a user',
        users:[ {name:'User'}, {name:'Admin'} ]
    },
    methods:{
        addCounter:function(){
            this.counter += 1
        },
        subCounter:function(){
            this.counter -= 1
        },
        sayHi(name){
            this.message = 'Hi, ' + name
        }
    }
});