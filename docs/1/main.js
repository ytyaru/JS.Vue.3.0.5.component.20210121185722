window.addEventListener('load', (event) => {
    // local component
    const ButtonComponent = {
        data() {
            return {
                count: 0
            }
        },
        template: `
            <button @click="count++">
              You clicked me {{ count }} times.
            </button>`
    };
    const opt = {
        components: {
            'button-counter': ButtonComponent,
        }
    }
    const app = Vue.createApp(opt);
    app.mount('#app');

});
