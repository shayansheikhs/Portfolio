import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, CheckCircle2, AlertCircle, Send, Globe, Award, Sparkles } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message text is required';
      isValid = false;
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = 'Please provide a bit more detail (min 15 chars)';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error immediately if user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Something went wrong. Please email me directly at shayanshaikh530@gmail.com');
      }
    } catch (err) {
      console.error('Send Error:', err);
      alert('Something went wrong. Please email me directly at shayanshaikh530@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      label: 'Direct Email',
      value: 'shayanshaikh530@gmail.com',
      href: 'mailto:shayanshaikh530@gmail.com',
      icon: <Mail size={18} className="text-emerald-400" />
    },
    {
      label: 'Secure WhatsApp',
      value: '+92 320 2950035',
      href: 'https://wa.me/923202950035',
      icon: <Phone size={18} className="text-emerald-400" />
    }
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com', id: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shayanshaikh1', id: 'linkedin' },
    { label: 'Upwork Portfolio', href: 'https://upwork.com', id: 'upwork' },
    { label: 'Fiverr Pro', href: 'https://fiverr.com', id: 'fiverr' },
  ];

  return (
    <section id="contact" className="py-24 bg-dark-bg dark:bg-dark-bg light:bg-light-bg relative border-t border-white/5 dark:border-t-white/5 light:border-t-black/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Details & Info Panel (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2 block">
                / 08. GET IN TOUCH
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white dark:text-white light:text-slate-900 tracking-tighter uppercase mb-4 leading-none">
                Let's Overhaul Your Digital Storefront
              </h2>
              <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed font-sans mb-8">
                Ready to launch a new theme, migrate catalog data securely, or optimize checkout performance? Leave a message 
                and receive a custom scope assessment within 24 hours.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 mb-8">
                {contactOptions.map((opt) => (
                  <a
                    key={opt.label}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-emerald-500/20 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                      {opt.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{opt.label}</p>
                      <p className="text-sm sm:text-base font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                        {opt.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Platforms Row */}
            <div>
              <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-4">Contractor Portals:</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-slate-200 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-50 text-xs text-gray-400 hover:text-emerald-400 transition-all"
                  >
                    <span>{soc.label}</span>
                    <ExternalLink size={12} className="text-gray-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Interactive Form Panel (Col 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel p-8 border border-white/5 dark:border-white/5 light:border-slate-200 shadow-2xl relative overflow-hidden">
              
              {/* Submission Complete Success View */}
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-scale-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white dark:text-white light:text-slate-900 mb-2">
                    Scope Request Received!
                  </h3>
                  <p className="max-w-md text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-slate-600 mb-8 leading-relaxed font-sans">
                    Thank you for reaching out. I have received your request and will review the specifications. 
                    Expect a detailed response at your email address within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Grid for Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name-input" className="text-[11px] font-mono font-bold text-gray-400 dark:text-gray-400 light:text-slate-600 uppercase tracking-wider">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${
                          errors.name
                            ? 'border-red-500/50'
                            : 'border-white/5 dark:border-white/5 light:border-slate-200 focus:border-emerald-500/30'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle size={10} /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email-input" className="text-[11px] font-mono font-bold text-gray-400 dark:text-gray-400 light:text-slate-600 uppercase tracking-wider">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${
                          errors.email
                            ? 'border-red-500/50'
                            : 'border-white/5 dark:border-white/5 light:border-slate-200 focus:border-emerald-500/30'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle size={10} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject Line */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject-input" className="text-[11px] font-mono font-bold text-gray-400 dark:text-gray-400 light:text-slate-600 uppercase tracking-wider">
                      Subject <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="subject-input"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Shopify Store Setup, WordPress Custom Site, etc."
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${
                        errors.subject
                          ? 'border-red-500/50'
                          : 'border-white/5 dark:border-white/5 light:border-slate-200 focus:border-emerald-500/30'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle size={10} /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message details */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message-textarea" className="text-[11px] font-mono font-bold text-gray-400 dark:text-gray-400 light:text-slate-600 uppercase tracking-wider">
                      Message / Specifications <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message-textarea"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline any key custom layouts, integrations, or speed optimization issues..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${
                        errors.message
                          ? 'border-red-500/50'
                          : 'border-white/5 dark:border-white/5 light:border-slate-200 focus:border-emerald-500/30'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle size={10} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-500/20 hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Validating Payload...
                      </>
                    ) : (
                      <>
                        Submit Specifications
                        <Send size={14} />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
