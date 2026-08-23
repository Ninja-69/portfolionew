import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MentorshipSectionProps {
  onBack: () => void;
}

export const MentorshipSection: React.FC<MentorshipSectionProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [experience, setExperience] = useState('');
  const [budget, setBudget] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'loading' | 'success'>('loading');
  const [loaderText, setLoaderText] = useState('Analyzing responses...');

  // Simulated analysis steps
  useEffect(() => {
    if (isSubmitting) {
      const timers = [
        setTimeout(() => setLoaderText('Checking mentor availability...'), 1000),
        setTimeout(() => setLoaderText('Verifying dropshipping blueprint bonus...'), 2000),
        setTimeout(() => {
          setSubmitStatus('success');
          setIsSubmitting(false);
        }, 3000)
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [isSubmitting]);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const startApplication = () => {
    setIsModalOpen(true);
    setCurrentStep(1);
    setExperience('');
    setBudget('');
    setObstacle('');
    setName('');
    setEmail('');
    setContact('');
    setSubmitStatus('loading');
    setIsSubmitting(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !contact) return;
    setIsSubmitting(true);
  };

  // Check if current step is valid to proceed
  const isStepValid = () => {
    if (currentStep === 1) return experience !== '';
    if (currentStep === 2) return budget !== '';
    if (currentStep === 3) return obstacle !== '';
    if (currentStep === 4) return name && email && contact;
    return true;
  };

  return (
    <div className="w-full flex flex-col items-center min-h-[90vh] py-6 relative">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="self-start mb-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to portfolio
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full max-w-[650px] mx-auto py-8">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/60 text-[11px] sm:text-[13px] tracking-[0.25em] font-medium uppercase mb-4"
        >
          Want To See If You Qualify For Mentorship?
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[26px] sm:text-[38px] md:text-[44px] font-bold text-white leading-[1.15] mb-6 tracking-tight max-w-[600px] mx-auto"
        >
          Learn how to build an <span className="text-[#cca352] font-extrabold">AI Web Design Agency</span> Directly From 7-Figure Brand Owners
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-[14px] sm:text-[16px] leading-[1.5] max-w-[500px] mx-auto font-light mb-8"
        >
          No experience needed. No team needed.<br className="hidden sm:inline" />
          Just the same AI-powered system my team and I use across our own brands.
        </motion.p>

        {/* CTA Button with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-[320px] sm:max-w-[380px] mx-auto mb-6"
        >
          <button
            onClick={startApplication}
            className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-[15px] sm:text-[17px] tracking-wide py-4 sm:py-4.5 px-6 rounded-[12px] flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(225,29,72,0.45)] hover:shadow-[0_0_50px_rgba(225,29,72,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>SEE IF YOU QUALIFY</span>
            <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-[11px] sm:text-[13px] font-light max-w-[420px] leading-relaxed"
        >
          (And As A Special Bonus, I'll Send You The <span className="text-[#cca352] font-bold">AI Web Design Blueprint</span> For Free!)
        </motion.p>
      </div>

      {/* Footer */}
      <footer className="w-full text-center mt-auto pt-16">
        <p className="text-white/20 text-[10px] tracking-wide uppercase font-light">
          ©2026 ecommercescalingsecrets.com All Rights Reserved
        </p>
      </footer>

      {/* Interactive Modal Questionnaire */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#0c0c0c] border border-white/10 rounded-[28px] w-full max-w-[440px] p-6 sm:p-8 flex flex-col relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
            >
              {/* Close Button */}
              {!isSubmitting && submitStatus !== 'success' && (
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              {/* Progress Header */}
              {!isSubmitting && submitStatus !== 'success' && (
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex justify-between items-center text-[11px] font-bold text-white/40 uppercase tracking-wider">
                    <span>Qualification Quiz</span>
                    <span>Step {currentStep} of 4</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#e11d48]"
                      animate={{ width: `${(currentStep / 4) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}

              {/* Slideable Questionnaire steps */}
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  /* Loading / Analyzing State */
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="relative w-16 h-16 mb-6">
                      {/* Cosmic rotating ring loader */}
                      <div className="absolute inset-0 rounded-full border-4 border-white/5" />
                      <div className="absolute inset-0 rounded-full border-4 border-t-[#e11d48] border-r-[#e11d48] animate-spin" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Analyzing Qualifications</h3>
                    <p className="text-[13px] text-white/50 animate-pulse">{loaderText}</p>
                  </motion.div>
                ) : submitStatus === 'success' && !isSubmitting ? (
                  /* Success Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-4"
                  >
                    {/* Success Icon */}
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <h3 className="text-[22px] font-bold text-white tracking-tight mb-3">
                      You Qualify!
                    </h3>
                    <p className="text-[13px] text-white/70 leading-relaxed max-w-[320px] mb-8 font-light">
                      We have reviewed your profile and confirmed a slot matches your criteria. Let's schedule a 1-on-1 strategy call with Adil or our lead strategist.
                    </p>

                    <a
                      href="https://calendly.com/adilsiddiqui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-black font-bold py-3.5 rounded-[12px] text-[14px] flex items-center justify-center gap-2 hover:bg-white/90 active:scale-98 transition-all duration-300"
                    >
                      Book 1-on-1 Strategy Call
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>

                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-[12px] text-white/40 hover:text-white/60 transition-colors mt-4 cursor-pointer"
                    >
                      Close application
                    </button>
                  </motion.div>
                ) : (
                  /* Form Steps */
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    {/* Step 1: Experience */}
                    {currentStep === 1 && (
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[18px] font-bold text-white tracking-tight mb-2">
                          What is your e-commerce experience?
                        </h4>
                        {[
                          'Complete Beginner (No sales yet)',
                          'Intermediate (Have built stores, some sales)',
                          'Advanced (Consistent sales, want to scale to 7-figures)'
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() => setExperience(option)}
                            className={`w-full text-left px-5 py-4 rounded-[12px] border text-[13px] sm:text-[14px] transition-all flex items-center justify-between cursor-pointer ${
                              experience === option
                                ? 'bg-white/10 border-white/30 text-white font-medium'
                                : 'bg-white/[0.02] border-white/5 text-white/60 hover:bg-white/[0.05] hover:text-white'
                            }`}
                          >
                            <span>{option}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                              experience === option ? 'border-[#e11d48] bg-[#e11d48]' : 'border-white/20'
                            }`}>
                              {experience === option && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Step 2: Budget */}
                    {currentStep === 2 && (
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[18px] font-bold text-white tracking-tight mb-2">
                          What is your investable capital / starting budget?
                        </h4>
                        {[
                          'Under $1,000',
                          '$1,000 - $3,000',
                          '$3,000 - $5,000',
                          '$5,000+'
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() => setBudget(option)}
                            className={`w-full text-left px-5 py-4 rounded-[12px] border text-[13px] sm:text-[14px] transition-all flex items-center justify-between cursor-pointer ${
                              budget === option
                                ? 'bg-white/10 border-white/30 text-white font-medium'
                                : 'bg-white/[0.02] border-white/5 text-white/60 hover:bg-white/[0.05] hover:text-white'
                            }`}
                          >
                            <span>{option}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                              budget === option ? 'border-[#e11d48] bg-[#e11d48]' : 'border-white/20'
                            }`}>
                              {budget === option && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Step 3: Obstacle */}
                    {currentStep === 3 && (
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[18px] font-bold text-white tracking-tight mb-2">
                          What is your biggest roadblock to success?
                        </h4>
                        {[
                          'Finding high-margin products',
                          'Running profitable ads (TikTok/Facebook)',
                          'Supplier quality and shipping logistics',
                          'Lacking a step-by-step scaling framework'
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() => setObstacle(option)}
                            className={`w-full text-left px-5 py-4 rounded-[12px] border text-[13px] sm:text-[14px] transition-all flex items-center justify-between cursor-pointer ${
                              obstacle === option
                                ? 'bg-white/10 border-white/30 text-white font-medium'
                                : 'bg-white/[0.02] border-white/5 text-white/60 hover:bg-white/[0.05] hover:text-white'
                            }`}
                          >
                            <span>{option}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                              obstacle === option ? 'border-[#e11d48] bg-[#e11d48]' : 'border-white/20'
                            }`}>
                              {obstacle === option && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Step 4: Contact Details */}
                    {currentStep === 4 && (
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[18px] font-bold text-white tracking-tight mb-1">
                          You're almost there!
                        </h4>
                        <p className="text-[12px] text-white/40 mb-3 leading-relaxed">
                          Enter your details below to finalize your eligibility assessment and claim your AI web design blueprint.
                        </p>

                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-medium text-white/40 ml-1 uppercase tracking-wider">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-medium text-white/40 ml-1 uppercase tracking-wider">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-medium text-white/40 ml-1 uppercase tracking-wider">WhatsApp or Telegram Handle</label>
                          <input
                            type="text"
                            required
                            placeholder="@handle or phone number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                          />
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between gap-4 mt-8 pt-4 border-t border-white/5">
                      {currentStep > 1 ? (
                        <button
                          onClick={handlePrevStep}
                          className="px-5 py-2.5 rounded-[12px] border border-white/10 text-[13px] text-white/60 hover:text-white hover:bg-white/5 transition-all cursor-pointer font-medium"
                        >
                          Back
                        </button>
                      ) : (
                        <div />
                      )}

                      {currentStep < 4 ? (
                        <button
                          disabled={!isStepValid()}
                          onClick={handleNextStep}
                          className={`px-6 py-2.5 rounded-[12px] text-[13px] font-bold transition-all cursor-pointer ${
                            isStepValid()
                              ? 'bg-white text-black hover:bg-white/95'
                              : 'bg-white/5 text-white/20 cursor-not-allowed'
                          }`}
                        >
                          Next Step
                        </button>
                      ) : (
                        <button
                          disabled={!isStepValid()}
                          onClick={handleSubmit}
                          className={`px-6 py-2.5 rounded-[12px] text-[13px] font-bold transition-all cursor-pointer ${
                            isStepValid()
                              ? 'bg-[#e11d48] text-white hover:bg-[#be123c]'
                              : 'bg-white/5 text-white/20 cursor-not-allowed'
                          }`}
                        >
                          Apply Now
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
