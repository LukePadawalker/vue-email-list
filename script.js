console.log("Vue Ok", Vue)

const { createApp } = Vue;

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const app = createApp({
    data: () => ({
        mail: '',

    }),

    created() {
        axios.get(endpoint).then(res => {
            this.mail = res.data.response
        })
    }

})


app.mount("#root");