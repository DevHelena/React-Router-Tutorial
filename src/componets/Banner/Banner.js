import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                Sou a Helena, tenho 18 anos, sou natural do Rio de Janeiro, mas atualmente, chamo Rondônia de lar. Sou uma entusiasta da tecnologia, e minha carreira está focada no desenvolvimento Front-End, onde utilizo React, JavaScript e Node.js para criar interfaces, mas também me aventuro em projetos com Python. Estou cursando Análise e Desenvolvimento de Sistemas e trabalhando no Ministério Público do Estado de Rondônia.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                className={styles.circuloColorido} 
                src={circuloColorido}
                aria-hidden={true}
                />

                <img 
                className={styles.minhaFoto}
                src={minhaFoto}
                alt='Foto da Helena Maia'
                />
            </div>
        </div>
    )
}