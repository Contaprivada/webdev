// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Função para ordenar a tabela
    function sortTable(n) {
        const table = document.getElementById("schoolTable");
        if (!table) return; // Verifica se a tabela existe

        let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        switching = true;
        dir = "asc";
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }

    // Função para pesquisar na tabela
    function searchTable() {
        const input = document.getElementById("searchInput");
        if (!input) return; // Verifica se o campo de pesquisa existe

        const filter = input.value.toLowerCase();
        const table = document.getElementById("schoolTable");
        if (!table) return; // Verifica se a tabela existe

        const tr = table.getElementsByTagName("tr");
        for (let i = 1; i < tr.length - 1; i++) {
            let found = false;
            const td = tr[i].getElementsByTagName("td");
            for (let j = 0; j < td.length; j++) {
                if (td[j]) {
                    if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
                        found = true;
                        break;
                    }
                }
            }
            if (found) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    // Função para abrir página de regras da tabela escolar
    function openRulesPage() {
        // Aqui você pode redirecionar para uma página específica com as regras da tabela escolar
        window.location.href = "regras.html";
    }

    // Função para atualizar data e hora na página
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString("pt-BR");
        const dateTimeElement = document.getElementById("dateTime");
        if (dateTimeElement) { // Verifica se o elemento de data/hora existe
            dateTimeElement.textContent = dateTimeString;
        }
    }

    // Inicialização da função de atualização de data e hora
    updateDateTime();
    setInterval(updateDateTime, 60000); // Atualiza a cada minuto (60000 milissegundos)
});