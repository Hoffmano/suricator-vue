<template>
    <div class="hello">
        <h1>Hello world</h1>
        <h1>Test</h1>
        <h1>{{ title }}</h1>
        <button type="button" class="btn btn-primary btn-lg">
            Large button
        </button>
    </div>
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
    name: "HelloWorld",
    data: () => {
        return {
            title: "",
        };
    },
    mounted() {
        axios.get("http://localhost:3333").then((response) => {
            this.$store.commit("setTitle", response.data.title);
        });
    },
    computed:{
        getTitle () {
            return this.$store.state.title
        }
    },
    watch: {
        getTitle(){
            this.title = this.$store.getters.getTitle
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
