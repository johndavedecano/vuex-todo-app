<template>
    <div id="app">
        <div id="todo-app">
            <form
                class="todo-app__form"
                method="POST"
                @submit.prevent="handleSubmit"
            >
                <input v-model="text" type="text" placeholder="Task name" />
                <button type="submit">Submit</button>
            </form>
            <ul class="todo-app__lists">
                <li
                    class="todo-app__lists__item"
                    v-for="item in items"
                    v-bind:key="item.id"
                    @click="removeItem(item.id)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'app',
    data: () => ({
        text: '',
        items: [],
    }),
    methods: {
        handleSubmit() {
            if (this.text !== '') {
                this.items.push({
                    id: Math.random(),
                    name: this.text,
                })
                this.text = ''
            }
        },
        removeItem(itemId) {
            this.items = this.items.filter(i => i.id !== itemId)
        },
    },
}
</script>
<style>
#todo-app {
    display: flex;
    flex-direction: column;
    padding: 15px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    font-size: 14px;
}

.todo-app__form {
    display: flex;
    padding: 15px;
}

.todo-app__form input {
    flex: 1;
    margin-right: 10px;
    height: 44px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    border: solid 1px #42b983;
}

.todo-app__form input:focus {
    outline: solid 3px #42b983;
}

.todo-app__form button {
    height: 50px;
    width: 100px;
    padding: 5px;
    font-size: 14px;
    border: solid 1px #42b983;
    color: white;
    background: #42b983;
}

.todo-app__lists {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding: 15px;
}

.todo-app__lists__item {
    display: flex;
    height: 50px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #42b983;
    color: #42b983;
    margin-bottom: 15px;
    cursor: pointer;
    transition: background-color 1s ease;
}

.todo-app__lists__item:hover {
    color: white;
    background-color: #42b983;
}
</style>
