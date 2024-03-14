import Container from '@/components/layout/container';
import HeroSection from '@/components/home/hero-section/hero-section';
import AboutSection from '@/components/home/about-section/about-section';
import classes from './page.module.css';
import CommunitySection from '@/components/home/community-section/community-section';

export default function Home() {
  return (
    <>
      <Container>
        <main>
          <HeroSection />
          <AboutSection />
          <CommunitySection />
        </main>
      </Container>
    </>
  );
}
