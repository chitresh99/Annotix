import React from 'react';
import FAQaccordion from './FAQaccordion';


const FAQ = () => {
    const faqs = [
        {
          question: "How does the free trial work?",
          answer: "Our 14-day free trial gives you full access to all features. No credit card required. Simply sign up and start exploring the platform immediately.",
        },
        {
          question: "Can I change my plan later?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
        },
        {
          question: "What kind of support do you offer?",
          answer: "We provide 24/7 email support for all customers. Professional and Enterprise plans also include priority support with dedicated response times and phone support.",
        },
        {
          question: "Is there a long-term contract?",
          answer: "No, all our plans are month-to-month with no long-term commitment required. You can cancel at any time without penalty.",
        },
        {
          question: "How secure is my data?",
          answer: "We use bank-level encryption and follow industry best practices for security. Your data is stored in secure, SOC 2 compliant data centers with regular backups.",
        },
        {
          question: "Can I import data from other platforms?",
          answer: "Yes, we offer comprehensive import tools and dedicated migration support to help you seamlessly transfer your data from most major platforms.",
        },
      ];
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl bg-gradient-to-r from-purple-500 to-orange-800 text-transparent bg-clip-text max-w-2xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-neutral-900 rounded-xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQaccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ