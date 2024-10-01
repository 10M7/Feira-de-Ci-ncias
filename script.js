document.addEventListener('DOMContentLoaded', () => {
    const eventos = [
        {
            nome: "Festa Junina",
            data: "15/06/2024",
            horario: "20:00",
            descricao: "Uma noite de muita diversão com comidas típicas e brincadeiras.",
            imagem: "path/to/image.jpg" 
        },
        {
            nome: "Palestra Sicredi",
            data: "20/08/2024",
            horario: "19:30",
            descricao: "Palestra com convidados especiais sobre a econômia",
            imagem: "path/to/image.jpg"
        }
    ];

    const listaEventos = document.getElementById('listaEventos');

    eventos.forEach(evento => {
        const divEvento = document.createElement('div');
        divEvento.classList.add('evento');
        divEvento.innerHTML = `
            <h3>${evento.nome}</h3>
            <p><strong>Data:</strong> ${evento.data} - <strong>Horário:</strong> ${evento.horario}</p>
            <p>${evento.descricao}</p>
            ${evento.imagem ? `<img src="${evento.imagem}" alt="${evento.nome}" style="max-width: 100%;">` : ''}
        `;
        listaEventos.appendChild(divEvento);
    });

    document.getElementById('formContato').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada! Agradecemos o seu contato.');
        this.reset();
    });
});
