import { Hero } from './Hero.jsx'
import { WeekSpecials } from './WeekSpecials.jsx'
import { Testimonials } from './Testimonials.jsx'
import { OurStory } from './OurStory.jsx'
import './Home.scss';

export const Home = () => {
  return <>
    <Hero />
    <WeekSpecials />
    <Testimonials />
    <OurStory />
  </>;
};
