import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FaceReaderContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="mt-10 bg-white p-6 rounded-2xl shadow">
      <h4 className="font-bold">Contact Us</h4>
      <p className="text-sm text-gray-500 mt-1">
        Have questions or want a tailored integration? Send a message.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 grid md:grid-cols-2 gap-4">
        <input
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          className="p-3 border rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default FaceReaderContact;
