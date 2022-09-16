export const state = () => ({
    produtos: [],
    filtro: ""
})


export const mutations = {
    adicionar(state, payload) {

        state.produtos.push(payload)
        sessionStorage.setItem('produtosSalvos', JSON.stringify(state.produtos));
    },
    adicionarSalvos(state, payload) {

        state.produtos = payload

    },
    remover(state, payload) {

        state.produtos.splice(payload, 1)
        sessionStorage.setItem('produtosSalvos', JSON.stringify(state.produtos));
    },
    mudarFiltro(state, payload) {
        state.filtro = payload

    }
}




export const actions = {
    adicionarProduto: ({ commit }, { produto }) => {

        commit("adicionar", produto);
    },
    removerProduto: ({ commit }, { index }) => {
        commit("remover", index);
    },
    adicionarProdutosSalvos: ({ commit }, { produtos }) => {

        commit("adicionarSalvos", produtos);
    },
    setFiltro: ({ commit }, { filtro }) => {

        commit("mudarFiltro", filtro);
    },
}
