const PrivacyControls = () => {
  return (
    <aside className="bg-white rounded-2xl p-4 shadow">
      <h5 className="font-semibold">Privacy Controls</h5>
      <p className="text-sm text-gray-500 mt-2">Choose where analysis runs.</p>
      <div className="mt-4 space-y-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="mode" defaultChecked />
          <span className="text-sm">Local (Client-side)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="mode" />
          <span className="text-sm">Secure Backend (Server-side)</span>
        </label>
      </div>
      <p className="text-xs text-gray-400 mt-4">
        We do not store images by default in this demo. Add explicit consent & secure storage for
        production.
      </p>
    </aside>
  );
};

export default PrivacyControls;
