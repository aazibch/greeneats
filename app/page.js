import Container from '@/components/layout/container';
import HeroSection from '@/components/home/hero-section/hero-section';
import AboutSection from '@/components/home/about-section/about-section';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <Container>
        <main>
          <HeroSection />
          <AboutSection />
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
