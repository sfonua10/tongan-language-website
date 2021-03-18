import Head from 'next/head'

export default function Home() {
  const soundWord = () => {
    var audio = document.getElementById('a1');
    audio.play();
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Progress Bar
      </div>
      <main className="mx-auto flex flex-col items-center">
        <h1 className="text-2xl">Write this in English</h1>
        <div className="flex">
          <img src="/woman.svg" className="w-40 h-40" />
          <div className="mt-4">
            <button onClick={soundWord}>Play</button>
            <p>Mālō e lelei!</p>
          </div>
          <audio
            id="a1"

            src="/greeting.mp3">
            <source src="/greeting.mp3" type="audio/mpeg" />
          </audio>

        </div>
      </main>

    </div>
  )
}
