import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInSectionProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
}

const FadeInSection = ({
    children,
    direction = 'up',
    delay = 0
}: FadeInSectionProps) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const directionStyles = {
        up: 'translate-y-10',
        down: '-translate-y-10',
        left: 'translate-x-10',
        right: '-translate-x-10',
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${inView
                    ? 'opacity-100 transform-none'
                    : `opacity-0 ${directionStyles[direction]}`
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;