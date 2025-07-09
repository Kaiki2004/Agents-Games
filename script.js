const apiKey = document.getElementById('apiKey');

const jogo = document.getElementById('jogo');

const pergunta = document.getElementById('pergunta');

const button = document.getElementById('enviarPergunta');

const form = document.getElementById('form');

const aiResponse = document.getElementById('aiResponse');


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const apiKeyValue = apiKey.value;
    const jogoValue = jogo.value;
    const perguntaValue = pergunta.value;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKeyValue}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Jogo: ${jogoValue}. Pergunta: ${perguntaValue}`
                }
            ]
        })
    });

    const data = await response.json();

    const responseContent = document.createElement('div');
    responseContent.classList.add('response-content');
    responseContent.textContent = data.choices[0].message.content;

    aiResponse.appendChild(responseContent);
});