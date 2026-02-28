export default function About() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
        <div className="space-y-4 text-lg text-gray-300">
          <p>👋 Hey there! I'm Justin.</p>
          <p>
            I'm a full-stack software developer in the making, currently pursuing my B.S. in Computer Science at CSU Northridge. 
            My journey into tech started with curiosity and quickly evolved into a passion for building things that solve real-world problems—whether that's a traffic rerouting app to reduce congestion in LA, a business card OCR tool integrated into a smartcard platform, or a career-exploration assistant powered by AI.
          </p>
          <p>
            I focus primarily on web development, with a growing stack that includes JavaScript, Python, HTML/CSS, MongoDB, and REST APIs. 
            I've tackled both frontend and backend challenges through roles at LADWP and an internship at LynkMe Smart Cards, where I engineered OCR-powered tools using Tesseract, OpenCV, and Webhooks to bridge backend intelligence with seamless frontend experiences.
          </p>
          <p>
            But my passion doesn't stop at software—I have a strong interest in cybersecurity, particularly where it intersects with software engineering. 
            I've taken coursework and certifications in areas like network security, Linux, and risk management, and I'm actively learning how to build more secure systems from the ground up.
          </p>
          <p className="font-semibold">
            My mission? To design and build full-stack solutions that are not only efficient and impactful but also secure by design.
          </p>
        </div>
      </div>
    </section>
  );
} 