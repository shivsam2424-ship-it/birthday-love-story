import { useMemo, useState } from 'react'

const memories = [
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
    caption: 'My favorite person',
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    caption: 'My happiest moments',
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    caption: 'Every picture tells our story',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    caption: 'My forever favorite memory',
  },
  {
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
    caption: 'Us, forever in my heart',
  },
  {
    src: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=900&q=80',
    caption: 'All my favorite feelings',
  },
  {
    src: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    caption: 'Everyday with you feels magical',
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    caption: 'My favorite place is your heart',
  },
]

const reasons = [
  'Your smile makes my worst days better.',
  'Your laugh is my favorite sound.',
  'You make ordinary moments feel magical.',
  'You are the person I want to share my happiness with.',
  'Every day, I find another reason to love you.',
]

const progressLabels = ['Welcome', 'Wish', 'Memories', 'Reasons', 'Letter', 'Finale']

function App() {
  const [pageIndex, setPageIndex] = useState(0)
  const [giftOpen, setGiftOpen] = useState(false)
  const [wishMade, setWishMade] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const [selectedMemory, setSelectedMemory] = useState(null)
  const [liked, setLiked] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const currentStep = pageIndex + 1

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 13) % 100}%`,
        delay: `${(index * 0.7).toFixed(2)}s`,
        duration: `${(9 + (index % 6)).toFixed(1)}s`,
        size: `${14 + (index % 6) * 6}px`,
        color: ['#f9a8d4', '#fbcfe8', '#fca5a5', '#fef3c7'][index % 4],
      })),
    [],
  )

  const sparkleNodes = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: `${(index * 11) % 100}%`,
        top: `${(index * 7) % 90}%`,
        delay: `${(index * 0.5).toFixed(2)}s`,
      })),
    [],
  )

  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 11) % 100}%`,
        color: ['#f472b6', '#fca5a5', '#fbbf24', '#f9a8d4', '#c084fc'][index % 5],
        delay: `${(index * 0.22).toFixed(2)}s`,
      })),
    [],
  )

  const nextPage = () => setPageIndex((prev) => Math.min(prev + 1, 5))
  const prevPage = () => setPageIndex((prev) => Math.max(prev - 1, 0))

  const renderPage = () => {
    switch (pageIndex) {
      case 0:
        return (
          <section className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12">
            <div className="w-full max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/30 px-4 py-2 text-sm font-medium text-pink-700 shadow-glow">
                <span>🎂</span> Today is a very special day
              </div>

              <h1 className="font-romantic text-5xl text-pink-700 md:text-7xl">Hey, My Love ❤️</h1>
              <p className="mt-6 text-xl text-pink-800/80 md:text-2xl">
                Someone very special has a birthday today… and that someone is my whole world.
              </p>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => {
                    setGiftOpen(true)
                    setTimeout(() => nextPage(), 500)
                  }}
                  className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-pink-200 transition hover:scale-105 hover:shadow-pink-300"
                >
                  Open Your Surprise 💝
                </button>
              </div>

              <div className="relative mx-auto mt-12 flex h-52 w-52 items-center justify-center">
                <div className={`relative h-32 w-32 rounded-2xl bg-gradient-to-br from-pink-200 to-rose-300 shadow-2xl transition-all duration-700 ${giftOpen ? 'translate-y-[-8px] rotate-[-8deg]' : ''}`}>
                  <div className="absolute inset-x-0 top-0 mx-auto h-6 w-10 rounded-full bg-pink-100" />
                  <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-pink-100" />
                  <div className="absolute inset-x-3 bottom-3 h-16 rounded-xl bg-pink-50 opacity-80" />
                </div>
                {giftOpen && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">💖</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        )
      case 1:
        return (
          <section className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12">
            <div className="w-full max-w-5xl text-center">
              <div className="mb-8">
                <h2 className="font-romantic text-4xl text-pink-700 md:text-6xl">Happy Birthday, My Beautiful Girl! 🎂❤️</h2>
              </div>

              <div className="story-card relative mx-auto w-full max-w-4xl rounded-[2rem] p-6 md:p-10">
                <div className="relative mx-auto mb-8 flex h-56 w-56 items-center justify-center">
                  <div className="absolute inset-x-12 bottom-0 h-20 rounded-full bg-rose-200/80 blur-md" />
                  <div className="absolute bottom-8 h-28 w-28 rounded-t-[40%] rounded-b-[18%] bg-gradient-to-b from-amber-100 to-yellow-200 shadow-lg" />
                  <div className="absolute bottom-24 h-12 w-12 rounded-full bg-rose-300 shadow-inner" />
                  <div className="absolute bottom-24 h-24 w-24 rounded-t-full bg-gradient-to-b from-pink-200 to-rose-300" />
                  {[0, 1, 2, 3, 4].map((candle) => (
                    <div key={candle} className="absolute bottom-28 flex flex-col items-center">
                      <div className={`h-5 w-1 rounded-full ${wishMade ? 'bg-transparent' : 'bg-yellow-200'}`} />
                      <div className={`h-4 w-4 rounded-full ${wishMade ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} bg-yellow-300 shadow-[0_0_15px_rgba(252,211,77,0.8)]`} />
                    </div>
                  ))}
                </div>

                <p className="typewriter max-w-3xl text-center text-lg text-pink-700 md:text-2xl">
                  My love, you are the most beautiful part of my life, and every day with you feels like a blessing.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setWishMade(true)}
                    className="rounded-full border border-pink-300 bg-white/50 px-6 py-3 font-semibold text-pink-700 transition hover:scale-105"
                  >
                    Make a Wish ✨
                  </button>
                  <button
                    onClick={nextPage}
                    className={`rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-semibold text-white transition hover:scale-105 ${wishMade ? 'opacity-100' : 'pointer-events-none opacity-40'}`}
                  >
                    Continue Our Story 💕
                  </button>
                </div>
              </div>
            </div>
          </section>
        )
      case 2:
        return (
          <section className="relative mx-auto min-h-screen max-w-6xl px-4 py-12">
            <div className="mb-8 text-center">
              <h2 className="font-romantic text-4xl text-pink-700 md:text-6xl">Our Beautiful Memories 📸</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {memories.map((memory, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMemory(memory)}
                  className="group overflow-hidden rounded-[1.8rem] border border-pink-200 bg-white/40 p-2 text-left shadow-lg shadow-pink-100 transition hover:-translate-y-2 hover:shadow-pink-200"
                >
                  <div className="overflow-hidden rounded-[1.3rem]">
                    <img
                      src={memory.src}
                      alt={memory.caption}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="p-3 text-center text-sm font-medium text-pink-700">{memory.caption}</p>
                </button>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button onClick={nextPage} className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:scale-105">
                More Memories 💗
              </button>
            </div>

            {selectedMemory && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#240814]/70 p-4 backdrop-blur-sm">
                <div className="relative w-full max-w-3xl rounded-[2rem] bg-white p-3 shadow-2xl">
                  <button onClick={() => setSelectedMemory(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1 text-lg text-pink-700">✕</button>
                  <img src={selectedMemory.src} alt={selectedMemory.caption} className="max-h-[75vh] w-full rounded-[1.5rem] object-cover" />
                  <p className="p-4 text-center text-lg font-semibold text-pink-700">{selectedMemory.caption}</p>
                </div>
              </div>
            )}
          </section>
        )
      case 3:
        return (
          <section className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-12">
            <div className="w-full space-y-6">
              <div className="text-center">
                <h2 className="font-romantic text-4xl text-pink-700 md:text-6xl">Why You're So Special to Me 💌</h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {reasons.map((reason, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setLiked(true)
                      setTimeout(() => setLiked(false), 600)
                    }}
                    className="story-card relative overflow-hidden rounded-[1.5rem] p-6 text-left transition hover:-translate-y-2 hover:shadow-pink-200"
                  >
                    <div className="mb-3 text-2xl">💞</div>
                    <p className="text-lg font-medium text-pink-800">{reason}</p>
                    {liked && <div className="absolute right-4 top-4 text-2xl pulse-heart">💖</div>}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button onClick={nextPage} className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:scale-105">
                  One Last Surprise 🎁
                </button>
              </div>
            </div>
          </section>
        )
      case 4:
        return (
          <section className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-12">
            <div className="w-full text-center">
              <div className="mb-10">
                <h2 className="font-romantic text-4xl text-pink-700 md:text-6xl">My Love Letter 💖</h2>
              </div>

              <div className="story-card mx-auto max-w-4xl rounded-[2rem] p-8 md:p-12">
                <button
                  onClick={() => setLetterOpen((prev) => !prev)}
                  className="relative mx-auto block h-52 w-full max-w-xl overflow-hidden rounded-[1.5rem] border border-pink-200 bg-gradient-to-br from-rose-100 to-pink-200 shadow-xl transition hover:scale-[1.02]"
                >
                  <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-white/40" />
                  <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-white/30" />
                  <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-pink-300/70" />
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-pink-500/30" />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">✉️</div>
                </button>

                {letterOpen && (
                  <div className="mt-8 text-left text-lg leading-8 text-pink-800 md:text-xl">
                    <p className="typewriter mb-4 text-pink-700">Dearest love,</p>
                    <p>
                      Today I want you to know that you are my greatest blessing, my safe place, and the reason I believe in beautiful things. Every smile of yours lights up my world, and every second with you feels like a tiny miracle.
                    </p>
                    <p className="mt-4">
                      I hope you always remember how deeply you are loved, how much you are cherished, and how lucky I am to call you mine. You deserve all the happiness in the world, today and always. I hope I can keep giving you reasons to smile. I love you, birthday girl. ❤️
                    </p>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <button onClick={nextPage} className="rounded-full bg-gradient-to-r from-pink-600 to-rose-500 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:scale-105">
                    See Your Final Surprise 💝
                  </button>
                </div>
              </div>
            </div>
          </section>
        )
      case 5:
        return (
          <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-100 to-amber-100" />
            <div className="relative z-10 w-full max-w-5xl text-center">
              <h2 className="font-romantic text-5xl text-pink-700 md:text-7xl">Happy Birthday, My Love ❤️</h2>
              <p className="mt-6 text-xl text-pink-800 md:text-2xl">
                No matter how many birthdays pass, I hope I get to celebrate many more of them with you. You are my favorite part of this life.
              </p>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setLiked(true)}
                  className="pulse-heart rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 text-4xl text-white shadow-[0_0_30px_rgba(244,114,182,0.4)] transition hover:scale-105"
                >
                  💖
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => window.open('https://open.spotify.com/track/5KKwID2NpiZmUR8uobmXGr?si=06ea0a23df28409d', '_blank', 'noopener,noreferrer')}
                  className="rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-200 hover:scale-105"
                >
                  Play Our Love Song 🎶
                </button>
                <button
                  onClick={() => setPageIndex(0)}
                  className="rounded-full border border-pink-300 bg-white/70 px-7 py-3 font-semibold text-pink-700 shadow-lg shadow-pink-100 hover:scale-105"
                >
                  Replay Our Story 💕
                </button>
              </div>
            </div>
          </section>
        )
      default:
        return null
    }
  }

  return (
    <div className="heart-bg relative min-h-screen overflow-hidden">
      {!reducedMotion && (
        <>
          {floatingHearts.map((heart) => (
            <span
              key={heart.id}
              className="float-heart"
              style={{
                left: heart.left,
                color: heart.color,
                fontSize: heart.size,
                animationDelay: heart.delay,
                animationDuration: heart.duration,
              }}
            >
              ❤
            </span>
          ))}

          {sparkleNodes.map((sparkle) => (
            <span
              key={sparkle.id}
              className="sparkle"
              style={{ left: sparkle.left, top: sparkle.top, animationDelay: sparkle.delay }}
            />
          ))}

          {confettiPieces.map((piece) => (
            <span
              key={piece.id}
              className="confetti"
              style={{ left: piece.left, background: piece.color, animationDelay: piece.delay }}
            />
          ))}
        </>
      )}

      <div className="fixed left-3 top-4 z-40 flex items-center gap-3 rounded-full border border-white/40 bg-white/30 px-3 py-2 text-xs font-semibold text-pink-700 backdrop-blur-md shadow-md md:left-6 md:top-6 md:text-sm">
        <span className="rounded-full bg-pink-500 px-2 py-1 text-white">{currentStep}/6</span>
        <span>{progressLabels[pageIndex]}</span>
      </div>

      <div className="fixed right-3 top-4 z-40 rounded-full border border-white/40 bg-white/30 px-3 py-2 text-xs font-medium text-pink-700 shadow-md backdrop-blur-md md:right-6 md:top-6 md:text-sm">
        <button onClick={() => setReducedMotion((prev) => !prev)}>{reducedMotion ? 'Motion Off' : 'Motion On'}</button>
      </div>

      <div className="fixed bottom-4 right-4 z-50 w-[320px] max-w-[90vw] rounded-[1.5rem] border border-pink-200 bg-white/20 p-3 shadow-xl shadow-pink-200 backdrop-blur-md md:bottom-6 md:right-6">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
          <span>Our Love Song</span>
          <span>🎵</span>
        </div>
        <iframe
          title="Love song"
          src="https://open.spotify.com/embed/track/5KKwID2NpiZmUR8uobmXGr?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      </div>

      {renderPage()}

      {pageIndex > 0 && (
        <div className="fixed bottom-4 left-4 z-40 md:bottom-6 md:left-6">
          <button
            onClick={prevPage}
            className="rounded-full border border-pink-300 bg-white/60 px-5 py-2 text-sm font-semibold text-pink-700 shadow-md backdrop-blur-sm transition hover:scale-105"
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  )
}

export default App
