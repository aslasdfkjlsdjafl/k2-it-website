import { 
  Cloud, 
  Database, 
  Laptop, 
  Shield, 
  Users, 
  Cog,
  BarChart3,
  HeadphonesIcon,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Migrate to the cloud with confidence. We provide comprehensive cloud strategy, migration, and management services.',
    features: ['AWS & Azure expertise', 'Cloud migration', 'Infrastructure optimization', 'Cost management']
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
    features: ['Data warehousing', 'Business intelligence', 'Machine learning', 'Real-time analytics']
  },
  {
    icon: Laptop,
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your unique business requirements and growth objectives.',
    features: ['Web applications', 'Mobile apps', 'API development', 'Legacy modernization']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions and risk assessment services.',
    features: ['Security audits', 'Penetration testing', 'Compliance consulting', '24/7 monitoring']
  },
  {
    icon: Users,
    title: 'IT Strategy',
    description: 'Strategic technology planning and digital transformation guidance to drive business success.',
    features: ['Technology roadmaps', 'Digital transformation', 'Process optimization', 'Change management']
  },
  {
    icon: Cog,
    title: 'Infrastructure',
    description: 'Robust IT infrastructure design, implementation, and management for optimal performance.',
    features: ['Network design', 'Server management', 'Backup solutions', 'Disaster recovery']
  },
  {
    icon: BarChart3,
    title: 'Performance Optimization',
    description: 'Maximize your system performance and efficiency with our optimization and monitoring services.',
    features: ['Performance tuning', 'Monitoring solutions', 'Capacity planning', 'Cost optimization']
  },
  {
    icon: HeadphonesIcon,
    title: 'Support & Maintenance',
    description: 'Comprehensive ongoing support and maintenance to keep your systems running smoothly.',
    features: ['24/7 support', 'Proactive monitoring', 'Regular updates', 'Issue resolution']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🚀</span>
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Services</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We deliver comprehensive IT consulting services that drive measurable business growth 
            and accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500', 
              'from-green-500 to-emerald-500',
              'from-orange-500 to-red-500',
              'from-indigo-500 to-purple-500',
              'from-cyan-500 to-blue-500',
              'from-pink-500 to-rose-500',
              'from-emerald-500 to-teal-500'
            ];
            return (
              <div
                key={index}
                className="group bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100 hover:border-gray-200 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${gradients[index % gradients.length]} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-700 flex items-center font-medium">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="group/btn flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
