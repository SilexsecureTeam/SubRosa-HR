import React, { useState } from 'react';

export default function RequestForm({ isOpen, onClose, packageName, onSuccess }) {
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    companyEmail: '',
    personEmail: '',
    summaryNote: '',
    socialMedia: {
      linkedin: '',
      facebook: '',
      instagram: ''
    },
    package: packageName || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Your request has been sent successfully! We will contact you shortly.' });
        setFormData({
          companyName: '',
          firstName: '',
          lastName: '',
          companyEmail: '',
          personEmail: '',
          summaryNote: '',
          socialMedia: { linkedin: '', facebook: '', instagram: '' },
          package: packageName || ''
        });
        setTimeout(() => {
          onSuccess && onSuccess();
          onClose();
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative bg-neutral-950 border border-neutral-800 rounded-3xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2">
          Request Package
        </h2>
        {packageName && (
          <p className="text-[#C4596A] font-medium mb-6">
            Selected: {packageName}
          </p>
        )}
        <p className="text-neutral-400 text-sm mb-6">
          Fill in your details and we'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
         
          <div>
            <label className="block text-neutral-300 text-sm font-medium mb-1.5">
              Company Name <span className="text-[#C4596A]">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors"
              placeholder="Your company name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral-300 text-sm font-medium mb-1.5">
                First Name <span className="text-[#C4596A]">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-neutral-300 text-sm font-medium mb-1.5">
                Last Name <span className="text-[#C4596A]">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral-300 text-sm font-medium mb-1.5">
                Company Email <span className="text-[#C4596A]">*</span>
              </label>
              <input
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors"
                placeholder="info@yourcompany.com"
              />
            </div>
            <div>
              <label className="block text-neutral-300 text-sm font-medium mb-1.5">
                Person Email <span className="text-[#C4596A]">*</span>
              </label>
              <input
                type="email"
                name="personEmail"
                value={formData.personEmail}
                onChange={handleChange}
                required
                className="w-full bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors"
                placeholder="john.doe@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-neutral-300 text-sm font-medium mb-1.5">
              Summary Note
            </label>
            <textarea
              name="summaryNote"
              value={formData.summaryNote}
              onChange={handleChange}
              rows="3"
              className="w-full bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your HR needs..."
            />
          </div>

          <div>
            <label className="block text-neutral-300 text-sm font-medium mb-2">
              Social Media Profiles
            </label>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 text-sm w-20">LinkedIn</span>
                <input
                  type="url"
                  name="socialMedia.linkedin"
                  value={formData.socialMedia.linkedin}
                  onChange={handleChange}
                  className="flex-1 bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors text-sm"
                  placeholder="https://linkedin.com/company/..."
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 text-sm w-20">Facebook</span>
                <input
                  type="url"
                  name="socialMedia.facebook"
                  value={formData.socialMedia.facebook}
                  onChange={handleChange}
                  className="flex-1 bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors text-sm"
                  placeholder="https://facebook.com/..."
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 text-sm w-20">Instagram</span>
                <input
                  type="url"
                  name="socialMedia.instagram"
                  value={formData.socialMedia.instagram}
                  onChange={handleChange}
                  className="flex-1 bg-neutral-900/60 border border-neutral-700 rounded-xl px-4 py-2.5 text-white placeholder-neutral-500 focus:border-[#C4596A] focus:outline-none transition-colors text-sm"
                  placeholder="https://instagram.com/..."
                />
              </div>
            </div>
          </div>

        
          {submitStatus && (
            <div className={`p-4 rounded-xl ${
              submitStatus.type === 'success' 
                ? 'bg-green-900/30 border border-green-700 text-green-300' 
                : 'bg-red-900/30 border border-red-700 text-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#C4596A] hover:bg-[#b06a74] text-white font-medium py-3.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
        </form>
      </div>
    </div>
  );
}