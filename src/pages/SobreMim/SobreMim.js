import PostModelo from "componets/PostModelo/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from "assets/sobre_mim_foto.jpg"


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Helena Maia!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto da Helena Maia"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sit amet mattis vulputate enim nulla aliquet. Ut faucibus pulvinar elementum integer enim. Turpis in eu mi bibendum neque. Porta nibh venenatis cras sed felis eget velit aliquet. Ut lectus arcu bibendum at varius. Tincidunt vitae semper quis lectus nulla at volutpat. Consectetur lorem donec massa sapien.</p>

            <p className={styles.paragrafo}>Neque egestas congue quisque egestas diam in. Nisl purus in mollis nunc sed. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Mi bibendum neque egestas congue quisque egestas diam in. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Tempus iaculis urna id volutpat lacus. Nunc eget lorem dolor sed viverra ipsum nunc. Sodales ut eu sem integer. Egestas dui id ornare arcu odio ut sem nulla pharetra. Bibendum neque egestas congue quisque. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Diam quam nulla porttitor massa. Scelerisque felis imperdiet proin fermentum leo vel. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Dui nunc mattis enim ut tellus elementum sagittis. Vestibulum morbi blandit cursus risus.</p>

            <p className={styles.paragrafo}>Tellus id interdum velit laoreet id. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Fermentum posuere urna nec tincidunt praesent. Dui vivamus arcu felis bibendum ut. Leo vel orci porta non. Porttitor leo a diam sollicitudin tempor id eu nisl. Porttitor eget dolor morbi non arcu risus quis varius. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Habitasse platea dictumst vestibulum rhoncus est. Purus ut faucibus pulvinar elementum integer enim neque. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Iaculis nunc sed augue lacus viverra vitae congue eu. Rhoncus aenean vel elit scelerisque mauris pellentesque. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Vel quam elementum pulvinar etiam. In mollis nunc sed id. Volutpat commodo sed egestas egestas.</p>

            <p className={styles.paragrafo}>Mauris pharetra et ultrices neque ornare aenean. Suscipit adipiscing bibendum est ultricies. Donec pretium vulputate sapien nec sagittis aliquam. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nec sagittis aliquam malesuada bibendum arcu vitae. Lorem ipsum dolor sit amet. Augue interdum velit euismod in. Tellus in hac habitasse platea dictumst. Sed cras ornare arcu dui vivamus arcu felis. Varius duis at consectetur lorem donec massa sapien. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Enim ut tellus elementum sagittis vitae et leo duis. Massa sed elementum tempus egestas sed.</p>
        </PostModelo>
    )
}
