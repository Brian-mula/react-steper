import { useState } from 'react';

const messages = [
  "Learn React",
  "Look for employement",
  "Use your income to buy a house",
]


function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step > messages.length - 1) {
      return;
    }
    setStep(step + 1);
  }
  const prevStep = () => {
    if (step === 1) {
      return;
    }
    setStep(step - 1);
  }
  return (
    <div className="flex justify-center ">
      <div className="py-10 px-4 bg-gray-100 w-96 shadow-md rounded mt-20">
        <div className="grid grid-cols-3 gap-4">
          <div className={`rounded-full p-2 w-10 h-10 flex justify-center items-center ${step >= 1 ? 'bg-purple-700': 'bg-white'}`}>
            1
          </div>
          <div className={`rounded-full p-2 w-10 h-10 flex justify-center items-center ${step >= 2 ? 'bg-purple-700': 'bg-white'}`}>
            2
          </div>
          <div className={`rounded-full p-2 w-10 h-10 flex justify-center items-center ${step >= 3 ? 'bg-purple-700': 'bg-white'}`}>
            3
          </div>
        </div>
        <div className="my-10 p-3">
    <p>Step: {step} - {messages[step - 1]}</p>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={prevStep} className="btn btn-primary" >Previous</button>
          <button onClick={nextStep} className="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
