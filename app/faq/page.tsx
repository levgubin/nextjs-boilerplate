'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqItems = [
  {
    question: 'What services does BMCARE Services Limited provide?',
    answer: 'We provide high-quality Health and Social Care, Catering, and Domestic Support services across Ireland. Our services include Health Care Assistants, Support Workers, Residential & Nursing Home Staff, Day Centre and Community Support Workers, Chefs, Kitchen Assistants, Housekeepers, Cleaners, and Laundry Support Staff.',
  },
  {
    question: 'Are all staff members vetted and trained?',
    answer: 'Yes, all BMCARE SERVICES LIMITED staff are Garda vetted/Police Cleared, trained in Manual Handling, Infection Control, First Aid, and Safeguarding. All staff are reference-checked and competency-assessed before placement.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide services across Ireland - Nationwide, including Dublin, Longford, Roscommon, Mayo, Galway, and Sligo. Our main location is in Castlerea, Co. Roscommon.',
  },
  {
    question: 'Do you provide emergency staffing?',
    answer: 'Yes, we offer 24/7 availability for urgent staffing requests. We provide flexible staffing solutions including temporary, long-term, or emergency cover.',
  },
  {
    question: 'How do you match staff to client needs?',
    answer: 'We provide personalised matching of staff to client needs. Our team works closely with clients to understand their specific requirements and match them with qualified, experienced staff members who are best suited for the role.',
  },
  {
    question: 'What standards and regulations do you follow?',
    answer: 'We operate in line with national standards and relevant regulatory frameworks, ensuring all placements meet professional and ethical standards. All our staff are fully compliant with industry requirements.',
  },
  {
    question: 'How can I contact BMCARE Services Limited?',
    answer: 'You can contact us by phone at (083) 104 2231, by email at info@bmcareservices.com, or visit us at 37 Kilkeevan Park, Castlerea, Co. Roscommon. We\'re available 24/7 for urgent staffing requests.',
  },
  {
    question: 'What types of care do you provide?',
    answer: 'We provide various types of care including personal care (assistance with daily activities), home nursing (skilled nursing care), companionship (social interaction and emotional support), and specialized care for individuals with specific health conditions such as dementia and mobility issues.',
  },
];

function FAQItem({ question, answer, isActive, onClick }: { question: string; answer: string; isActive: boolean; onClick: () => void }) {
  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Common Questions About Our Services</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="page-content">
        <div className="container">
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isActive={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="content-section cta-section">
            <h2>Still Have Questions?</h2>
            <p>If you have any other questions or would like to discuss your specific needs, please don&apos;t hesitate to contact us.</p>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
