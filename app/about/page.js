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
          Lorem Ipsum
        </h1>

        <div className="space-y-8">
          <p>



          </p>
          <p>
          survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset
                 sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker
                   including versions of Lorem Ipsum.
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
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Piotr Pomykalski
        </h1>

        <div className="space-y-8">
          <p>
          </p>
          <p>
          </p>

          <div>
            <a
              href="/account"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
