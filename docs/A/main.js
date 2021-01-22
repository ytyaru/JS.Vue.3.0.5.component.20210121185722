window.addEventListener('load', (event) => {
    const opt = {
        setup() {
            const searchText = Vue.ref('some.');
            return {
                searchText,
            }
        },
    };
    const app = Vue.createApp(opt);
    app.component('custom-input', {
        props: ['modelValue'],
        template: `
            <input v-model="value">
            <p>{{modelValue}}</p>
        `,
        computed: {
            value: {
                get() {
                    return this.modelValue;
                },
                set(value) {
                    this.$emit('update:modelValue', value);
                }
            },
        }
    });
    app.mount('#app');
});
