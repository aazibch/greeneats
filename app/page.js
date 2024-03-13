import Container from '@/components/layout/container';
import HeroSection from '@/components/home/hero-section/hero-section';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <main>
          <section className={classes.section}>
            <h2>What Is GreenEats</h2>
            <p>
              GreenEats isn&apos;t just another food app; it&apos;s a movement
              towards a more sustainable and compassionate way of eating. By
              choosing plant-based recipes, you&apos;re making a positive impact
              on the environment and animal welfare. GreenEats empowers you to
              make conscious choices about what you eat, knowing that every meal
              you enjoy is helping to reduce your carbon footprint.
            </p>
          </section>

          <section className={classes.section}>
            <h2>How It Works</h2>
            <p>
              Share your own recipes, tips, and experiences, and connect with
              others who share your love for green cuisine. Whether you&apos;re
              a seasoned chef or a home cook experimenting with plant-based
              ingredients, GreenEats is your platform to showcase your culinary
              creations. Join us on a journey of culinary exploration and
              conscious eating today!
            </p>
          </section>
        </main>
      </Container>
    </>
  );
}
