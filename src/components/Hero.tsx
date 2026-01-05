import { fadeUp, staggerContainer } from '@/lib/animations';
import { SparklesIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className='pt-20'
            id="hero"
        >
            <motion.p 
                variants={fadeUp}    
                className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
            >
                <SparklesIcon size={15} /> <span>Introduction</span>
            </motion.p>

            <motion.h1 variants={fadeUp} className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16'>
                Hi, I'm <span className="text-primary">Septian Samdani</span>
                <br />
                Fullstack Javascript Developer
            </motion.h1>

            <motion.div 
                variants={fadeUp}
                className='mt-5'
            >
                <p className='text-md text-neutral-300'>The person who ready to learn and explore the world of technology.</p>
            </motion.div>
        </motion.section>
    )
}