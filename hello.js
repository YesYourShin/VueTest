let title = new Vue({
    el:'#title',
    data: {
        message: {
            greetings:'Hello',
            name:'user!'
        }
        
    }
});

Vue.component('hello', {
    props:['name'],
    template:'<p>{{message}}</p>',
    data: function(){
        return { message: 'hello!, ' + this.name }
    }
})

Vue.component('add', {
    template:'<button @click="add">{{count}}</button>',
    data(){
        return {count:1}
    },
    methods:{
        add(){
            this.count += 1;
            this.$emit('event-add', 1);
        }
    }
})

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
        users:[ {name:'User'}, {name:'Admin'} ],
        comment:'',
        value:false,
        values:[],
        value2:'hello',
        value3:'hello',
        user_id:'user123',
        user_grade:'Silver',
        totalCount:0
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
        },
        updateTotal(count){
            this.totalCount += count
        }
    },
    computed:{
        user_info:function() {
            return this.user_id+'('+this.user_grade+')'
        },
        age_message:function() {
            let str='Adult'
            if(this.age < 20) str ='Not Adult'
            return str
        }
    },
    components:{
        'local-hello':{
            template:'<p>This is local component<p>'
        }
    },
    

    
});