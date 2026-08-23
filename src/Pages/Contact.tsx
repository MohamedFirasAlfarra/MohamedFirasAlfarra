import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'sending'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mqpzjykg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'fralfarra11@gmail.com', href: 'mailto:fralfarra11@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+963940319051', href: 'tel:+963940319051' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+963940319051', href: 'https://wa.me/963940319051' },
    { icon: MapPin, label: 'Location', value: 'Syria, Damascus', href: 'https://maps.google.com/?q=Damascus,Syria' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/MohamedFirasAlfarra' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamedfirasalfarra' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/code.withfiras?igsh=MW1nODFydmc2aThpOQ==' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/963940319051' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:text-white transition-all duration-300 hover:scale-110 ${social.label === 'WhatsApp' ? 'hover:bg-gradient-to-br hover:from-green-600 hover:to-green-700' : 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600'}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 text-gray-900 dark:text-white transition-colors"
                  placeholder="Mohamed Firas Alfarra"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 text-gray-900 dark:text-white transition-colors"
                  placeholder="mohamedfirasalfarra@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status !== 'sending' && <Send size={20} />}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center font-semibold">
                  Message sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-center font-semibold">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
