import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-36 font-inter">
      <h1 className="text-3xl font-kanit font-bold text-center mb-8 underline">About Harmony Music Academy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Our Mission</h2>
        <p className="text-gray-200 leading-relaxed">
          At Harmony Music Academy, our mission is to provide accessible, high-quality music education to musicians of all levels. We believe that everyone has the potential to unlock their musical talent, and we're dedicated to providing the resources and guidance to help them achieve their goals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-200 leading-relaxed">
          <li>Comprehensive music courses for various instruments and skill levels</li>
          <li>Experienced and passionate instructors</li>
          <li>Personalized learning paths tailored to individual needs</li>
          <li>A supportive and inspiring learning community</li>
          <li>Resources including sheet music, tutorials, and practice tools</li>
          <li>Workshops and masterclasses with renowned musicians</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Our Story</h2>
        <p className="text-gray-200 leading-relaxed">
          Harmony Music Academy was founded in 2025 by Samarpan KC, a passionate musician with a vision to make music education more accessible and engaging. Frustrated by the limitations of traditional music education, Harmony Music set out to create a platform that combines expert instruction with a supportive community, empowering musicians to learn and grow at their own pace.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 font-kanit">Join Our Community</h2>
        <p className="text-gray-200 leading-relaxed mb-4">
          Whether you're a beginner just starting your musical journey or an experienced musician looking to refine your skills, we invite you to join the Harmony Music Academy community. Explore our courses, connect with fellow musicians, and unlock your full musical potential.
        </p>
        <p className="text-gray-200 leading-relaxed">
          Let's create beautiful music together!
        </p>
      </section>
    </div>
  );
};

export default About;