# DesafioAxios
Este projeto é uma aplicação React com TypeScript que consome a API pública JSONPlaceholder para exibir uma lista de posts em um layout limpo e responsivo. A aplicação demonstra conceitos fundamentais como consumo de APIs, gerenciamento de estado, tratamento de erros e renderização condicional.

Como Executar o Projeto:
Para executar este projeto em sua máquina local, você precisará ter o Node.js instalado (versão 16 ou superior) e um gerenciador de pacotes como npm ou yarn. Primeiro, clone o repositório (se aplicável) usando o comando git clone seguido da URL do repositório. Navegue até o diretório do projeto e instale as dependências executando npm install ou yarn install. Para iniciar a aplicação em modo de desenvolvimento, utilize npm run dev ou yarn dev. A aplicação estará disponível no seu navegador através do endereço http://localhost:3000.

Funcionamento do Código:
O componente principal PostsList.tsx é responsável por gerenciar toda a lógica de exibição dos posts. Ele utiliza três estados principais: posts para armazenar os dados recebidos da API, loading para controlar o estado de carregamento e error para tratar possíveis erros na requisição.

A comunicação com a API é feita através do Axios, configurado no arquivo api.ts. Esta configuração define a URL base da API (https://jsonplaceholder.typicode.com/posts), um timeout de 10 segundos e os headers necessários para a requisição. O hook useEffect é utilizado para disparar a chamada à API assim que o componente é montado, garantindo que os dados sejam carregados automaticamente.

Durante o carregamento, é exibido um indicador visual para o usuário. Caso ocorra algum erro na requisição, uma mensagem clara é apresentada junto com um botão para tentar recarregar os dados. Quando bem-sucedida, a requisição retorna uma lista de posts que são exibidos em cards estilizados com Tailwind CSS, contendo título, conteúdo e informações adicionais como ID do post e ID do usuário.
