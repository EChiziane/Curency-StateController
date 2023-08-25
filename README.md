Nome do Projeto: Currency Converter System(CCS)

Descrição do projecto:

O Que é:  O projeto consiste na criação de um eficiente sistema de conversão de moedas, que operacionaliza uma API externa para realizar conversões monetárias. A plataforma permitirá aos usuários inserir valores em uma moeda de origem e selecionar a moeda de destino para a qual desejam converter. Com base nas taxas de câmbio atualizadas fornecidas pela API, o sistema executará as conversões de forma precisa e instantânea. Além disso, os usuários terão a opção de definir critérios personalizados, como datas específicas para conversões históricas ou a aplicação de taxas adicionais. A interface amigável do sistema garantirá uma experiência intuitiva, tornando a conversão de moedas rápida e acessível a todos os usuários.
O que Faz: Esse sistema permite aos usuários converter moedas de forma simples e rápida. Os usuários podem inserir o valor em uma moeda de origem e selecionar a moeda de destino para a conversão. O sistema consome dados de uma API para obter as taxas de câmbio mais recentes e, em seguida, calcula e exibe o valor convertido de acordo com os critérios escolhidos. Além disso, os usuários podem personalizar ainda mais a conversão, ajustando critérios como datas históricas ou taxas adicionais, proporcionando flexibilidade na obtenção dos resultados desejados. A interface intuitiva torna todo o processo acessível, mesmo para aqueles com pouca familiaridade em finanças ou tecnologia.

Como Fiz: Para alcançar as funcionalidades mencionadas na descrição, a aplicação utilizará uma combinação de tecnologias e abordagens de desenvolvimento. Vamos destacar algumas etapas que podem ser adotadas para implementar as características do sistema:
1. Banco de Dados: A aplicação utilizará um banco de dados SQL para armazenar todas as informações relevantes sobre o fornecimento de cada entrega. Serão criadas tabelas para armazenar dados sobre indivíduos, fornecedores, destinos e informações específicas de cada entrega, como a quantidade de material transportado, a data e outras informações pertinentes.
2. Backend: O desenvolvimento do backend será feito utilizando ASP.NET C#. Ele será responsável por processar as requisições do usuário, acessar o banco de dados para ler e gravar informações e realizar a lógica de negócio do sistema. O backend também poderá conter a lógica para criar gráficos informativos e gerar relatórios.
3. Frontend: A interface do usuário será criada usando HTML, CSS e TypeScript para fornecer uma experiência interativa e responsiva. O frontend permitirá aos usuários visualizar e inserir informações sobre as entregas de materiais, bem como a geração e visualização dos gráficos e relatórios.
4. Gráficos Informativos: A aplicação utilizará bibliotecas de gráficos, como Chart.js ou D3.js, para criar gráficos interativos e informativos. Os dados obtidos do banco de dados serão usados para gerar visualizações gráficas que mostram informações como a quantidade total de material entregue por mês, a distribuição dos fornecedores e outros dados relevantes.
5.Relatórios: A geração de relatórios será feita no backend, utilizando bibliotecas ou frameworks que suportem a criação de documentos em PDF, como o iTextSharp. Os relatórios podem conter informações consolidadas sobre as entregas, fornecedores mais frequentes, desempenho por período e outros dados importantes para a tomada de decisões.
6. Autenticação e Autorização: Para garantir a segurança dos dados e restringir o acesso somente a usuários autorizados, a aplicação implementará um sistema de autenticação e autorização. Isso pode ser realizado usando ASP.NET Identity, que permite gerenciar contas de usuários e permissões.

O que usei:
Para desenvolver esse aplicativo usei as seguintes ferramentas 
Linguagem:C#, typescript
Framework: Asp.Net Core 6, Angular;
Versionamento: Git & GitHub;
DataBase: PostGresql;
Como Usar 
Baixe e instale .net SDK 6;
Baixe e instale VsCode, Visual Studio ou qualquer outra IDE;


# CCS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
