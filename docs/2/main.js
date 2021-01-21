window.addEventListener('load', (event) => {
    // set local component
    const opt = {
        components: {
            'button-counter': ButtonComponent,
        }
    }
    const app = Vue.createApp(opt);
    app.mount('#app');

});
