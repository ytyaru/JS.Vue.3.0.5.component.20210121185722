window.addEventListener('load', (event) => {
    const opt = {
        data() {
            return {
                posts: [
                    { id:0, title:'たいとる１' },
                    { id:1, title:'たいとる２' },
                    { id:2, title:'たいとる３' },
                ],
            };
        }
    };
    const app = Vue.createApp(opt);
    app.component('blog-post', {
        props: ['title'],
        template: `<h6>{{title}}</h6>`,
    });
    app.mount('#app');
});
