import styles from './PostModelo.module.css';

export default function PostModelo({ fotoCapa, titulo, children }) {
  return (
    <article className={styles.PostModeloContainer}>
      <div className={styles.ftoCapa} style={{backgroundImage: `url(${fotoCapa})`}} />
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.PostContainer}>{children}</div>
    </article>
  )
}
