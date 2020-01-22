export default {
    namespaced: true,

    state: {
        items: [],
        route: null,
    },

    getters: {
        routes: state => state.items,
        route: state => state.route,
        lastAttempt: state => type => state.route.attempts.find(item => item.type.name == type)
    },

    mutations: {
        setItems(state, items) {
            state.items = items
        },
        setRoute(state, route) {
            state.route = route
        },
    },

    actions: {
        async get({commit}) {
            const {data: {data}} = await this.axios.get('route')
            commit('setItems', data)
        },

        async info({commit}, id) {
            const {data: {data}} = await this.axios.get('route/' + id)
            commit('setRoute', data)
        },

        async addAttempt({commit}, {route, type}) {
            return await this.axios.post('attempt/' + route, {
                type
            })
        },

        async removeLastAttempt({commit, getters}, type) {
            const attempt = getters.lastAttempt(type)
            return await this.axios.delete('attempt/' + attempt.id)
        },
    }
}