import SobreMim from "./pages/SobreMim/SobreMim"
import Inicio from "./pages/Inicio/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./componets/Menu/Menu"
import Rodape from "componets/Rodape/Rodape"
import PaginaPadrao from "componets/PaginaPadrao/PaginaPadrao"
import Post from "pages/Post/Post"
import NotFound from "pages/NotFound/NotFound"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio/>}/>
          <Route path='sobremim' element={<SobreMim/>}/>
        </Route>
        
        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
