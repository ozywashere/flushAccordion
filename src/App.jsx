const faqs = [
  {
    question: 'How many team members can I invite?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    question: 'What is the maximum file upload size?',
    answer:
      'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    question: 'How do I reset my password?',
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: 'Can I cancel my subscription?',
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: 'Do you provide additional support?',
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];
import Accordion from './Accordion';

function App() {
  return (
    <main>
      <section className='py-20'>
        <div className='container-2xl'>
          <div className='max-w-screen-sm mx-auto'>
            <h1 className='text-4xl font-bold text-center text-gray-900'>
              Frequently Asked Questions
            </h1>
            <p className='mt-4 leading-snug text-xl text-center text-gray-500'>
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
          <div className='mt-16 max-w-screen-md mx-auto'>
            <Accordion faqs={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
