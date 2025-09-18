import React, { useState } from 'react';
import { PlayerClass, Language } from '../types';
import { t } from '../constants';

const iconProps = { className: "h-16 w-16 mb-4 text-cyan-400", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round"} as const;
const KnightIcon = () => <svg {...iconProps} viewBox="0 0 24 24" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const RogueIcon = () => <svg {...iconProps} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3l7 7-7 7 7-7-7-7z"></path><path d="M21 21l-7-7 7-7-7 7 7 7z"></path></svg>;
const ScholarIcon = () => <svg {...iconProps} viewBox="0 0 24 24" stroke="currentColor"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
const TricksterIcon = () => <svg {...iconProps} viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>;

const classIcons: { [key: string]: React.ReactElement } = {
  'Knight': <KnightIcon />, 'Rogue': <RogueIcon />, 'Scholar': <ScholarIcon />, 'Trickster': <TricksterIcon />,
  '騎士': <KnightIcon />, '盜賊': <RogueIcon />, '學者': <ScholarIcon />, '詐欺師': <TricksterIcon />,
  '骑士': <KnightIcon />, '盗贼': <RogueIcon />, '学者': <ScholarIcon />, '欺诈师': <TricksterIcon />,
  // FIX: Removed duplicate key '学者' which is shared with Simplified Chinese.
  'ナイト': <KnightIcon />, '盗賊': <RogueIcon />, 'トリックスター': <TricksterIcon />,
  'Caballero': <KnightIcon />, 'Pícaro': <RogueIcon />, 'Erudito': <ScholarIcon />, 'Embaucador': <TricksterIcon />,
  '기사': <KnightIcon />, '도적': <RogueIcon />, '학자': <ScholarIcon />, '사기꾼': <TricksterIcon />,
};

interface CharacterCreationScreenProps {
  classes: PlayerClass[];
  onSelectClass: (playerClass: PlayerClass) => void;
  language: Language;
  onUnlockTrickster: () => void;
}

const CharacterCreationScreen: React.FC<CharacterCreationScreenProps> = ({ classes, onSelectClass, language, onUnlockTrickster }) => {
  const [selectedClass, setSelectedClass] = useState<PlayerClass | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const UNLOCK_THRESHOLD = 6;

  const handleSelect = (playerClass: PlayerClass) => {
    setSelectedClass(playerClass);
    
    const now = Date.now();
    // Reset count if clicks are too far apart
    if (now - lastClickTime > 1000) {
        setClickCount(1);
    } else {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        if (newCount > UNLOCK_THRESHOLD) {
          onUnlockTrickster();
        }
    }
    setLastClickTime(now);
  };

  const handleConfirm = () => {
    if (selectedClass) {
      onSelectClass(selectedClass);
    }
  };
  
  const getStartingItems = (playerClass: PlayerClass) => {
    const equipmentItems = Object.values(playerClass.initialEquipment).filter(Boolean).map(item => item!.name);
    const inventoryItems = playerClass.initialInventory.map(item => `${item.name}${item.quantity && item.quantity > 1 ? ` (x${item.quantity})` : ''}`);
    const separator = language === 'ja' ? '、' : ', ';
    return [...equipmentItems, ...inventoryItems].join(separator) || 'None';
  };

  return (
    <div className="text-center bg-black/30 backdrop-blur-sm p-8 rounded-lg shadow-2xl shadow-cyan-500/10 border border-slate-700 w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-cyan-400 mb-2 tracking-wider">{t(language, 'chooseOrigin')}</h1>
      <p className="text-slate-400 max-w-3xl mx-auto mb-8">
        {t(language, 'originDescription')}
      </p>
      <div className={`grid md:grid-cols-${classes.length === 4 ? '4' : '3'} gap-6 mb-8`}>
        {classes.map((playerClass) => (
          <div
            key={playerClass.id}
            onClick={() => handleSelect(playerClass)}
            className={`p-6 bg-slate-800/50 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:bg-slate-700/70 hover:shadow-cyan-500/20 hover:border-cyan-600 ${selectedClass?.id === playerClass.id ? 'border-cyan-500 shadow-lg' : 'border-slate-700'}`}
          >
            <div className="flex flex-col items-center">
                {classIcons[playerClass.name] || <KnightIcon />}
                <h2 className="text-2xl font-bold text-slate-200 mb-2">{playerClass.name}</h2>
            </div>
            <p className="text-slate-400 text-sm mb-4 min-h-[7rem]">{playerClass.description}</p>
            <div className="text-left text-xs text-slate-300 bg-slate-900/60 p-3 rounded-md h-24">
                <h4 className="font-bold text-cyan-400 mb-1">{t(language, 'startingEquipment')}</h4>
                <p>{getStartingItems(playerClass)}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleConfirm}
        disabled={!selectedClass}
        className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 text-xl disabled:bg-slate-600 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        {t(language, 'embarkJourney')}
      </button>
    </div>
  );
};

export default CharacterCreationScreen;
