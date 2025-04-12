import React from 'react';

interface SkillCardProps {
  name: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => {
  return (
    <div className="bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 rounded-lg p-3 transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-white">{name}</h3>
        <span className="text-xs text-cyan-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-1.5">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard; 