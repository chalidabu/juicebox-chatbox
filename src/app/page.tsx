'use client';

import { useState } from 'react';
import HomeSection from './components/HomeSection';
import WalkthroughSection from './components/WalkthroughSection';
import MultiStepForm from './components/MultiStepForm';
import ResultSection from './components/ResultSection';

const Page = () => {
  const [step, setStep] = useState<'home' | 'walkthrough' | 'form' | 'result'>('home');
  const [formData, setFormData] = useState({ firstName: '', email: '' });

  return (
    <main>
      {step === 'home' && <HomeSection onNext={() => setStep('walkthrough')} />}
      {step === 'walkthrough' && <WalkthroughSection onNext={() => setStep('form')} onBack={() => setStep('home')} />}
      {step === 'form' && (
        <MultiStepForm
          onSubmit={(data) => {
            setFormData(data);
            setStep('result');
          }}
        />
      )}
      {step === 'result' && <ResultSection formData={formData} onRestart={() => setStep('home')} />}
    </main>
  );
};

export default Page;
