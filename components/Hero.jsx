import Image from "next/image";
import { NAME, WEBSITE_DESCRIPTION } from "@/lib/constants";

const Hero = () => (
  <section className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
    <div className="text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        James Singleton
      </h1>
      <p className="mt-3 prose prose-indigo prose-lg text-gray-500 mx-auto sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        I am a Software Engineer building{" "}
        <a
          href="https://github.com/americanexpress/one-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          One App
        </a>{" "}
        at American Express.
      </p>
    </div>
  </section>
);
export default Hero;
