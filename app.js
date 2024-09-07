function pesquisar() {

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Exibe a seção selecionada no console para verificação (opcional)
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa se for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>nada foi encontrado.voce precisa digitar o nome de um atleta ou esprorte </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()


        //se o titulo included campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">
              ${dado.descricao}
            </p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
        }

        // Constrói o HTML para cada item do resultado da pesquisa

    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}