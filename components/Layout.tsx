import React, { ReactNode } from 'react';
import { CONFIG } from '../constants';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
}

export const SlideLayout: React.FC<LayoutProps> = ({ children, title, subtitle, showLogo = true }) => {
  return (
    <div className="flex flex-col h-full w-full p-8 md:p-12 relative overflow-hidden bg-white">
      {/* Header Background Accent */}
      <div 
        className="absolute top-0 left-0 w-full h-4"
        style={{ background: `linear-gradient(to right, ${CONFIG.institutionColors.primary}, ${CONFIG.institutionColors.secondary})` }}
      />

      {/* Header Content */}
      <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-100">
        <div className="flex-1">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ color: CONFIG.institutionColors.primary }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="text-xl text-gray-500 mt-2 font-light">
              {subtitle}
            </h3>
          )}
        </div>
        {showLogo && (
          <img 
            src={CONFIG.logoUrl} 
            alt="Logo Institucional" 
            className="h-16 w-16 md:h-20 md:w-20 object-contain ml-4 rounded-full bg-gray-50 shadow-sm"
          />
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto slide-content relative z-10">
        {children}
      </div>

       {/* Footer Background Accent */}
       <div 
        className="absolute bottom-0 left-0 w-full h-2"
        style={{ backgroundColor: CONFIG.institutionColors.secondary }}
      />
    </div>
  );
};