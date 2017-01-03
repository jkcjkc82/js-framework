<template>
    <div class="column">
        <h3>Detail</h3>
        <a v-if="access_token" class="button" v-on:click="logout">Logout</a>
        <a v-if="!access_token" class="button" v-on:click="login">Login</a>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {stringify} from 'qs'

export default {
    name: 'detail',
    computed: mapGetters({
        access_token: 'getAccessToken'
    }),
    methods: {
        login: function () {
            const para = {
                response_type: 'token',
                client_id: 'x2adb4mzqfp868e',
                redirect_uri: 'http://localhost:8080'
            }
            window.location.href =
                `https://www.dropbox.com/1/oauth2/authorize?${stringify(para)}`
        },
        logout: function () {
            this.$store.dispatch('saveAccessToken', '')
        }
    }
}
</script>