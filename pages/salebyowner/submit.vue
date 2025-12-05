<script setup lang="ts">
import {
  ClipboardDocumentCheckIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Submit Your Property for Auction | JTR Auction House',
  meta: [
    { name: 'description', content: 'Submit your property details to sell through JTR Auction House. Free consultation and property evaluation.' }
  ]
})

// Form state
const formData = reactive({
  // Owner details
  ownerName: '',
  ownerIC: '',
  ownerPhone: '',
  ownerEmail: '',

  // Property details
  propertyAddress: '',
  propertyState: '',
  propertyType: '',
  landArea: '',
  builtUpArea: '',
  tenure: '',
  askingPrice: '',

  // Additional info
  reason: '',
  additionalInfo: '',
  consent: false
})

// Form submission state
const isSubmitting = ref(false)
const isSubmitted = ref(false)

// State options
const stateOptions = [
  'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan',
  'Pahang', 'Perak', 'Perlis', 'Penang', 'Sabah',
  'Sarawak', 'Selangor', 'Terengganu', 'Kuala Lumpur', 'Labuan', 'Putrajaya'
]

// Property type options
const propertyTypes = [
  'Terrace House', 'Semi-Detached', 'Bungalow', 'Condominium',
  'Apartment', 'Commercial Shop', 'Office', 'Industrial', 'Land', 'Other'
]

// Tenure options
const tenureOptions = [
  { value: 'freehold', label: 'Freehold' },
  { value: 'leasehold', label: 'Leasehold' },
  { value: 'malay-reserve', label: 'Malay Reserve' }
]

// Reason options
const reasonOptions = [
  'Quick sale needed',
  'Relocation',
  'Financial reasons',
  'Upgrade/Downsize',
  'Investment disposal',
  'Inheritance',
  'Other'
]

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  isSubmitted.value = true
  isSubmitting.value = false
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b border-slate-200">
      <div class="section-container py-4">
        <div class="flex items-center gap-2 text-sm">
          <NuxtLink to="/salebyowner" class="text-slate-500 hover:text-primary-500">
            Sale by Owner
          </NuxtLink>
          <ChevronRightIcon class="w-4 h-4 text-slate-400" />
          <span class="text-slate-900 font-medium">Submit Property</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-secondary-500 to-secondary-700 text-white">
      <div class="section-container py-12 lg:py-16">
        <NuxtLink to="/salebyowner" class="inline-flex items-center gap-2 text-secondary-200 hover:text-white mb-6">
          <ArrowLeftIcon class="w-4 h-4" />
          Back to Sale by Owner
        </NuxtLink>
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <ClipboardDocumentCheckIcon class="w-7 h-7 text-white" />
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold">
            Submit Your Property
          </h1>
        </div>
        <p class="text-lg text-secondary-100 max-w-2xl">
          Fill out the form below and our team will contact you within 24 hours to discuss your property.
        </p>
      </div>
    </section>

    <!-- Form Section -->
    <section class="section-container py-12">
      <div class="max-w-3xl mx-auto">
        <!-- Success Message -->
        <div v-if="isSubmitted" class="bg-green-50 rounded-xl border border-green-200 p-8 text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircleIcon class="w-8 h-8 text-green-600" />
          </div>
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Submission Received!</h2>
          <p class="text-slate-600 mb-6">
            Thank you for submitting your property. Our team will contact you within 24 hours
            to discuss the next steps.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/">
              <BaseButton variant="primary" size="md">
                Return to Home
              </BaseButton>
            </NuxtLink>
            <NuxtLink to="/properties">
              <BaseButton variant="outline" size="md">
                Browse Properties
              </BaseButton>
            </NuxtLink>
          </div>
        </div>

        <!-- Form -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-8">
          <!-- Owner Details Section -->
          <div class="bg-white rounded-xl border border-slate-200 p-6">
            <h2 class="text-lg font-bold text-slate-900 mb-6">Owner Details</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-slate-900 mb-2">
                  Full Name (as per IC) <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.ownerName"
                  type="text"
                  required
                  class="input"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-900 mb-2">
                  IC Number <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.ownerIC"
                  type="text"
                  required
                  class="input"
                  placeholder="e.g., 880101-14-5678"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-900 mb-2">
                  Phone Number <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.ownerPhone"
                  type="tel"
                  required
                  class="input"
                  placeholder="e.g., 012-345 6789"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-900 mb-2">
                  Email Address <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.ownerEmail"
                  type="email"
                  required
                  class="input"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          <!-- Property Details Section -->
          <div class="bg-white rounded-xl border border-slate-200 p-6">
            <h2 class="text-lg font-bold text-slate-900 mb-6">Property Details</h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-slate-900 mb-2">
                  Property Address <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.propertyAddress"
                  required
                  rows="3"
                  class="input"
                  placeholder="Enter full property address"
                ></textarea>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-900 mb-2">
                    State <span class="text-red-500">*</span>
                  </label>
                  <select v-model="formData.propertyState" required class="input">
                    <option value="">Select State</option>
                    <option v-for="state in stateOptions" :key="state" :value="state">
                      {{ state }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-900 mb-2">
                    Property Type <span class="text-red-500">*</span>
                  </label>
                  <select v-model="formData.propertyType" required class="input">
                    <option value="">Select Type</option>
                    <option v-for="type in propertyTypes" :key="type" :value="type">
                      {{ type }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-900 mb-2">
                    Land Area (sq ft)
                  </label>
                  <input
                    v-model="formData.landArea"
                    type="text"
                    class="input"
                    placeholder="e.g., 2,000"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-900 mb-2">
                    Built-up Area (sq ft)
                  </label>
                  <input
                    v-model="formData.builtUpArea"
                    type="text"
                    class="input"
                    placeholder="e.g., 1,500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-900 mb-2">
                    Tenure <span class="text-red-500">*</span>
                  </label>
                  <select v-model="formData.tenure" required class="input">
                    <option value="">Select Tenure</option>
                    <option v-for="option in tenureOptions" :key="option.value" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-900 mb-2">
                    Expected/Asking Price (RM)
                  </label>
                  <input
                    v-model="formData.askingPrice"
                    type="text"
                    class="input"
                    placeholder="e.g., 500,000"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Information Section -->
          <div class="bg-white rounded-xl border border-slate-200 p-6">
            <h2 class="text-lg font-bold text-slate-900 mb-6">Additional Information</h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-slate-900 mb-2">
                  Reason for Selling
                </label>
                <select v-model="formData.reason" class="input">
                  <option value="">Select Reason (Optional)</option>
                  <option v-for="reason in reasonOptions" :key="reason" :value="reason">
                    {{ reason }}
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-900 mb-2">
                  Additional Information
                </label>
                <textarea
                  v-model="formData.additionalInfo"
                  rows="4"
                  class="input"
                  placeholder="Any additional details about your property (optional)"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Consent & Submit -->
          <div class="bg-white rounded-xl border border-slate-200 p-6">
            <label class="flex items-start gap-3 cursor-pointer">
              <input
                v-model="formData.consent"
                type="checkbox"
                required
                class="mt-1 w-5 h-5 rounded border-slate-300 text-primary-500 focus:ring-primary-500"
              />
              <span class="text-sm text-slate-600">
                I consent to JTR Auction House contacting me regarding my property submission.
                I understand that submitting this form does not guarantee my property will be listed for auction.
                <span class="text-red-500">*</span>
              </span>
            </label>

            <div class="mt-6">
              <BaseButton
                type="submit"
                variant="primary"
                size="lg"
                block
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Submitting...</span>
                <span v-else>Submit Property</span>
              </BaseButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
