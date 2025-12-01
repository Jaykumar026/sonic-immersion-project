import { RefObject } from "react";

interface CameraFeedProps {
  videoRef: RefObject<HTMLVideoElement>;
  streaming: boolean;
  status: string;
  onStart: () => void;
  onStop: () => void;
}

const CameraFeed = ({ videoRef, streaming, status, onStart, onStop }: CameraFeedProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow flex flex-col gap-4">
      <div className="relative rounded-lg overflow-hidden bg-gray-900 h-64 flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        />
        {!streaming && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
            <p className="font-semibold">Camera is off</p>
            <p className="text-xs mt-1">Click "Start Camera" to allow access</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <button
            onClick={onStart}
            className="px-3 py-2 rounded-md bg-sky-600 text-white text-sm hover:bg-sky-700 transition-colors"
          >
            Start
          </button>
          <button
            onClick={onStop}
            className="px-3 py-2 rounded-md bg-gray-200 text-sm hover:bg-gray-300 transition-colors"
          >
            Stop
          </button>
        </div>
        <div className="text-sm text-gray-500">{status}</div>
      </div>
    </div>
  );
};

export default CameraFeed;
