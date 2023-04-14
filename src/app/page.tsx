import styles from './page.module.css'

import Icon from './components/Icon'
import Block from './components/blocks/Block'

export default function Home() {
  return (
    <main className={styles.main}>

      <Icon/>
      <Block/>
    </main>
  )
}
