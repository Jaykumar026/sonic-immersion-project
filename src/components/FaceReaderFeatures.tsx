const features = [
  { title: "Real-time Face Scanning", desc: "Capture and analyze face from webcam" },
  { title: "Emotion Detection", desc: "Identify primary emotions with confidence scores" },
  { title: "Age & Gender Estimation", desc: "Estimate age range and likely gender" },
  { title: "Personality Insights", desc: "Suggest personality traits based on expression patterns" },
  { title: "Privacy-first", desc: "Option to run analysis locally or on your secure backend" },
  { title: "Mobile-friendly", desc: "Works across devices with responsive UI" },
];

const FaceReaderFeatures = () => {
  return (
    <section id="features" className="mt-10">
      <h3 className="text-2xl font-bold">Features</h3>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-semibold">{f.title}</h4>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaceReaderFeatures;
