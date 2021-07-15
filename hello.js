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
    }
});