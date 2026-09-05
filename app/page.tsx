import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';

const CARDS = [
  { href: '/help', title: 'Get help', body: 'You do not need a diagnosis to reach out. Stay with the parent and the child. Call.' },
  { href: '/learn/ppd', title: 'Learn PPD', body: 'Sleep, appetite, irritability, hopelessness, and the difference from baby blues.' },
  { href: '/learn/ppp', title: 'Learn PPP', body: 'A break from reality. Delusions, hallucinations, wax-and-wane symptoms. Call now.' },
  { href: '/check-in', title: 'Check-in', body: 'A private two-minute education screen. Not a diagnosis.' },
  { href: '/partners', title: 'Partners', body: 'Caregivers must know the signs. Judgment can be impaired.' },
  { href: '/prevention', title: 'Prevention', body: 'Plan before birth if you have risk factors. Counseling can lower risk.' },
];

export default function HomePage() {
  return (
    <>
      <Nav tone="hero" />
      <Hero />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-4xl text-ink">1 in 8</p>
            <p className="mt-2 text-sm text-mute">women experience postpartum depression</p>
          </div>
          <div>
            <p className="font-display text-4xl text-ink">1–2 in 1,000</p>
            <p className="mt-2 text-sm text-mute">deliveries involve postpartum psychosis</p>
          </div>
          <div>
            <p className="font-display text-4xl text-ink">Treatable</p>
            <p className="mt-2 text-sm text-mute">Most people who get treatment get well</p>
          </div>
        </div>
        <p className="mx-auto max-w-3xl px-5 pb-6 text-center font-display text-2xl sm:text-3xl text-ink">
          You are not alone. You are not to blame. With help, you will be well.
        </p>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-32 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="liquid-glass rounded-2xl p-5 min-w-0 transition-[transform,background] hover:-translate-y-0.5"
            >
              <h2 className="font-display text-2xl text-ink">{c.title}</h2>
              <p className="mt-2 text-sm text-mute leading-relaxed">{c.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
