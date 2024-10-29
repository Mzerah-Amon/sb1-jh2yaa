import { FaCogs, FaDraftingCompass, FaTools, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa'

const services = [
  { icon: FaCogs, title: 'System Integration', description: 'We integrate cutting-edge broadcast systems tailored to your needs.' },
  { icon: FaDraftingCompass, title: 'Studio Design', description: 'Our experts design state-of-the-art studios for optimal performance.' },
  { icon: FaTools, title: 'Installation', description: 'We provide professional installation services for all our equipment.' },
  { icon: FaChalkboardTeacher, title: 'Training', description: 'Comprehensive training to ensure you get the most out of your equipment.' },
  { icon: FaHeadset, title: 'After-Sales Support', description: 'Ongoing support for both new and existing clients.' },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services