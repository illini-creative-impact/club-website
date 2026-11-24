import { AccentTitle, ArrowLink, Container, Eyebrow } from '../components/ui';
import { collaborators, fallExhibition as event } from '../content/fallExhibition';
import { useDocumentMeta } from '../lib/router';
import table from '../assets/photos/iotf/table.jpg';
import stickyNotes from '../assets/photos/iotf/stickynotes.jpg';
import squirrel from '../assets/photos/iotf/squirrel.jpg';
import leaves from '../assets/photos/iotf/leaves.jpg';
import gameBuilders from '../assets/photos/iotf/gamebuilders.jpg';
import collaboratorsDrawing from '../assets/photos/iotf/collaborators-drawing.jpg';
import bodhi from '../assets/photos/iotf/bodhi.jpg';
import eventPhoto from '../assets/photos/iotf/5Q2A9747.jpg';

const gallery = [
  { src: collaboratorsDrawing, alt: 'People drawing together at the event' },
  { src: eventPhoto, alt: 'A moment from It?s Okay to Fall' },
  { src: stickyNotes, alt: 'Sticky notes at the event' },
  { src: table, alt: 'A table at It?s Okay to Fall' },
  { src: leaves, alt: 'Leaves at the event' },
  { src: gameBuilders, alt: 'Game Builders at the event' },
  { src: bodhi, alt: 'Bodhi Counseling at the event' },
  { src: squirrel, alt: 'Squirrel artwork at the event' },
];

export default function FallExhibitionPage() {
  useDocumentMeta('It\'s Okay to Fall - November 10, 2026', 'A look back at It\'s Okay to Fall, a campus-wide mental health art initiative at the Illini Union.');

  return (
    <article>
      <header className="bg-primaryNavy text-white">
        <Container className="grid gap-10 pb-16 pt-28 sm:pt-36 lg:grid-cols-2 lg:items-center lg:pb-24">
          <div>
            <a href="/events#projects" className="text-sm font-semibold text-white/80 hover:text-illiniOrange">- All projects</a>
            <div className="mt-10"><Eyebrow tone="dark">Past event - November 10, 2026</Eyebrow></div>
            <h1 className="mt-4 font-editorial text-5xl font-bold leading-tight sm:text-7xl"><AccentTitle text={event.title} accent="Fall" /></h1>
            <p className="mt-6 font-editorial text-2xl italic text-white/90">One campus. Many stories. One artwork.</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">At the Illini Union, our community came together to make art and open conversations about mental health.</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4"><ArrowLink href="#photos" tone="dark">See photos from the day</ArrowLink><ArrowLink href="/work/fall-exhibition/original" tone="dark">View the original event page</ArrowLink></div>
          </div>
          <img src={collaboratorsDrawing} alt="People drawing together at It?s Okay to Fall" className="aspect-[4/3] w-full rounded-2xl object-cover" fetchPriority="high" />
        </Container>
      </header>
      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><Eyebrow>The exhibition</Eyebrow><h2 className="font-editorial text-4xl font-bold text-primaryNavy sm:text-5xl">Created together</h2></div>
          <div className="space-y-5 text-lg leading-8 text-slate-600 lg:col-span-7">
            <p>It?s Okay to Fall brought students, artists, and community organizations together around creativity and mental health awareness. At its center was a collective artwork, with space for people to add their own marks and messages.</p>
            <p>Co-hosted by Illini Creative Impact and {event.coHost}, the exhibition took place on {event.dateLabel} in {event.venue}.</p>
          </div>
        </Container>
      </section>
      <section id="photos" className="bg-white py-20 sm:py-28" aria-labelledby="photos-title">
        <Container>
          <Eyebrow>November 10, 2026</Eyebrow>
          <h2 id="photos-title" className="font-editorial text-4xl font-bold text-primaryNavy sm:text-5xl">Scenes from the day</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">A look back at the people, activities, and artwork that made the exhibition.</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo) => <figure key={photo.src} className="overflow-hidden rounded-2xl bg-sand"><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover" /></figure>)}
          </div>
        </Container>
      </section>
      <section className="bg-sand py-20 sm:py-24">
        <Container>
          <Eyebrow>Our community</Eyebrow>
          <h2 className="font-editorial text-4xl font-bold text-primaryNavy sm:text-5xl">Thank you for being part of it</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Thank you to the artists, attendees, organizers, and community partners who helped bring It?s Okay to Fall together.</p>
          <ul className="mt-8 flex flex-wrap gap-3">{collaborators.map((org) => <li key={org.name} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primaryNavy">{org.name}</li>)}</ul>
          <div className="mt-10"><ArrowLink href="/get-involved">Get involved with ICI</ArrowLink></div>
        </Container>
      </section>
    </article>
  );
}
