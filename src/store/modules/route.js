export default {
    namespaced: true,

    state: {
        items: [],
    },

    getters: {
        routes: state => state.items
    },

    mutations: {
        setItems(state, items) {
            state.items = items
        }
    },

    actions: {
        async get({commit}) {
            const {data: {data}} = await this.axios.get('route')
            commit('setItems', data)
        }
    }
}