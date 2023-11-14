//import styles from './Post.module.css'
import PostModelo from "componets/PostModelo/PostModelo"
import posts from "json/posts.json"
import { Route, Routes, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import './post.css'
import NotFound from "pages/NotFound/NotFound"
import PaginaPadrao from "componets/PaginaPadrao/PaginaPadrao"



export default function Post() {
  const parametros = useParams()
  const postId = parametros.id

  const post = posts.find((post) => {
    return post.id === Number(postId)
  })

  if (!post) {
    return <NotFound/>
  }

  return(
    <Routes>
      <Route path="*" element={<PaginaPadrao/>}>
        <Route index element={
          <PostModelo
            fotoCapa={`/assets/posts/${postId}/capa.png`}
            titulo={post.titulo}
          >
            <div class="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>
          </PostModelo>
        }/>
      </Route>
    </Routes>
  )
}