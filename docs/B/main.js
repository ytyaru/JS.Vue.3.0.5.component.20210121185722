window.addEventListener('load', (event) => {
    const app = Vue.createApp({});
    app.component('alert-box', {
        template: `
            <div style="background:#FFCCCC;">
                <strong title="警告">⚠ </strong>
                <slot></slot>
            </div>
        `,
    });
    app.mount('#app');
});
