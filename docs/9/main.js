window.addEventListener('load', (event) => {
    const opt = {
        setup() {
            const searchText = Vue.ref('some.');
            return {
                searchText,
            }
        }
    };
    const app = Vue.createApp(opt);
    app.component('custom-input', {
        props: ['modelValue'],
        template: `
            <input
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            >
            <p>{{modelValue}}</p>
        `
    });
    app.mount('#app');
});
