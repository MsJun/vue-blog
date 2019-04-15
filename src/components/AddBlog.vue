<template>
  <div id="app-blog">
    <h2>添加博客</h2>
    <form v-if="!summited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required/>
        
        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div id="checkboxes">
            <label>Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.categories"/>
            <label>Node.js</label>
            <input type="checkbox" value="Node.js"  v-model="blog.categories"/>
            <label>React.js</label>
            <input type="checkbox" value="React.js"  v-model="blog.categories"/>
            <label>Angular4.js</label>
            <input type="checkbox" value="Angular4.js"  v-model="blog.categories"/>
        </div>
        <label>作者：</label>
        <select v-model="blog.author">
            <option v-for="author in authors">{{author}}</option>
        </select>
        <button @click.prevent="clickpost">添加博客</button>
    </form>
    
    <div v-if="summited">
        <h3>您的博客发布成功！</h3>
    </div>

    <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题:{{blog.title}}</p>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
        <p>博客分类</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
    name:'app-blog',
    data(){
        return{
            blog:{
                title:'',
                content:'',
                categories:[],
                author:''
            },
            authors:["hemiah","Henry","liming"],
            summited:false
        }
    },
    methods:{
        clickpost(){
            //this.$http.post("https://appvue-8ffa0.firebaseio.com/posts.json",this.blog)
            axios.post("/posts.json",this.blog)
            .then((data) => {
                //console.log(data)
                this.summited = true
            })
        }
    }
}
</script>

<style scoped>
#app-blog *{
    box-sizing: border-box;
}
#app-blog{
    margin:20px auto;
    max-width: 600px;
    padding:20px;
}
label{
    display: block;
    margin:20px 0 0px;
}
input[type="text"],textarea,select{
    display:block;
    width:100%;
    padding:8px;
}
textarea{
    height: 200px;
}
#checkboxes label{
    display:inline-block;
    margin-top: 0;
}
#checkboxes input{
    display:inline-block;
    margin-right: 10px;
}
button{
    display:block;
    margin:20px 0;
    background-color: crimson;
    color:#fff;
    border:0;
    padding:14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
#preview{
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
}
h3{
    margin-top: 10px;
}
</style>
