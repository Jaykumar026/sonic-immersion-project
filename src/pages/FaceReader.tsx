import { useRef, useState, useEffect } from "react";
import FaceReaderHeader from "@/components/FaceReaderHeader";
import CameraFeed from "@/components/CameraFeed";
import ScanResults from "@/components/ScanResults";
import FaceReaderFeatures from "@/components/FaceReaderFeatures";
import PrivacyControls from "@/components/PrivacyControls";
import FaceReaderContact from "@/components/FaceReaderContact";

export interface AnalysisResult {
  emotion: string;
  ageEstimate: number;
  genderEstimate: string;
  confidence: number;
  personality: { trait: string; value: number }[];
  timestamp: string;
  image: string;
}

const FaceReader = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [streaming, setStreaming] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    return () => stopStream();
  }, []);

  const startCamera = async () => {
    try {
      setStatus("Requesting camera...");
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStreaming(true);
        setStatus("");
      }
    } catch (err) {
      console.error(err);
      setStatus("Unable to access camera. Check permissions.");
    }
  };

  const stopStream = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
    setStreaming(false);
    setStatus("");
  };

  const captureFrame = () => {
    if (!streaming || !videoRef.current || !canvasRef.current) return null;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL("image/png");
    }
    return null;
  };

  // MOCK analysis - replace with API call to your ML model/service
  const analyzeFrame = async (imageDataUrl: string): Promise<AnalysisResult> => {
    await new Promise((r) => setTimeout(r, 900));
    const emotions = ["Happy", "Sad", "Neutral", "Surprised", "Angry"];
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    const age = 18 + Math.floor(Math.random() * 40);
    const gender = Math.random() > 0.5 ? "Male" : "Female";
    const personalityTraits = [
      { trait: "Openness", value: Math.round(40 + Math.random() * 60) },
      { trait: "Conscientiousness", value: Math.round(30 + Math.random() * 70) },
      { trait: "Extraversion", value: Math.round(20 + Math.random() * 80) },
      { trait: "Agreeableness", value: Math.round(30 + Math.random() * 70) },
      { trait: "Neuroticism", value: Math.round(10 + Math.random() * 90) },
    ];

    return {
      emotion: randomEmotion,
      ageEstimate: age,
      genderEstimate: gender,
      confidence: 60 + Math.round(Math.random() * 40),
      personality: personalityTraits,
      timestamp: new Date().toISOString(),
      image: imageDataUrl,
    };
  };

  const handleScan = async () => {
    setResults(null);
    setScanning(true);
    setStatus("Capturing frame...");
    const image = captureFrame();
    if (!image) {
      setStatus("No camera feed. Start the camera first.");
      setScanning(false);
      return;
    }
    setStatus("Analyzing...");
    try {
      const analysis = await analyzeFrame(image);
      setResults(analysis);
      setStatus("Scan complete");
    } catch (err) {
      console.error(err);
      setStatus("Analysis failed.");
    }
    setScanning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <FaceReaderHeader />

      <main className="max-w-5xl mx-auto p-6">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-8">
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Understand emotions & personality — in seconds.
            </h2>
            <p className="mt-4 text-gray-600">
              MY Face Reader analyzes a live camera feed to provide emotion detection, age & gender
              estimation, and personality insights. Built with privacy-first design and easy to use UI.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={startCamera}
                className="px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:opacity-90"
              >
                Start Camera
              </button>
              <button
                onClick={handleScan}
                className="px-5 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 font-semibold"
                disabled={scanning}
              >
                Scan My Face
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Note: Results in this demo are mocked. Integrate your analysis API to get real results.
            </p>
          </div>

          <CameraFeed
            videoRef={videoRef}
            streaming={streaming}
            status={status}
            onStart={startCamera}
            onStop={stopStream}
          />
        </section>

        <FaceReaderFeatures />

        {/* SCAN & RESULTS */}
        <section id="scan" className="mt-10 grid lg:grid-cols-3 gap-6">
          <ScanResults
            results={results}
            scanning={scanning}
            onScan={handleScan}
            onClear={() => setResults(null)}
            canvasRef={canvasRef}
          />
          <PrivacyControls />
        </section>

        <FaceReaderContact />
      </main>

      <footer className="mt-12 py-6 bg-white border-t">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} MY Face Reader. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:underline cursor-pointer">Terms</a>
            <a className="hover:underline cursor-pointer">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaceReader;
