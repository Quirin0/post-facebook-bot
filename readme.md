<div align="center">
<img height="180" src="https://media.discordapp.net/attachments/570478999952687114/929486707026456586/only__1_-removebg-preview.png">
</div>

##

### Bot para Facebook version 0.1

#### Como usar
- Possuir Node JS instalado em sua máquina.

```bash
> git clone https://github.com/Quirin0/facebook-bot
```

No arquivo **app.js** modificar as seguintes linhas de código:

```javascript
 await page.type('#email', 'YOUR EMAIL HERE'); // here you put your email
 await page.type('#pass', 'YOUR PASSWORD'); // here you put your password
```

e adicionar as frases que deseja que sejam postadas:

```javascript
 let sentenceList = [
    `Adicione a frase aqui`,
    `Adicione outra frase`
 ];
```

#### Dependências
```bash
> npm install puppeteer
```

#### Execução
```bash
> node app.js
```
