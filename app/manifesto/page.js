import Container from '@/components/layout/container';
import classes from './page.module.css';

export const metadata = {
  title: 'Manifesto | GreenEats',
  description:
    'At GreenEats, we believe in the power of food to change the world. Our mission is simple yet profound: to inspire conscientious and sustainable eating among all communities, with a special focus on the vibrant culture of Pakistan.'
};

export default function CommunityPage() {
  return (
    <Container>
      <header className="pt-20 pb-10">
        <h2 className="text-green-500 text-3xl">Manifesto</h2>
      </header>
      <article className="bg-gray-800 border-gray-700 p-8 rounded-lg text-xl space-y-5">
        <p>
          At GreenEats, we believe in the power of food to change the world. Our
          mission is simple yet profound: to inspire conscientious and
          sustainable eating among all communities, with a special focus on the
          vibrant culture of Pakistan.
        </p>
        <ol className="list-decimal list-inside space-y-5">
          <li className="space-y-5">
            <h3 className="inline-block">Embracing Plant-Powered Living:</h3>
            <p>
              We celebrate the beauty and diversity of vegetarian and vegan
              cuisine. By promoting plant-based recipes, we aim to show that
              delicious, nutritious meals can be created without harming animals
              or the environment.
            </p>
          </li>
          <li className="space-y-5">
            <h3 className="inline-block">Cultivating Conscious Consumption:</h3>
            <p>
              We advocate for mindful eating that considers the impact of our
              food choices on the planet. Through our platform, we encourage
              users to explore sustainable ingredients and cooking practices
              that support the health of both people and the environment.
            </p>
          </li>
          <li className="space-y-5">
            <h3 className="inline-block">
              Fostering Community and Connection:
            </h3>
            <p>
              GreenEats is more than just a recipe website—it's a thriving
              community of like-minded individuals who share a passion for
              plant-based living. We welcome everyone, from seasoned vegans to
              curious omnivores, to join us in our journey towards a greener,
              more compassionate world.
            </p>
          </li>
          <li className="space-y-5">
            <h3 className="inline-block">
              Celebrating Pakistani Culinary Heritage:
            </h3>{' '}
            <p>
              With a focus on recipes using ingredients readily available in
              Pakistan, we honor the rich culinary traditions of the region. Our
              platform serves as a digital hub where Pakistani flavors meet
              global sustainability, showcasing the diversity and creativity of
              plant-based cooking in the country.
            </p>
          </li>
          <li className="space-y-5">
            <h3 className="inline-block">
              Empowering Change, One Meal at a Time:
            </h3>{' '}
            <p>
              We believe that every bite we take is a vote for the kind of world
              we want to live in. By choosing plant-based foods, we contribute
              to a more sustainable future for ourselves and generations to
              come. Through GreenEats, we empower individuals to make informed,
              compassionate choices that benefit both personal health and the
              planet.
            </p>
          </li>
          <li className="space-y-5">
            <h3 className="inline-block">
              Inspiring Innovation and Adaptation:
            </h3>{' '}
            <p>
              As the world evolves, so too does our understanding of sustainable
              eating. We embrace innovation and adaptation, constantly exploring
              new ingredients, techniques, and ideas that promote a healthier,
              more sustainable food system.
            </p>
          </li>
          <li className="space-y-5">
            <h3 className="inline-block">Leading by Example:</h3>{' '}
            <p>
              At GreenEats, we lead by example, demonstrating that small changes
              in our everyday lives can have a big impact on the world around
              us. Through our actions and our recipes, we inspire others to join
              us in creating a more compassionate and sustainable future for
              all. Join us at GreenEats and be part of the movement towards a
              greener, healthier, and more compassionate world. Together, we can
              make a difference—one delicious meal at a time.
            </p>
          </li>
        </ol>
      </article>
    </Container>
  );
}
