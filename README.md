# Modelo de Loja

Projeto front-end simples de simulação de carrinho de compras, desenvolvido com HTML, CSS, JavaScript puro e Bootstrap local.

O objetivo principal é permitir ao usuário ajustar a quantidade de produtos por item, calcular o total por linha e atualizar o subtotal geral em tempo real.

## Visão Geral

- Interface com barra de navegação, tabela de produtos e rodapé com subtotal.
- Cada produto possui controles de incremento e decremento de quantidade.
- O sistema recalcula automaticamente:
  - Total por produto.
  - Subtotal da compra.
- A base visual utiliza Bootstrap 5.3.3 local, com ajustes de estilo em arquivo CSS próprio.

## Funcionalidades Implementadas

- Exibição de produtos com imagem, descrição técnica e valor unitário.
- Controles de quantidade por item com botões de mais e menos.
- Bloqueio de quantidade negativa (exibe alerta quando o usuário tenta reduzir abaixo de zero).
- Cálculo do total por produto com formatação monetária brasileira.
- Cálculo do subtotal geral somando todos os produtos.

## Estrutura do Projeto

```text
.
|-- bootstrap.css
|-- funcoes.js
|-- index.md
|-- style.css
`-- img/
    |-- Celular.jpg
    |-- notebook.jfif
    `-- tv.png
```

Observações:

- O arquivo principal da interface está nomeado como index.md, mas contém conteúdo HTML completo.
- Para uso tradicional em navegador e hospedagens estáticas, o nome mais comum seria index.html.

## Responsabilidade de Cada Arquivo

### index.md

- Contém a estrutura HTML da aplicação.
- Carrega:
  - Bootstrap local (bootstrap.css).
  - Bootstrap Icons via CDN.
  - Estilos customizados (style.css).
  - Lógica JavaScript (funcoes.js).
- Define os elementos com IDs usados nos cálculos:
  - valor_1, valor_2, valor_3
  - qtd_1, qtd_2, qtd_3
  - total_1, total_2, total_3
  - Subtotal

### funcoes.js

Implementa a lógica central:

- alterarQtd(produto, acao)
  - Atualiza quantidade do produto.
  - Impede quantidade menor que zero.
  - Recalcula total da linha.
  - Chama soma() para atualizar subtotal.

- soma()
  - Percorre os totais dos produtos (atualmente de 1 a 3).
  - Soma os valores numéricos.
  - Atualiza o subtotal formatado.

- somenteNumero(n)
  - Remove tudo que não for dígito.
  - Útil para converter texto monetário em número bruto.

- formataValor(n)
  - Formata número no padrão pt-BR e prefixa com R$.

### style.css

- Ajusta estilos do título principal (h1), ícone da sacola, rodapé e destaques de texto.

### bootstrap.css

- Biblioteca Bootstrap 5.3.3 incluída localmente.
- Não é necessário editar esse arquivo para customizações comuns do projeto.

## Como Executar

### Opção 1: Abrir diretamente no navegador

1. Abra a pasta do projeto.
2. Clique duas vezes em index.md.
3. Se o navegador não renderizar como HTML por causa da extensão .md, use a Opção 2.

### Opção 2: Renomear para index.html

1. Renomeie index.md para index.html.
2. Abra index.html no navegador.

### Opção 3: Servidor local (recomendado)

Com Python instalado:

```bash
python -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500/
```

## Fluxo de Cálculo

1. Usuário clica em + ou - de um produto.
2. A função alterarQtd identifica os elementos da linha (qtd, valor e total).
3. O valor unitário é convertido para número com somenteNumero.
4. O total da linha é recalculado: quantidade x valor unitário.
5. O valor é exibido com formataValor.
6. A função soma recalcula o subtotal geral.

## Dependências

- Bootstrap 5.3.3 (arquivo local).
- Bootstrap Icons 1.11.3 (CDN).
- Navegador moderno com suporte a JavaScript.

## Limitações Atuais

- A quantidade de produtos no subtotal está fixa no laço de 1 até 3.
- O arquivo principal com extensão .md pode gerar comportamento inconsistente entre navegadores/editores.
- Não há persistência de carrinho (ao recarregar, os dados voltam para zero).
- Não há testes automatizados.

## Melhorias Sugeridas

- Renomear index.md para index.html.
- Tornar o cálculo dinâmico para qualquer quantidade de produtos.
- Centralizar dados dos produtos em estrutura JavaScript para evitar repetição de HTML.
- Adicionar máscara/normalização monetária mais robusta para valores com centavos.
- Salvar carrinho em localStorage.
- Incluir testes de funções de cálculo.

## Exemplo de Uso

- Clique no botão + de Iphone 15 duas vezes.
- O total da linha passa para R$ 10.000.
- O subtotal no rodapé é atualizado automaticamente.

## Licença

Uso acadêmico e educacional.

Se desejar, você pode adaptar este projeto para fins comerciais após definir uma licença formal para o código e para os ativos de imagem utilizados.
