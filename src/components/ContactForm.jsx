import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Reset message after a few seconds (for showcase only)
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="h-screen flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
                <p className="text-center text-gray-600 mb-10">
                    We'd love to hear from you! Fill out the form below or connect with us on social media.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>

                        {/* Success Message */}
                        {submitted && (
                            <p className="text-green-600 font-medium mt-2">
                                ✅ Thanks for contacting us! We’ll get back to you soon.
                            </p>
                        )}
                    </form>

                    {/* Social Links stacked */}
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h3 className="text-xl font-semibold">Connect with us</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600 flex items-center gap-2">
                                    <Facebook size={20} /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 flex items-center gap-2">
                                    <Twitter size={20} /> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-pink-500 flex items-center gap-2">
                                    <Instagram size={20} /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-700 flex items-center gap-2">
                                    <Linkedin size={20} /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
