"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      alert("Name and Email are required!")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D] overflow-hidden">
      <div className="absolute right-12 bottom-6 w-96 h-96 opacity-15 pointer-events-none hidden xl:block">
        <Image src="/images/resource/contact-shape-1-2.png" alt="shape" width={384} height={384} className="object-contain" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading tag="Contact Us">
                Always Happy to{" "}
                <span className="text-[#FF6B1E]">Hear from You</span>
              </SectionHeading>

            <p className="text-zinc-400 font-light leading-relaxed">
              Connect with our technical design coordinators or operations leads today to initiate database reviews, frontend builds, or acquisition scoping.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/5">
              <div className="space-y-3">
                <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white">Location</h4>
                <div className="flex gap-2 items-start text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                  <Image src="/images/icons/location.svg" alt="loc" width={16} height={16} className="w-4 h-4 object-contain mt-0.5 filter invert" />
                    <p>Kigali, Rwanda</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white">Email</h4>
                <div className="flex gap-2 items-start text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                  <Image src="/images/icons/email.svg" alt="email" width={16} height={16} className="w-4 h-4 object-contain mt-0.5 filter invert" />
                  <div className="space-y-1">
                    <a href="mailto:info@abbadigital.com" className="hover:text-[#FF6B1E] block">info@abbadigital.com</a>
                    <a href="mailto:support@abbadigital.com" className="hover:text-[#FF6B1E] block">support@abbadigital.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[85%] aspect-video rounded-3xl overflow-hidden border border-white/5 shrink-0 hidden sm:block shadow-2xl">
              <Image src="/images/resource/contact-1-1.jpg" alt="Support" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7 relative bg-[#151515] p-8 sm:p-10 rounded-[35px] border border-white/5 shadow-2xl">
            <div className="absolute right-[-40px] top-[-40px] w-28 h-28 opacity-10 pointer-events-none hidden xl:block">
              <Image src="/images/resource/contact-shape-1-1.png" alt="shape bg" width={112} height={112} className="object-contain animate-bounce" />
            </div>

            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="inline-flex w-16 h-16 rounded-full bg-[#FF6B1E]/15 border border-[#FF6B1E] items-center justify-center text-2xl text-[#FF6B1E]">
                  &check;
                </div>
                <h3 className="font-heading text-2xl font-extrabold uppercase text-white tracking-wide">
                  Submission Received!
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                  Thank you. Our technical operations coordinator will contact you within 12 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="minimal-input uppercase font-bold text-xs tracking-wider"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="minimal-input uppercase font-bold text-xs tracking-wider"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="minimal-input uppercase font-bold text-xs tracking-wider"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (Optional)"
                    className="minimal-input uppercase font-bold text-xs tracking-wider"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type Your Message *"
                    rows={4}
                    className="minimal-input uppercase font-bold text-xs tracking-wider"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
