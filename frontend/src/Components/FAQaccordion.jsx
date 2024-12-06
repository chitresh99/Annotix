import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const FAQaccordion = ({ question, answer }) => {
const [isOpen,setisopen] = useState(false);

  return (
    <div className='border-b  border-neutral-800'>
    <button className='w-full py06 flex justify-between items-center text-left'
    onClick={()=>setisopen(!(isOpen))}>
     <span className="text-lg font-medium bg-gradient-to-r from-red-300 to bg-yellow-600 text-transparent bg-clip-text">{question}</span>
        <ChevronDown
          className={clsx(
            'w-5 h-5 text-gray-500 transition-transform duration-200',
            isOpen && 'transform rotate-180'
          )}
        />
    </button>
    <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 bg-gradient-to-r from-purple-300 to-orange-800 text-transparent bg-clip-text">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQaccordion