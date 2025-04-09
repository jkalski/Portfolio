export default function Projects() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
        <div className="grid gap-8">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Phishing Email Detection</h3>
            <p className="mb-4 text-gray-300">A real-time phishing email detection web app built with Streamlit and powered by machine learning models trained on 80,000+ emails. Users can paste email content and instantly receive predictions from multiple models on whether the email is phishing or legitimate.</p>
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2 text-emerald-400">Features</h4>
              <ul className="list-disc list-inside text-gray-300 mb-2">
                <li>Predicts phishing vs. legitimate emails</li>
                <li>Confidence scores from multiple models (Naive Bayes, SVM, Neural Network)</li>
                <li>Compare models side-by-side</li>
                <li>Displays key influencing words</li>
                <li>Streamlit-powered UI</li>
              </ul>
              <h4 className="text-lg font-medium mb-2 text-emerald-400">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">scikit-learn</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Streamlit</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Machine Learning</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/jkalski/phishing-detector" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
              >
                View on GitHub
              </a>
              <a 
                href="https://phishing-detector-feytfxdzppy4tnz3aynpd9.streamlit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Code Quality Dashboard</h3>
            <p className="mb-4 text-gray-300">A web application for analyzing Python code quality using Pylint. Features include code analysis, linting results, and a modern web interface.</p>
            <a 
              href="https://github.com/jkalski/code-quality-tool" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
            >
              View on GitHub
            </a>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Justflix</h3>
            <p className="mb-4 text-gray-300">A Netflix clone built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS. Features include user authentication, responsive UI, movie/TV show browsing, search functionality, and user profiles.</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/jkalski/Justflix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
              >
                View on GitHub
              </a>
              <a 
                href="https://justflix.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 