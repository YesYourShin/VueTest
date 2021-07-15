let app = new Vue({
    el:'#title',
    data: {
        message: {
            greetings:'Hello',
            name:'user!'
        }
        
    }
});

let address = new Vue({
    el:'#app',
    data: {
        address:'https://www.naver.com'
    }
});