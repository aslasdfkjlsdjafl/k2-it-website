import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp Solutions",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "K² transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% on operational costs while improving our system performance dramatically.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, Digital Innovations",
    company: "Digital Innovations", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The custom software solution K² developed for us increased our productivity by 60%. Their team understood our needs perfectly and delivered beyond expectations.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, FinanceFirst",
    company: "FinanceFirst",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Security was our biggest concern, and K² delivered a comprehensive cybersecurity solution that gives us complete peace of mind. Exceptional service and support.",
    rating: 5
  }
];

const companies = [
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=120&h=60&fit=crop", 
  "https://images.unsplash.com/photo-1554774853-719586f82d77?w=120&h=60&fit=crop",
  "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=120&h=60&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop"
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted Companies */}
        <div className="text-center mb-20">
          <p className="text-gray-600 font-medium mb-8">Trusted by industry leaders</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((_logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-xs">LOGO</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have to say about working with K²
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Quote icon */}
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-blue-600 mb-6" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">500+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
