import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='24 de outubro de 2022 às 07:12h' dateTime='2022-10-24'>Cerca de 1h atrás</time>
            </div>

            <button title='Remover comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Luiz Fernando, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
