import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Star,
} from "lucide-react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BRAND, CONTACT, SOCIAL_LINKS } from "../data/site";
import { useDocumentTitle } from "../hooks/useMotion";
import { cn } from "../lib/utils";

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Working Hours: 24/7",
    value: "Currently: Open to Work",
    href: null,
    gradient: "from-cyan-500 to-pink-500",
  },
];

const SOCIAL_META = {
  github: { icon: SiGithub, color: "hover:text-white" },
  linkedin: { icon: SiLinkedin, color: "hover:text-blue-400" },
  instagram: { icon: SiInstagram, color: "hover:text-pink-400" },
  facebook: { icon: SiFacebook, color: "hover:text-blue-500" },
};

const ContactScene = () => {
  useDocumentTitle(`Contact · ${BRAND.name}`);
  const location = useLocation();
  const preset = location.state?.project
    ? `I would like to request access to ${location.state.project}.`
    : "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: preset,
  });

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (preset) {
      setFormData((current) =>
        current.message ? current : { ...current, message: preset }
      );
    }
  }, [preset]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = process.env.REACT_APP_CONTACT_FORM;
    setIsSubmitting(true);

    try {
      if (!endpoint) {
        throw new Error("Missing form endpoint");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success(
        <div>
          <strong>Message sent successfully!</strong>
          <div>Thank you for reaching out. I'll get back to you within 24 hours.</div>
        </div>
      );
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error(
        <div>
          <strong>Error sending message</strong>
          <div>Please try again later.</div>
        </div>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-copy scene-scroll"
      aria-labelledby="contact-title"
    >
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-8 pt-16 lg:px-8 lg:pt-10">
        <div
          className={cn(
            "mb-8 text-center transition-all duration-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--label)]/25 bg-[var(--surface-strong)] px-3 py-1.5 shadow-[0_8px_20px_rgba(20,22,40,0.08)] backdrop-blur-md dark:border-transparent dark:bg-transparent dark:px-0 dark:py-0 dark:shadow-none">
            <MessageCircle className="h-4 w-4 animate-pulse text-purple-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-purple-400">
              Let's Connect
            </span>
            <MessageCircle className="h-4 w-4 animate-pulse text-cyan-400 delay-1000" />
          </div>

          <h1 id="contact-title" className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-white">Get In</span>
            <span className="project-gradient"> Touch</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-black subpixel-antialiased dark:text-[#cbd5e1]">
            Have a project in mind or want to collaborate? I'm always excited to discuss new
            opportunities and bring innovative ideas to life. Let's create something amazing
            together!
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div
            className={cn(
              "space-y-6 transition-all delay-200 duration-1000",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}
          >
            <div className="space-y-4">
              <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-white">
                <Star className="h-5 w-5 animate-pulse text-purple-400" />
                Contact Information
              </h2>

              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                const ValueTag = info.href ? "a" : "p";
                return (
                  <div key={info.title} className="group relative transition-all duration-300 hover:scale-105">
                    <div
                      className={cn(
                        "absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 blur-lg transition-all duration-300 group-hover:opacity-20",
                        info.gradient
                      )}
                    />
                    <div className="relative rounded-lg border border-gray-700/50 bg-gray-900/40 p-4 backdrop-blur-xl transition-all duration-300 group-hover:border-gray-600/70">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "relative rounded-lg bg-gradient-to-br bg-opacity-10 p-3 transition-transform duration-300 group-hover:scale-110",
                            info.gradient
                          )}
                        >
                          <div
                            className={cn(
                              "absolute inset-0 rounded-lg bg-gradient-to-br opacity-20 blur transition-opacity duration-300 group-hover:opacity-30",
                              info.gradient
                            )}
                          />
                          <Icon className="relative h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 text-base font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
                            {info.title}
                          </h3>
                          <ValueTag
                            {...(info.href
                              ? {
                                  href: info.href,
                                  ...(info.href.startsWith("http")
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {}),
                                }
                              : {})}
                            className="text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-400"
                          >
                            {info.value}
                          </ValueTag>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-400" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
                <Sparkles className="h-4 w-4 animate-pulse text-cyan-400" />
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const meta = SOCIAL_META[social.id];
                  if (!meta) return null;
                  const Icon = meta.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={cn(
                        "group rounded-lg border border-gray-700/50 bg-gray-800/50 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-gray-600/70",
                        meta.color
                      )}
                    >
                      <Icon className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-current" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all delay-400 duration-1000",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            )}
          >
            <div className="group relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-lg transition-all duration-300 group-hover:blur-xl" />
              <div className="relative rounded-xl border border-gray-700/50 bg-gray-900/40 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-purple-400/50">
                <h2 className="mb-5 flex items-center gap-3 text-xl font-bold text-white">
                  <Send className="h-5 w-5 text-cyan-400" />
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-gray-600/50 bg-gray-800/50 px-4 py-2.5 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-purple-400/50 focus:bg-gray-800/70 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      disabled={isSubmitting}
                      className="w-full rounded-lg border border-gray-600/50 bg-gray-800/50 px-4 py-2.5 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:bg-gray-800/70 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full resize-none rounded-lg border border-gray-600/50 bg-gray-800/50 px-4 py-2.5 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-pink-400/50 focus:bg-gray-800/70 focus:outline-none"
                      placeholder="Hello! I'd love to discuss a project with you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25",
                      isSubmitting && "cursor-not-allowed opacity-70"
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-400">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    Usually responds within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactScene;
