Vue.component('product', {
    template:`<div class="product">
                <div class="product-image">
                    <img v-bind:src="image">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of stock</p>
                    <ul>
                        <li v-for="detail in details">{{detail}}</li>
                    </ul>
                    <div v-for="(variant, index) in variants" 
                        :key="variant.variantId"
                        class="color-box"
                        :style="{backgroundColor: variant.variantColor}"
                        @mouseover="updateProduct(index)">
                    </div>

                    <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{disabledButton:!inStock}">Add to Cart</button>
                </div>
            </div>`,
        data: function(){
            return {
                brand:'Vue',
                product:'Socks',
                // image:'./assets/images/socks_green.jpg',
                selectedVariant:0,
                inStock:true,
                // inventory:100
                details:['80% cotton', '20% polyester', 'Gender-neutral'],
                variants:[
                    {
                        variantId:2334,
                        variantColor:'green',
                        variantImage:'./assets/images/socks_green.jpg',
                        variantQuantity:10
                    },
                    {
                        variantId:2335,
                        variantColor:'blue',
                        variantImage:'./assets/images/socks_blue.jpg',
                        variantQuantity:0
                    }
                ],

            }
        },
        methods:{
            addToCart: function() {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
            },
            updateProduct(index) {
                this.selectedVariant = index
            }
        },
        computed:{
            title(){
                return this.brand + ' ' + this.product
            },
            image(){
                return this.variants[this.selectedVariant].variantImage
            },
            inStock(){
                return this.variants[this.selectedVariant].variantQuantity
            }
        }
});

Vue.component('comments', {
    template: `<div>
    <input type="text" v-model="user">
    <input type="text" v-model="comment">
    <button @click="save">Save</button><br>
    <ul>
        <li v-for="msg in messages">
            <p>{{ msg.user }}: {{ msg.comment }}</p>
        </li>        
    </ul>
    <div>`,
    data(){
        return { 
            user:null,
            comment:null,
            messages:[]
        }
    },
    methods:{
        save(){
            const message={
                user:this.user,
                comment:this.comment
            };

            this.messages.unshift(message);
            this.user=null
            this.comment=null
        }
    }
});

let app = new Vue({
    el:'#app',
    data:{
        cart:[]
    },
    methods:{
        addToCart(id){
            this.cart.push(id)
        }
    }
});
