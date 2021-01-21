window.addEventListener('load', (event) => {
    const app = Vue.createApp({});
    app.component('button-counter', {
      data() {
        return {
          count: 0
        }
      },
      template: `
        <button @click="count++">
          You clicked me {{ count }} times.
        </button>`
    });
    app.mount('#app');
});
