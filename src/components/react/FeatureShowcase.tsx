import { motion, useInView } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

import RemoteAccess from '@assets/RA.png';
import truckImg from '@assets/Alerts.webp';
import packageImg from '@assets/photo-1581091226825-a6a2a5aee158.jpg';
import barChart3Img from '@assets/photo-1551288049-bebda4e38f71.jpg';
import shieldImg from '@assets/photo-1563013544-824ae1b704d3.jpg';
import headphonesImg from '@assets/photo-1486312338219-ce68d2c6f44d.jpg';
import ATMTLogo from '@assets/ATMTpro.png';

const features = [
  {
    icon: Warehouse,
    title: 'Remote Control',
    image: RemoteAccess,
    description:
      'Remote control allows you to perform many operations on your lost or stolen device like locate and track mobile, take pictures to identify the thief, view location history, protect personal data, hide ATMT from the app drawer for stealth mode, view thief images, new SIM number, and much more.',
  },
  {
    icon: Shield,
    title: 'Automatic Alerts',
    image: truckImg,
    description:
      'ATMT app can automatically perform actions when conditions are met. It sends SMS alerts if the SIM card is changed, emails a thief photo on wrong unlock attempts, supports AutoTask rules, geofencing, and many automatic actions and alerts.',
  },
  {
    icon: BarChart3,
    title: 'ATMT PRO Missing Device Report',
    image: packageImg,
    description:
      'Reports are the core feature, gathering evidence to help track and recover lost devices. Each report includes GPS coordinates, thief images, device and user information, activity logs, and modification history—ideal for police tracking.',
  },
];

function AnimatedCounter() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const targetCount = 7000000;

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetCount);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2"
      >
        {formatNumber(count)}+
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-700 font-medium"
      >
        Users Who Love ATMT Pro
      </motion.div>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <div className="space-y-16">
      {/* Logo and Counter Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 px-4 py-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        >
          <img
            src={ATMTLogo.src}
            alt="ATMT Pro Logo"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Animated Counter */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedCounter />
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
              {/* Image */}
              <img
                src={feature.image.src}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

              {/* Icon */}
              <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Title (visible before hover on desktop) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transition-opacity duration-300 md:group-hover:opacity-0">
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              {/* Hover / Mobile Overlay */}
              <div
                className="
                  absolute inset-0 z-30 flex items-center justify-center p-6
                  bg-black/85
                  opacity-100 md:opacity-0
                  md:group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                "
              >
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}