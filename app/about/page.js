import Image from "next/image";
import image1 from "./about-1.jpg";
import image2 from "./about-2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Our hotel
        </h1>

        <div className="space-y-8">

          <p>
          Welcome to Hotel Łódź, a place that exists between dream and reality, right in the heart of Łódź.
          Our hotel was created to celebrate the character, history, and creative spirit of this one-of-a-kind city.
          Each of our rooms tells a different story — from the towering factories of the 19th century to the shimmering
          world of Polish cinema, and the quiet, hidden gardens that you might stumble upon in Łódź’s courtyards.
          </p>
          <p>
          We believe a hotel should be more than just a place to sleep. It should inspire, surprise, and connect people with
          the soul of its surroundings. That’s why every detail in Hotel Wyobraźnia has been carefully imagined to offer guests
          not only comfort, but also a sense of wonder.
          Though our hotel is imaginary, the emotions it’s meant to evoke are very real. It’s a space for dreamers, artists,
          travelers, and anyone curious enough to explore the magic of Łódź — a city of contrasts, creativity, and untold stories.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src={image2}
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          History
        </h1>

        <div className="space-y-8">
          <p>
          The story of Hotel Wyobraźnia begins in the 19th century,
           during the industrial boom that transformed Łódź into the
          “Polish Manchester.” What started as a modest textile merchant’s
          residence soon grew into a bustling guesthouse for traveling
          traders, artists, and dreamers drawn to the city’s fast-growing
          factories and shimmering promise.
          </p>
          <p>
          Back then, the building echoed with the hum of looms and the clatter
          of carriages on cobblestone streets. Its walls witnessed secret meetings,
          whispered romances, and the birth of new ideas that would shape the
          city’s future. As Łódź flourished, so did the hotel, embracing influences
          from the Art Nouveau elegance of the early 20th century to the cinematic
          pulse that arrived with the rise of Polish film.
          </p>
          <p>
          Throughout wars, revolutions, and cultural renaissances, Hotel Wyobraźnia
          remained a quiet, ever-changing witness to the city’s unfolding story.
          Though the hotel you see today exists in imagination, its roots are planted
          in the real spirit of Łódź — a place shaped by contrasts, resilience,
          and creativity.
          </p>

          <div>
            <a
              href="/account"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Become a part of our history
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
