window.addEventListener('load', (event) => {
    const opt = {
        data() {
            return {
                posts: [
                    { id:0, title:'たいとる１' },
                    { id:1, title:'たいとる２' },
                    { id:2, title:'たいとる３' },
                ],
                postFontSize: 1,
            };
        },
        methods: {
            onEnlargeText(amount) {
                this.postFontSize += amount;
            }
        }
    };
    const app = Vue.createApp(opt);
    app.component('blog-post', {
        props: ['title'],
        emits: ['enlargeText'],
        template: `<h6>{{title}}</h6><button @click="$emit('enlargeText', 0.1)">Enlarge text</button>`,
    });
    app.mount('#app');
});
