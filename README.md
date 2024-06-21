# Projeto de Estudos de JavaScript

Bem-vindo ao meu projeto de estudos de JavaScript! Estou atualmente realizando um curso que está me ajudando a compreender melhor esse maravilhoso mundo da programação. Neste repositório, você encontrará diversos exemplos práticos que estou desenvolvendo enquanto aprendo sobre manipulação de arquivos e diretórios com Node.js.

## Descrição

Este projeto contém três scripts principais que demonstram diferentes operações de manipulação de arquivos e diretórios. Abaixo está uma descrição de cada um deles e dos conceitos que estou aprendendo:

### 1. Manipulação Síncrona de Arquivos (`sync-file-operations.js`)

**Conceitos Aprendidos:**
- Leitura de arquivos com `fs.readFileSync`.
- Escrita de arquivos com `fs.writeFileSync`.
- Cópia de arquivos com `fs.copyFileSync`.
- Renomeação de arquivos com `fs.renameSync`.
- Exclusão de arquivos com `fs.unlinkSync`.

**Operações Realizadas:**
- Lê o conteúdo de um arquivo (`input.txt`).
- Cria um novo arquivo (`output.txt`) e escreve um texto nele.
- Copia o arquivo `input.txt` para `input-copy.txt`.
- Renomeia o arquivo `input-copy.txt` para `input-rename.txt`.
- Após 3 segundos, deleta o arquivo `input-rename.txt`.

### 2. Gerador de Design Tokens em CSS (`design-token-generator.js`)

**Conceitos Aprendidos:**
- Leitura de arquivos JSON com `fs.readFile`.
- Processamento de dados JSON.
- Escrita de arquivos CSS com `fs.writeFile`.

**Operações Realizadas:**
- Lê o conteúdo de um arquivo JSON (`dtcg.json`).
- Processa os tokens de design do JSON e os converte em variáveis CSS.
- Escreve as variáveis CSS em um arquivo (`design-token.css`).

### 3. Manipulação de Diretórios e Arquivos (`directory-operations.js`)

**Conceitos Aprendidos:**
- Criação de diretórios com `fs.mkdir`.
- Renomeação de diretórios com `fs.rename`.
- Movimentação de diretórios.
- Cópia recursiva de diretórios com `fs.cp`.
- Exclusão de diretórios e seus conteúdos com `fs.rmdir`.

**Operações Realizadas:**
- Cria um diretório `test_foder`.
- Renomeia o diretório `test_foder` para `renamed_folder`.
- Move o diretório `renamed_folder` para dentro de `parent_folder`.
- Copia o diretório `parent_folder` para `copied_folder`.
- Após 3 segundos, deleta o diretório `copied_folder`.
- Faz uma cópia do diretório `parent_folder` para `backup`.

## Como Executar os Scripts

### Pré-requisitos

- Node.js instalado (versão 14 ou superior).

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
