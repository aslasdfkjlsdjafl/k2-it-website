import { Award, Users2, Target, Lightbulb } from 'lucide-react';

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '99%', label: 'Client Satisfaction' }
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
  },
  {
    icon: Users2,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, ensuring transparent communication throughout.'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Our focus is on delivering measurable results that drive real business value.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and innovative approaches to solve complex challenges.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About K<sup className="text-blue-600">2</sup>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking IT consulting firm dedicated to helping businesses 
            harness the power of technology to achieve their strategic objectives
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between business needs and technology solutions, 
                K² IT Consulting has grown from a small team of passionate technologists to a trusted 
                partner for businesses across various industries.
              </p>
              <p>
                Our name represents the exponential power of knowledge and technology working together. 
                Just as K² amplifies mathematical potential, we amplify your business potential through 
                strategic technology implementation.
              </p>
              <p>
                Today, we continue to evolve alongside emerging technologies, ensuring our clients 
                stay ahead of the curve in an increasingly digital world.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="bg-blue-100 group-hover:bg-blue-200 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your technology goals 
              and drive sustainable growth.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start the Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
