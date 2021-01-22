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
        }
    };
    const app = Vue.createApp(opt);
    // https://v3.ja.vuejs.org/guide/component-basics.html#%E5%AD%90%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%82%92%E8%B3%BC%E8%AA%AD%E3%81%99%E3%82%8B
    app.component('blog-post', {
        props: ['title'],
        emits: ['enlargeText'],
//        emits: ['enlarge-text'],
        template: `<h6>{{title}}</h6><button @click="$emit('enlargeText')">Enlarge text</button>`,
//        template: `<h6>{{title}}</h6><button @click="$emit('enlargeText')">Enlarge</button>`,
    });
    app.mount('#app');
});
