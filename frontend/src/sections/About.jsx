import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">About TechNova</h2>

      {/* Introduction */}
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        TechNova Solutions is a leading IT company founded in 2020, dedicated to delivering high-quality web and mobile development services. 
        We specialize in building custom software that helps businesses grow and succeed in the digital age.
      </p>

      {/* Mission and Values */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
          <p className="text-md">
            Our mission is to empower businesses by creating innovative and scalable software solutions that solve real-world problems.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Values</h3>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li>Innovation</li>
            <li>Customer-Centric Approach</li>
            <li>Integrity & Transparency</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose TechNova?</h3>
        <p className="max-w-2xl mx-auto">
          With a passionate team and cutting-edge technologies, we deliver quality solutions tailored to client needs.
          Our commitment to excellence, timely delivery, and transparent communication sets us apart.
        </p>
      </div>
    </section>
  );
}


// export default function About() {
//     return (
//       <section id="about" className="min-h-screen p-10 bg-white">
//         <h2 className="text-3xl font-bold">About Section</h2>
//       </section>
//     );
//   }