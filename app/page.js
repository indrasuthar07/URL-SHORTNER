
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";




const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


export default function Home() {
  return (
    
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       
        <section className="flex flex-row  justify-center bg-green-100 w-full h-full text-center">
          <div className=" flex-1">
            <p className={`text-3xl font-bold ${poppins.className}`}>
              The best Url shortener in the world!
            </p>
            <p className="text-lg text-gray-600 mt-4">
              We are the best url shortener in the world. We are the most reliable and fastest url shortener in the world. And we are the best in the world.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/heero.png"
              alt="hero"
              width={800}
              height={800}
              className=" rounded-lg"
            />
          </div>
        </section>
      </main>
  
  );
}
