import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
            <p>P. O. Box 26633 - 00504<br />Nairobi, Kenya<br />East Africa</p>
          </div>
          <div className="text-center">
            <FaPhone className="text-4xl text-blue-600 mb-4 mx-auto" />
            <p>+254 (0)724 840806<br />+254 (0)733 607620</p>
          </div>
          <div className="text-center">
            <FaEnvelope className="text-4xl text-blue-600 mb-4 mx-auto" />
            <p>
              <a href="mailto:jeff.amon@cue-bar.communications.com" className="hover:text-blue-600">jeff.amon@cue-bar.communications.com</a>
              <br />
              <a href="mailto:jeff.amon1@gmail.com" className="hover:text-blue-600">jeff.amon1@gmail.com</a>
            </p>
          </div>
          <div className="text-center">
            <FaGlobe className="text-4xl text-blue-600 mb-4 mx-auto" />
            <p>
              <a href="http://www.cue-bar.communications.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                www.cue-bar.communications.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact