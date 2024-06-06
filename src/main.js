const template = `
    <div>
        <h1>{{message}}</h1>
    </div>
`
const { createApp, ref } = Vue

createApp({
    template: template,
    setup() {
    const message = ref('Hello vue!')
    return {
        message
    }
    }
}).mount('#app')