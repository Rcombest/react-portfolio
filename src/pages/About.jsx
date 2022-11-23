import styles from "./About.module.css"

function About() {
  return (
    <div>
      <div className={styles.about}>
        <h1>About Me</h1>
        <img src="/AboutPic.jpeg" alt="Ryan Combest" className={styles.abtimg} />
          <div className={styles.offset}>
            <p>My name is Ryan Combest, I'm a user-focused Software Engineer who brings humor and empathy to everything I do. With a passion for the backend, I seek to bring creative and technical finesse with every post request.</p>
          </div>
      </div>
      <div>
        <h2>Hobbies</h2>
        <ul className={styles.hobbies}>
          <li>Putting on a record and sitting down with a book</li>
          <li>Playing video games with friends</li>
          <li>Listening to podcasts</li>
        </ul>
        <div>
          <h2>Favorites</h2>
          <ul className={styles.favorites}>
            <li className={styles.books}>Books:
              <ul className={styles.booksList}>
                <li>The Sickness Unto Death by Soren Kierkegaard</li>
                <li>I and Thou by Martin Buber</li>
                <li>From Hell by Alan Moore</li>
              </ul>
            </li>
            <li className={styles.games}>Games: 
              <ul className={styles.gamesList}>
                <li>Kingdom Hearts 2</li>
                <li>Metal Gear Solid 2</li>
                <li>Final Fantasy IX</li>
              </ul>
            </li>
            <li className={styles.records}>Records:
              <ul className={styles.recordsList}>
                <li>Good Apollo, I'm Burning Star IV Vol. One by Coheed & Cambria</li>
                <li>Brother, Sister by mewithoutYou</li>
                <li>Raise Your Skinny Fists Like Antennas to Heaven by Godspeed You! Black Emperor</li>
              </ul>
              </li>
              <li className={styles.podcasts}>Podcasts:
                <ul className={styles.podcastsList}>
                  <li>The First Ever Podcast</li>
                  <li>The P.O.D. Kast</li>
                  <li>The Adventure Zone</li>
                </ul>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About