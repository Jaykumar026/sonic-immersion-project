import { RefObject } from "react";
import { AnalysisResult } from "@/pages/FaceReader";

interface ScanResultsProps {
  results: AnalysisResult | null;
  scanning: boolean;
  onScan: () => void;
  onClear: () => void;
  canvasRef: RefObject<HTMLCanvasElement>;
}

const ScanResults = ({ results, scanning, onScan, onClear, canvasRef }: ScanResultsProps) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow">
      <h4 className="font-bold">Scan & Results</h4>
      <p className="text-sm text-gray-500 mt-1">
        Take a snapshot from the camera and see instant insights.
      </p>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <div className="rounded-lg overflow-hidden bg-gray-100 h-64 flex items-center justify-center">
            {results ? (
              <img src={results.image} alt="snapshot" className="object-cover w-full h-full" />
            ) : (
              <div className="text-gray-400">Snapshot will appear here after a scan.</div>
            )}
          </div>
        </div>

        <div>
          <div className="p-3 border rounded-lg bg-white">
            <h5 className="font-semibold">Latest Analysis</h5>
            {!results && (
              <p className="text-sm text-gray-500 mt-2">No results yet — click Scan My Face.</p>
            )}

            {results && (
              <div className="mt-3 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Emotion</span>
                  <strong>{results.emotion}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Age (est.)</span>
                  <strong>{results.ageEstimate}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender (est.)</span>
                  <strong>{results.genderEstimate}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Confidence</span>
                  <strong>{results.confidence}%</strong>
                </div>
                <div>
                  <div className="text-gray-600 text-xs mt-2">Personality</div>
                  <ul className="mt-2 space-y-1">
                    {results.personality.map((p) => (
                      <li key={p.trait} className="flex justify-between text-sm">
                        <span>{p.trait}</span>
                        <span className="font-mono">{p.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs text-gray-400">
                  Scanned on {new Date(results.timestamp).toLocaleString()}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={onScan}
              disabled={scanning}
              className="flex-1 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
              {scanning ? "Scanning..." : "Scan Now"}
            </button>
            <button
              onClick={onClear}
              className="px-4 py-2 rounded-md border hover:bg-gray-50 transition-colors"
            >
              Clear
            </button>
          </div>

          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
      </div>
    </div>
  );
};

export default ScanResults;
