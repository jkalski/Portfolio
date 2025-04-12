import { personalInfo } from '@/config/personal';

export default function Hero() {
  return (
    <section className="relative py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">{personalInfo.name}</h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          {personalInfo.title} • {personalInfo.subtitle} • {personalInfo.interests}
        </p>
      </div>
    </section>
  );
} 