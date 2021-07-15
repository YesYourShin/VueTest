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
        age:20
    }
});