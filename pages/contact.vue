<script setup lang="ts">
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/vue/24/outline'

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert('Thank you for contacting us! We will get back to you shortly.')
  contactForm.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}

useHead({
  title: 'Contact Us - JTR Auction House',
  meta: [
    { name: 'description', content: 'Contact JTR Auction House for inquiries about property auctions, bidding registration, or general questions.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Page Header -->
    <div class="bg-white border-b border-slate-200">
      <div class="section-container py-12">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p class="text-lg text-slate-600">
            Have questions? We're here to help. Get in touch with our team.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="section-container py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contact Information -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Office Information -->
          <div class="bg-white rounded-lg border border-slate-200 p-6">
            <h2 class="font-semibold text-lg mb-4">Head Office</h2>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <MapPinIcon class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="font-medium text-slate-900 mb-1">Address</p>
                  <p class="text-sm text-slate-600">
                    123 Jalan Auction,<br />
                    Taman Business Centre,<br />
                    50000 Kuala Lumpur,<br />
                    Malaysia
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <PhoneIcon class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="font-medium text-slate-900 mb-1">Phone</p>
                  <a href="tel:+60312345678" class="text-sm text-slate-600 hover:text-primary-500">
                    +603-1234 5678
                  </a>
                  <br />
                  <a href="tel:+60312345679" class="text-sm text-slate-600 hover:text-primary-500">
                    +603-1234 5679
                  </a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <EnvelopeIcon class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="font-medium text-slate-900 mb-1">Email</p>
                  <a href="mailto:info@jtr.com.my" class="text-sm text-slate-600 hover:text-primary-500">
                    info@jtr.com.my
                  </a>
                  <br />
                  <a href="mailto:auction@jtr.com.my" class="text-sm text-slate-600 hover:text-primary-500">
                    auction@jtr.com.my
                  </a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <ClockIcon class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="font-medium text-slate-900 mb-1">Office Hours</p>
                  <p class="text-sm text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday & Public Holidays: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- WhatsApp Contact -->
          <div class="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 class="font-semibold text-lg text-green-900 mb-2">Quick Response</h3>
            <p class="text-sm text-green-700 mb-4">
              Get instant replies to your questions via WhatsApp
            </p>
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg border border-slate-200 p-8">
            <h2 class="font-semibold text-2xl mb-2">Send us a Message</h2>
            <p class="text-slate-600 mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BaseInput
                  v-model="contactForm.name"
                  label="Full Name"
                  placeholder="John Doe"
                  required
                />
                <BaseInput
                  v-model="contactForm.email"
                  type="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BaseInput
                  v-model="contactForm.phone"
                  type="tel"
                  label="Phone Number"
                  placeholder="+60 12-345 6789"
                  required
                />
                <div class="space-y-1.5">
                  <label class="block text-sm font-medium text-slate-900">
                    Subject
                    <span class="text-red-500">*</span>
                  </label>
                  <select v-model="contactForm.subject" class="input" required>
                    <option value="">Select a subject</option>
                    <option value="property-inquiry">Property Inquiry</option>
                    <option value="auction-registration">Auction Registration</option>
                    <option value="ebidding">eBidding Support</option>
                    <option value="sell-property">Sell My Property</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-slate-900">
                  Message
                  <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="contactForm.message"
                  rows="6"
                  class="input"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <BaseButton type="submit" variant="primary" size="lg" class="flex-1">
                  Send Message
                </BaseButton>
                <BaseButton type="button" variant="outline" size="lg" @click="contactForm = { name: '', email: '', phone: '', subject: '', message: '' }">
                  Clear Form
                </BaseButton>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Map Placeholder -->
      <div class="mt-12">
        <div class="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div class="aspect-[21/9] bg-slate-200 flex items-center justify-center text-slate-500">
            <div class="text-center">
              <MapPinIcon class="w-12 h-12 mx-auto mb-2" />
              <p class="font-medium">Map Location</p>
              <p class="text-sm">Google Maps Integration Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
