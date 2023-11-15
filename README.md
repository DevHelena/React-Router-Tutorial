# Projeto Olá Mundo
Um projeto feito especialmente para demonstrar e praticar as minhas habilidades em gerenciamento de rotas com o React Router Dom

## Rode o projeto
- Este projeto foi desenvolvido em cima do _node.js_ na versão 18.16.0, então recomendo que, para uma boa experiência, tenha instalado em sua máquina esta versão ou superior!  
**Node.js** Instalado? Vamos prosseguir...
- Com o terminal do projeto aberto, instale as dependências com o comando `npm install`
- Com as dependências já instaladas, basta rodar o projeto com o comando `npm start`
- Agora, ao abrir no seu navegador a URL http://localhost:3000/ você pode navegar pelo projeto **Olá Mundo**

## Sobre o React Router Dom
Aqui utilizei a **versão 6** do _React Router Dom_
### Instalação
Para instalar o _React Router Dom_ no seu projeto _React_ você pode usar o comando `npm install react-router-dom@6`

### Primeiros passos
- Em termos de arquitetura, recomenda-se que seja usado um diretório especialmente para o gerenciamento das rotas, neste projeto você encontrará `routes.js`, e é este diretório que será renderizado no seu `index.js`
- No seu diretório de rotas, importe as seguintes instâncias: `import { BrowserRouter, Routes, Route } from "react-router-dom"`, elas fazem parte da estrutura da biblioteca. No seu Componente, ficará assim:
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
```

### Adicionando rotas
Para adicionar uma rota basta adicionar o compotente `<Route path='sobreMim' element={<SobreMim/>} />`
  - No atributo _path_ é passada uma _string_ que será a sua rota, portanto você pode acessar http://localhost:3000/sobreMim, e lá será renderizado o componente passado para _element_, que nesse caso foi `<SobreMim/>`
  - Não se esqueça de importar o componente `<SobreMim/>` para o diretório `routes.js`  
Ficará assim:
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SobreMim from "pages/SobreMim/SobreMim"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='sobreMim' element={<SobreMim/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
```
### Rota Mãe
A rota mãe é a primeira rota da qual as outras se ramificam. No passo anterior criamos a rota para Sobre Mim, certo? Mas geralmente, a primeira tela a ser acessada pelo usuário é a tela Home, que é a tela Mãe, ou seja, a partir dela navegaremos pelas outras.
Para criar essa rota, basta preencher _path_ com "/":  
`<Route path='/' element={<Home/>} />`

### Not Found
Quando os usuários navegam para um endereço que não corresponde a nenhuma das rotas definidas, é uma boa prática mostrar uma página indicando que a rota solicitada não foi encontrada. Isso melhora a experiência do usuário ao fornecer feedback claro de que o caminho que tentaram acessar não existe.  
No React Router Dom, podemos tratar esses casos usando uma rota com o caminho *. Esse caminho atua como um coringa, correspondendo a qualquer URL que não se encaixe nas rotas definidas anteriormente. Para implementar isso, criamos uma rota e atribuímos a ela um componente NotFound, que pode ser uma página personalizada informando ao usuário que a página não foi encontrada.

```jsx
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='sobreMim' element={<SobreMim/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
```
Neste exemplo, se um usuário tentar acessar uma rota que não seja "/", "/sobreMim" ou qualquer outra rota definida, ele será redirecionado para a página NotFound. Isso ajuda a manter uma navegação clara e estruturada em sua aplicação.

### Trabalhando com Links
Vamos ver como acessar essas rotas por dentro do código:
  - Nesse caso, imagine que na rota "/" (rota da tela Home) você deseja por um link que referencie a rota /sobreMim. Isso é bem simples:
  - Importe _Link_ no seu componente `<Home />`: `import { Link } from 'react-router-dom'`
  - Englobe com `<Link>` o seu botão que irá levar à rota desejada, e adicione o parametro "to", semelhante ao "path" visto anteriormente, e preencha-o com um _string_ referenciando a rota.

```jsx
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Link to="/sobreMim">
      <div>
        Sobre Mim
      </div>
    </Link>
  )
}
```

### Layout Persistente
Uma prática comum e eficiente em aplicações web é ter elementos como cabeçalho (Header) e rodapé (Footer) que se mantêm consistentes em todas as páginas. Com o React Router, podemos facilmente implementar esse padrão de design, promovendo tanto a reutilização de código quanto a melhoria na performance da aplicação.

Benefícios do Layout Persistente
- Redução da Repetição de Código: Ao usar um layout persistente, você evita a necessidade de incluir o Header e o Footer em cada componente de página individualmente. Isso simplifica a manutenção, já que qualquer alteração nesses componentes é refletida em toda a aplicação.
- Melhoria na Performance: Como o Header e o Footer são carregados uma única vez e permanecem presentes durante a navegação entre rotas, a aplicação se beneficia de uma melhor performance. Isso é especialmente notável em Single Page Applications (SPAs), onde a fluidez e a rapidez das transições de página são essenciais.

Implementação no React Router
A implementação dessa funcionalidade é direta. Envolve-se o componente <Routes> com Header e Footer dentro do <BrowserRouter>. Dessa forma, eles são renderizados em todas as rotas definidas.  
Veja como fica:

```jsx
function AppRoutes() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='sobreMim' element={<SobreMim/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}
```
