import clsx from 'clsx';
import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
    children?: React.ReactNode;
    className?: string;
    title: string;
    description: string;
}



const Card = ({title, description, className,children}:CardProps) => {


    return (
       <motion.div 
        style={{ height: '80vh', width: '90vh'}}
        initial={{ opacity:0}}
        whileInView={{ opacity:1}}
        viewport={{amount:0.25}}
        className={clsx(' border border-impact p-4 bg-gray-800', className)}>
           <h2>{title}</h2>
              <p>{description}</p>
              <div>{children}</div>
         </motion.div>
    );
}
export default Card;
