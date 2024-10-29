const equipmentList = [
  'Studio Camera',
  'Field Camera',
  'Studio Gallery Equipment',
  'NLE Bench',
  'Servers',
  'Studio Lighting Rig',
  'Graphics Equipment',
  'Transmitters',
  'STL Links',
  'Studio Designs',
  'Studio Furniture',
]

const Equipment = () => {
  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Equipment Showcase</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {equipmentList.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
              <img src={`/equipment/${item.toLowerCase().replace(' ', '-')}.jpg`} alt={item} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment