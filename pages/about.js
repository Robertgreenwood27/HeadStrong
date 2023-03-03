import React from 'react';

function AboutPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Business Hours</h2>
      <ul className="list-disc ml-4 mb-8">
        <li className="mb-2">Monday: 10 AM - 5 PM</li>
        <li className="mb-2">Tuesday: 10:30 AM - 5 PM</li>
        <li className="mb-2">Wednesday: 10:30 AM - 5 PM</li>
        <li className="mb-2">Thursday: 10:30 AM - 5 PM</li>
        <li className="mb-2">Friday: 10 AM - 5 PM</li>
        <li className="mb-2">Saturday: 10 AM - 5 PM</li>
        <li className="mb-2">Sunday: CLOSED</li>
      </ul>
      <h2 className="text-3xl font-bold mb-4">Cancellation Policy</h2>
      <p className="text-lg mb-4">
        A 50% cancellation fee will be charged for all cancellations or no-shows with less than 24 hours notice of the scheduled appointment time.
      </p>
    </div>
  );
}

export default AboutPage;
