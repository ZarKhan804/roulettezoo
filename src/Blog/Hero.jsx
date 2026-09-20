
function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">

        <div className="mx-auto w-fit rounded-full border border-yellow-300 bg-white px-5 py-2">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-yellow-600">
            RouletteZoo Game Information
          </p>
        </div>

        <h1 className="mt-6 text-center text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          RouletteZoo <span className="text-yellow-500">Blog</span>
        </h1>

        <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-yellow-400" />

        <article className="mx-auto mt-9 max-w-4xl rounded-2xl border border-gray-300 bg-white px-6 py-8 shadow-sm sm:px-9">

          <p className="text-base leading-8 text-slate-600">
            Welcome to the RouletteZoo Blog, a useful space for learning about
            RouletteZoo games, RouletteZoo wheels, table layouts, game formats,
            betting terminology, and the basic rules behind this classic
            casino-style game. Explore informative content designed to make
            RouletteZoo easier to understand for both new and experienced
            visitors.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            RouletteZoo is centered around a spinning wheel containing numbered
            pockets, commonly shown in red, black, and green. The ball moves
            around the wheel before settling into one of the pockets. This
            simple concept forms the foundation of RouletteZoo and makes the
            game easy to recognize while providing different table selections
            to explore.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            On this blog, visitors can learn about European RouletteZoo,
            American RouletteZoo, RouletteZoo wheel layouts, number and color
            selections, RouletteZoo terminology, online RouletteZoo
            interfaces, and mobile RouletteZoo experiences. The content also
            explains that RouletteZoo outcomes are based on chance and that
            previous spins cannot reliably predict future results.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Whether you are interested in understanding how the RouletteZoo
            wheel works, learning the difference between RouletteZoo formats,
            or exploring common RouletteZoo terms, this blog provides
            straightforward information in an easy-to-read format. Content is
            structured for comfortable browsing across smartphones, tablets,
            laptops, and desktop devices.
          </p>

        </article>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "RouletteZoo Game",
            "RouletteZoo Wheel",
            "European RouletteZoo",
            "American RouletteZoo",
            "RouletteZoo Rules",
            "RouletteZoo Guide",
            "Online RouletteZoo",
          ].map((keyword) => (
            <span
              key={keyword}
              className="border-l-4 border-yellow-400 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm"
            >
              {keyword}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;

