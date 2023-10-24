
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento de clique a cada span de avaliação
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`rating-${i}`).addEventListener('click', function () {
            // Remove a classe 'selected' de todos os spans de avaliação
            for (let j = 1; j <= 5; j++) {
                document.getElementById(`rating-${j}`).classList.remove('selected');
            }

            // Adiciona a classe 'selected' ao span de avaliação clicado
            this.classList.add('selected');
        });
    }

    // Adiciona um evento de clique ao botão submitBtn
    document.getElementById('submitBtn').addEventListener('click', function () {
        // Verifica se algum ponto de avaliação está selecionado
        const selectedRating = document.querySelector('.rating .selected');

        if (selectedRating) {
            // Copia o valor para a caixa de trás
            document.getElementById('rating-point').innerText = selectedRating.innerText;

            // Alterna a visibilidade entre .fc e .bc
            document.querySelector('.fc').style.display = 'none';
            document.querySelector('.bc').style.display = 'flex';
        }
    });
});
