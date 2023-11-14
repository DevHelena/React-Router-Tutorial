import styles from './BotaoPrincipal.module.css'

export default function BotaoPrincipal({texto, tamanho}) {
    return (
        <button className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
        `}>{texto}</button>
    )
}