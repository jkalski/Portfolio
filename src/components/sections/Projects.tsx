export default function Projects() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
        <div className="grid gap-8">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Phishing Email Detection</h3>
            <p className="mb-4 text-gray-300">A machine learning project that analyzes and detects phishing emails using natural language processing and various ML algorithms.</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/jkalski/phishing-email-detection" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
              >
                View on GitHub
              </a>
              <a 
                href="https://phishing-email-detection.streamlit.app/" 
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
            <h3 className="text-xl font-semibold mb-2 text-white">OptiMind Labs – HVAC Optimization Simulation Engine</h3>
            <p className="mb-4 text-gray-300">Designed and implemented a custom HVAC simulation environment to model temperature control and energy usage dynamics. Built structured data collection pipelines to generate training trajectories stored in validated CSV datasets. Developed a modular reinforcement learning training workflow separating environment logic, data processing, and model training components. Implemented reproducible experiment configuration and dataset validation to ensure consistent training results. Structured project architecture for scalability, maintainability, and clear separation of system responsibilities.</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/SpencerLevine9/OptiMind_Labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 