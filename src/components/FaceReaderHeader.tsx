import { Link } from "react-router-dom";

const FaceReaderHeader = () => {
  return (
    <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
      <Link to="/face-reader" className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white font-bold text-lg">
          MF
        </div>
        <div>
          <h1 className="text-2xl font-extrabold">MY Face Reader</h1>
          <p className="text-sm text-gray-500">AI-Powered Facial Insights at Your Fingertips</p>
        </div>
      </Link>
      <nav className="hidden md:flex gap-4 text-sm">
        <a href="#features" className="hover:underline">
          Features
        </a>
        <a href="#scan" className="hover:underline">
          Scan
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <Link to="/" className="hover:underline">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default FaceReaderHeader;
