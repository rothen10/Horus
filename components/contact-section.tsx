'use client'

import React from "react"

import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function ContactSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'ventes',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'ventes',
        message: '',
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: 'contact@horusdrones.cm',
      link: 'mailto:contact@horusdrones.cm',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      details: '+237 656 128 888',
      link: 'https://wa.me/237656128888',
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      details: 'Douala, Cameroun',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="relative w-full py-24 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div id="contact-section" className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-accent font-medium">{t('contact.title')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.link}
                className={`group relative bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex p-4 bg-accent/10 rounded-xl mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-foreground/70">{info.details}</p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div
          className={`relative max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Success Message */}
          {isSubmitted && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-2xl z-50">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Merci!</h3>
                <p className="text-foreground/70">Votre message a été envoyé avec succès. Nous vous recontacterons très bientôt.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Prénom</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-foreground/40"
                  placeholder="Jean"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-foreground/40"
                  placeholder="Dupont"
                />
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-foreground/40"
                  placeholder="jean@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-foreground/40"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Service Demandé</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
              >
                <option value="ventes">Ventes de Drones</option>
                <option value="maintenance">Maintenance Experte</option>
                <option value="formations">Formations Professionnelles</option>
                <option value="autre">Autre - À préciser</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-foreground/40 resize-none"
                placeholder="Décrivez votre projet ou vos besoins..."
              ></textarea>
            </div>

            {/* Submit Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="submit"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Envoyer ma Demande</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/237656128888?text=Bonjour, j'aimerais discuter d'un projet drone. Pouvez-vous m'aider ?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Contacter via WhatsApp</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-foreground/60 text-center">
              Nous respectons votre confidentialité. Vos données ne seront utilisées que pour répondre à votre demande.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
