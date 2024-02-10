import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export const metadata = {
  title: 'The Community | GreenEats',
  description:
    'Join a vibrant community of conscientious eaters from all over the world.'
};

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion:{' '}
          <span className={classes.highlight}> Cruelty-free Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="People cooking together" />
            <p>Find friends & like-minded people</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="People at a cooking event" />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
