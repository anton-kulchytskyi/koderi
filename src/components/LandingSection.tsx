// app/components/LandingSection.tsx
import React, { ReactNode } from 'react';

interface LandingSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  backgroundStyle?: React.CSSProperties;
}

export default function LandingSection({ id, title, children, backgroundStyle }: LandingSectionProps) {
  const sectionStyle: React.CSSProperties = {
    minHeight: '80vh',
    ...backgroundStyle, // Додаємо передані стилі фону
  };

  return (
    <section id={id} style={sectionStyle} className="py-16 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
      {children}
    </section>
  );
}