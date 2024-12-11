import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { addDays, format, subDays } from 'date-fns';
import CalculatorMenu from './CalculatorMenu';
import DatePicker from './DatePicker';
import CalculatorResult from './CalculatorResult';

interface PregnancyInfo {
  dueDate: string;
  trimester: string;
  weeksAndDays: string;
}

interface OvulationInfo {
  fertileWindow: {
    start: string;
    end: string;
  };
  ovulationDate: string;
}

const PregnancyCalculator = () => {
  const [calculatorType, setCalculatorType] = useState<'due-date' | 'ovulation'>('due-date');
  const [lmpDate, setLmpDate] = useState('');
  const [result, setResult] = useState<PregnancyInfo | OvulationInfo | null>(null);

  const calculateDueDate = (lmpDate: string): PregnancyInfo => {
    const lmp = new Date(lmpDate);
    const today = new Date();
    
    // Calculate due date (40 weeks from LMP)
    const dueDate = addDays(lmp, 280);
    
    // Calculate weeks and days
    const diffTime = Math.abs(today.getTime() - lmp.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;
    
    // Determine trimester
    let trimester;
    if (weeks < 13) trimester = 'First';
    else if (weeks < 27) trimester = 'Second';
    else trimester = 'Third';

    return {
      dueDate: format(dueDate, 'MMMM dd, yyyy'),
      trimester,
      weeksAndDays: `${weeks} weeks and ${days} days`
    };
  };

  const calculateOvulation = (lmpDate: string): OvulationInfo => {
    const lmp = new Date(lmpDate);
    const ovulationDate = addDays(lmp, 14);
    const fertileWindowStart = subDays(ovulationDate, 5);
    const fertileWindowEnd = addDays(ovulationDate, 1);

    return {
      fertileWindow: {
        start: fertileWindowStart.toISOString(),
        end: fertileWindowEnd.toISOString(),
      },
      ovulationDate: ovulationDate.toISOString(),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lmpDate) {
      try {
        const calculationResult = calculatorType === 'due-date'
          ? calculateDueDate(lmpDate)
          : calculateOvulation(lmpDate);
        setResult(calculationResult);
      } catch (error) {
        console.error('Calculation error:', error);
        setResult(null);
      }
    }
  };

  const handleReset = () => {
    setLmpDate('');
    setResult(null);
  };

  return (
    <section id="pregnancy-calculator" className="py-20 bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pregnancy Calculator</h2>
          <p className="text-lg text-gray-600">
            Plan your journey with our pregnancy planning tools
          </p>
        </div>

        <CalculatorMenu onSelect={setCalculatorType} />

        <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <DatePicker
              selectedDate={lmpDate}
              onChange={setLmpDate}
              label={
                calculatorType === 'due-date'
                  ? 'Date of Last Menstrual Period'
                  : 'First Day of Last Period'
              }
            />

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                Calculate
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </button>
            </div>
          </form>

          {result && (
            <CalculatorResult
              type={calculatorType}
              result={result}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PregnancyCalculator;