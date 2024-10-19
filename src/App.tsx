import React from 'react';
import { motion } from 'framer-motion';
import { Box, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Trippy Edits & Montages',
    description: 'A thrilling montage showcasing video editing skills for your needs',
    videoUrl: 'https://drive.google.com/drive/folders/11Qehrn8fHsOXeRlixX7WPUjNXGkGssAW?usp=drive_link',
  },
  {
    title: 'Ultra-Realistic Product Animation',
    description: 'Stunning 3D animation for a new smartphone launch, highlighting every detail',
    videoUrl: 'https://drive.google.com/drive/folders/17CUMHpvkUEOJfKi4x60GsKB3vFnI8qvy?usp=sharing',
  },
  {
    title: 'CGI Fantasy World Animation',
    description: 'Immersive CGI animation creating a breathtaking fantasy world for a game trailer',
    videoUrl: 'https://drive.google.com/drive/folders/1_1dNxrttYBPCj05MmB7ZZ7HmT9uXjU6r?usp=drive_link',
  },
];

const freelancerProfileUrl = 'https://www.freelancer.com/u/youssef506';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Box className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">Youssef K</h1>
          </div>
          <nav className="flex items-center">
            <a
              href={freelancerProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              aria-label="Hire Youssef K on Freelancer"
            >
              Hire Youssef K <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="mailto:yokyheikal@gmail.com"
              className="ml-4 text-gray-300 hover:text-gray-100 transition duration-300"
              aria-label="Contact Youssef K via email"
            >
              Contact via Gmail
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 animate-bounce">
            Bringing Your Imagination to Life
          </h2>
          <p className="text-xl mb-8">
            Video Edits | Montages | Ultra-Realistic Product Animations | CGI Animations
          </p>
          <a
            href={freelancerProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-orange-600 text-white py-3 px-8 rounded-full font-bold hover:bg-orange-700 transition duration-300 transform hover:scale-105"
            aria-label="Hire Youssef K"
          >
            Hire Me
          </a>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-shadow duration-300 transform hover:shadow-xl"
                onClick={() => window.open(project.videoUrl, '_blank')}
                role="button"
                tabIndex={0}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <motion.a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    aria-label={`Open ${project.title}`}
                    whileHover={{ scale: 1.05 }} // Scale up on hover
                    whileTap={{ scale: 0.95 }}  // Scale down when pressed
                    onClick={(e) => e.stopPropagation()} // Prevent the box click event from firing
                  >
                    Open
                  </motion.a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">
            I am a passionate video editor and animator with a keen eye for detail. My goal is to bring your ideas to life through captivating visuals and storytelling.
          </p>
          <p className="text-lg">
            With years of experience in the industry, I specialize in creating engaging content that resonates with audiences. Let's work together to make something amazing!
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg mb-4">I would love to hear from you! Use the links below to get in touch.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href={freelancerProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              aria-label="Hire Youssef K on Freelancer"
            >
              Hire Youssef K on Freelancer
            </a>
            <a
              href="mailto:yokyheikal@gmail.com"
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300 transform hover:scale-105"
              aria-label="Contact Youssef K via email"
            >
              Contact via Gmail
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center">
        <p className="text-gray-400">© 2024 Youssef K. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;