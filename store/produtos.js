export const state = () => ({
    produtos: []
})


export const mutations = {
    adicionar(state, payload) {

        state.produtos.push(payload)
    },
    remover(state, payload) {
        state.produtos.splice(payload, 1)
    }
}


export const actions = {
    adicionarProduto: ({ commit }, { produto }) => {
        commit("adicionar", produto);
    },
    removerProduto: ({ commit }, { index }) => {
        commit("remover", index);
    },
}
