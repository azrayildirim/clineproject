import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 bg-gradient-to-br from-teal-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-amber-500">
            Azra Yildirim
          </h1>
          <p className="text-xl text-teal-600">Software Developer</p>
        </div>

        {/* About Section */}
        <section className="mb-16 hover:transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-teal-600">About Me</h2>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100">
            <p className="text-gray-700 leading-relaxed">
              Welcome to my personal website! I'm a passionate software developer with a focus on creating elegant and efficient solutions. 
              I enjoy working with modern technologies and am always eager to learn new things.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-teal-400 to-amber-400 p-[2px] rounded-xl hover:from-teal-500 hover:to-amber-500 transition-all duration-300">
              <div className="bg-white p-4 rounded-lg h-full">
                <h3 className="font-semibold text-teal-600">Frontend</h3>
                <p className="text-gray-600">React, Next.js, HTML, CSS</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-amber-400 p-[2px] rounded-xl hover:from-teal-500 hover:to-amber-500 transition-all duration-300">
              <div className="bg-white p-4 rounded-lg h-full">
                <h3 className="font-semibold text-teal-600">Backend</h3>
                <p className="text-gray-600">Node.js, Express, APIs</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-amber-400 p-[2px] rounded-xl hover:from-teal-500 hover:to-amber-500 transition-all duration-300">
              <div className="bg-white p-4 rounded-lg h-full">
                <h3 className="font-semibold text-teal-600">Tools</h3>
                <p className="text-gray-600">Git, VS Code, GitHub</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-white p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-amber-600 group-hover:text-teal-600">Personal Website</h3>
              <p className="text-gray-600">A Next.js-powered personal portfolio website showcasing my work and skills.</p>
              <button className="mt-4 bg-gradient-to-r from-teal-400 to-amber-400 text-white px-4 py-2 rounded-lg hover:from-teal-500 hover:to-amber-500 transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-amber-600 group-hover:text-teal-600">Project 2</h3>
              <p className="text-gray-600">Coming soon...</p>
              <button className="mt-4 bg-gradient-to-r from-teal-400 to-amber-400 text-white px-4 py-2 rounded-lg hover:from-teal-500 hover:to-amber-500 transition-all duration-300">
                Coming Soon
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Contact</h2>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100">
            <p className="text-gray-700 mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://github.com/azrayildirim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-teal-400 to-amber-400 text-white px-6 py-3 rounded-lg hover:from-teal-500 hover:to-amber-500 transition-all duration-300 text-center shadow-md hover:shadow-lg"
              >
                Visit My GitHub Profile
              </a>
              <button className="bg-gradient-to-r from-amber-400 to-teal-400 text-white px-6 py-3 rounded-lg hover:from-amber-500 hover:to-teal-500 transition-all duration-300 shadow-md hover:shadow-lg">
                Contact Me
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
