import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Item, EquipmentSlots, EquipmentSlot, Language, Blessing } from '../types';
import { t } from '../constants';

interface PlayerStatsProps {
  health: number;
  luck: number;
  inventory: Item[];
  equipment: EquipmentSlots;
  blessings: Blessing[];
  actionResult: string;
  selectedItem: Item | null;
  onSelectItem: (item: Item | null) => void;
  language: Language;
  playerClassName: string;
}

// --- Main Stat Icons ---
const HealthIcon: React.FC<{ isLow: boolean }> = ({ isLow }) => ( <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 text-red-500 transition-transform duration-300 ${isLow ? 'animate-pulse-danger' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg> );
const LuckIcon: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h.5a1.5 1.5 0 010 3H14a1 1 0 00-1 1v.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H9a1 1 0 001-1v-.5z" /><path d="M10 16.5a1.5 1.5 0 01-3 0V16a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H6a1 1 0 001-1v-.5a1.5 1.5 0 013 0V11a1 1 0 001 1h.5a1.5 1.5 0 010 3H11a1 1 0 00-1 1v.5z" /></svg> );

const iconProps = { className: "h-5 w-5 text-slate-300 shrink-0", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round"} as const;
const DaggerIcon = () => <svg {...iconProps}><path d="M14.5 17.5l-5-5 5-5m-5 5h10"/></svg>;
const MapIcon = () => <svg {...iconProps}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>;
const PotionIcon = () => <svg {...iconProps}><path d="M8 2.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v1.23c0 .42-.17.83-.46 1.12L12.5 8.5V13h-1V8.5L8.46 4.85A1.5 1.5 0 0 1 8 3.73V2.5zM9 13v1.5A1.5 1.5 0 0 0 10.5 16h3A1.5 1.5 0 0 0 15 14.5V13h-1.5v1h-2v-1H9z" strokeWidth="0" fill="currentColor"/></svg>;
const KeyIcon = () => <svg {...iconProps}><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>;
const ArmorIcon = () => <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const HelmetIcon = () => <svg {...iconProps}><path d="M12 2a5 5 0 0 0-5 5v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a5 5 0 0 0-5-5z"></path><path d="M12 14v6"></path><path d="M9 18h6"></path></svg>;
const BootsIcon = () => <svg {...iconProps}><path d="M20 12V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12h12v-4a2 2 0 0 0-2-2h-2"></path></svg>;
const BeltIcon = () => <svg {...iconProps}><path d="M10 4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"></path><path d="M10 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><rect x="14" y="10" width="4" height="4" rx="1"></rect></svg>;
const GenericItemIcon = () => <svg {...iconProps}><rect x="1" y="7" width="22" height="14" rx="2" ry="2"></rect><path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"></path><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path></svg>;
const InventoryIcon = () => <svg {...iconProps}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M12 3v4"></path><path d="M16 3v4"></path><path d="M8 3v4"></path></svg>;
const BlessingIcon = () => <svg {...iconProps}><path d="M10 3L8 8l-5 2 5 2 2 5 2-5 5-2-5-2-2-5zM18 13l-2-1-2 1 1-2-1-2 2 1 2-1-1 2 1 2z"></path></svg>;

const CompanionHeartIcon = () => <svg {...iconProps}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const GuardianIcon = () => <svg {...iconProps}><path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"></path><path d="M12 12c-3.41 0-6.32 1.9-7.75 4.66.42.92.98 1.76 1.66 2.48A8.99 8.99 0 0 1 12 15a8.99 8.99 0 0 1 6.09 2.14c.68-.72 1.24-1.56 1.66-2.48C18.32 13.9 15.41 12 12 12z" strokeWidth="0" fill="currentColor"></path></svg>;
const PerceptionIcon = () => <svg {...iconProps}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const EnergyIcon = () => <svg {...iconProps}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const DragonIcon = () => <svg {...iconProps}><path d="M22 12c-5 0-7 2-7 4s2 4 7 4c-1.5 2.5-4 4-7 4-5 0-7-4-7-8s2-8 7-8c3 0 5.5 1.5 7 4-5 0-7 2-7 4s2 4 7 4zM2 12c5 0 7-2 7-4s-2-4-7-4c1.5-2.5 4-4 7-4 5 0 7 4 7 8s-2 8-7 8c-3 0-5.5-1.5-7-4c5 0 7-2 7-4s-2-4-7-4z"></path></svg>;

const getIconForItem = (item: Item | null): React.ReactElement => {
    if (!item || !item.name) return <GenericItemIcon />;
    const name = item.name.toLowerCase();
    
    // Companion check first
    if (item.slot === 'companion') {
        if (name.includes('hound') || name.includes('犬')) return <GuardianIcon />;
        if (name.includes('owl') || name.includes('梟') || name.includes('フクロウ')) return <PerceptionIcon />;
        if (name.includes('sprite') || name.includes('精靈') || name.includes('スプライト')) return <EnergyIcon />;
        if (name.includes('dragon') || name.includes('龍')) return <DragonIcon />;
        return <CompanionHeartIcon />;
    }

    if (name.includes('map') || name.includes('地圖')) return <MapIcon />;
    if (name.includes('potion') || name.includes('藥水') || name.includes('藥膏') || name.includes('ポーション') || name.includes('salve') || name.includes('軟膏')) return <PotionIcon />;
    if (name.includes('key') || name.includes('鑰匙') || name.includes('lockpick') || name.includes('開鎖器') || name.includes('鍵')) return <KeyIcon />;
    if (name.includes('armor') || name.includes('甲') || name.includes('袍') || name.includes('鎧') || name.includes('ローブ')) return <ArmorIcon />;
    if (name.includes('helmet') || name.includes('頭盔') || name.includes('帽') || name.includes('兜')) return <HelmetIcon />;
    if (name.includes('boots') || name.includes('靴')) return <BootsIcon />;
    if (name.includes('sword') || name.includes('劍') || name.includes('dagger') || name.includes('匕首') || name.includes('staff') || name.includes('杖') || name.includes('短剣')) return <DaggerIcon />;
    
    return <GenericItemIcon />;
};

// Class Icons
const iconPropsClass = { className: "h-7 w-7 mr-3 text-cyan-400", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round"} as const;
const KnightIconClass = () => <svg {...iconPropsClass} viewBox="0 0 24 24" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const RogueIconClass = () => <svg {...iconPropsClass} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3l7 7-7 7 7-7-7-7z"></path><path d="M21 21l-7-7 7-7-7 7 7 7z"></path></svg>;
const ScholarIconClass = () => <svg {...iconPropsClass} viewBox="0 0 24 24" stroke="currentColor"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5v-10A2.5 2.5 0 0 1 6.5 2z"></path></svg>;
const TricksterIconClass = () => <svg {...iconPropsClass} viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>;

const classIcons: { [key: string]: React.ReactElement } = {
  'Knight': <KnightIconClass />, 'Rogue': <RogueIconClass />, 'Scholar': <ScholarIconClass />, 'Trickster': <TricksterIconClass />,
  '騎士': <KnightIconClass />, '盜賊': <RogueIconClass />, '學者': <ScholarIconClass />, '詐欺師': <TricksterIconClass />,
  '骑士': <KnightIconClass />, '盗贼': <RogueIconClass />, '学者': <ScholarIconClass />, '欺诈师': <TricksterIconClass />,
  // FIX: Removed duplicate key '学者' which is shared with Simplified Chinese.
  'ナイト': <KnightIconClass />, '盗賊': <RogueIconClass />, 'トリックスター': <TricksterIconClass />,
  'Caballero': <KnightIconClass />, 'Pícaro': <RogueIconClass />, 'Erudito': <ScholarIconClass />, 'Embaucador': <TricksterIconClass />,
  '기사': <KnightIconClass />, '도적': <RogueIconClass />, '학자': <ScholarIconClass />, '사기꾼': <TricksterIconClass />,
};

const EquipmentSlotComponent: React.FC<{
    slot: EquipmentSlot;
    item: Item | null;
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>, item: Item | null) => void;
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    language: Language;
}> = ({ slot, item, onMouseEnter, onMouseLeave, onMouseMove, language }) => {
    
    const icons: Record<EquipmentSlot, React.ReactElement> = {
        head: <HelmetIcon />, body: <ArmorIcon />, leftHand: <DaggerIcon />, rightHand: <DaggerIcon />, feet: <BootsIcon />,
        waist: <BeltIcon />, companion: <CompanionHeartIcon />,
    };

    const isCompanionSlot = slot === 'companion';
    const baseClasses = `bg-slate-700/50 rounded-lg flex items-center justify-center border-2 border-dashed transition-colors relative p-1`;
    const sizeClasses = isCompanionSlot ? "h-20 w-20 md:h-28 md:w-28" : "h-16 w-16 md:h-20 md:w-20";
    const stateClasses = item ? "border-slate-500 bg-slate-700" : "border-slate-600";
    const slotName = t(language, `slot_${slot}`);
    
    const slotNamePosition = 'top-1 md:top-1.5 left-0 right-0 text-center';
    
    const content = item ? (
      <div className={`flex flex-col items-center text-center justify-center h-full pt-3 md:pt-4`}>
        {getIconForItem(item)}
        <span className="text-slate-300 w-full break-words leading-tight mt-1 px-1 text-[10px] md:text-xs">{item.name}</span>
      </div>
    ) : (
      <div className="text-slate-500 pt-3 md:pt-4">{icons[slot]}</div>
    );

    return (
        <div 
            onMouseEnter={(e) => onMouseEnter(e, item)}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            className={`${baseClasses} ${sizeClasses} ${stateClasses} ${isCompanionSlot ? 'rounded-full' : ''}`}
        >
            <span className={`absolute text-xs md:text-sm text-slate-400 font-semibold ${slotNamePosition}`}>{slotName}</span>
            {content}
        </div>
    );
};


const PlayerStats: React.FC<PlayerStatsProps> = ({ health, luck, inventory, equipment, blessings, actionResult, selectedItem, onSelectItem, language, playerClassName }) => {
  const maxHealth = 100;
  const healthPercentage = (health / maxHealth) * 100;
  const healthColor = healthPercentage > 60 ? 'bg-green-500' : healthPercentage > 30 ? 'bg-yellow-500' : 'bg-red-500';
  const isHealthLow = healthPercentage <= 30;

  const [luckAnim, setLuckAnim] = useState('');
  const [inventoryAnim, setInventoryAnim] = useState('');
  const [tooltip, setTooltip] = useState<{ title: string; content: string; x: number; y: number } | null>(null);


  useEffect(() => {
    if (actionResult === 'success') {
      setLuckAnim('animate-flash-green');
      const timer = setTimeout(() => setLuckAnim(''), 800);
      return () => clearTimeout(timer);
    }
    if (actionResult === 'item_use') {
        setInventoryAnim('animate-flash-cyan');
        const timer = setTimeout(() => setInventoryAnim(''), 800);
        return () => clearTimeout(timer);
    }
  }, [actionResult, health, luck, inventory.length]);

  const handleMouseEnter = (e: React.MouseEvent, item: Item | null) => {
    if (item?.description) {
      setTooltip({
        title: t(language, 'itemDescription'),
        content: item.description,
        x: e.clientX,
        y: e.clientY,
      });
    }
  };
  
  const handleBlessingMouseEnter = (e: React.MouseEvent, blessing: Blessing) => {
    if (blessing?.description) {
      setTooltip({
        title: t(language, 'blessingDescription'),
        content: blessing.description,
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltip) {
      setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : null);
    }
  };
  
  const commonMouseEventHandlers = {
    onMouseLeave: handleMouseLeave,
    onMouseMove: handleMouseMove,
  };

  const renderEquipmentSlot = (slot: EquipmentSlot) => (
    <EquipmentSlotComponent 
        slot={slot} 
        item={equipment[slot]}
        onMouseEnter={handleMouseEnter} 
        language={language}
        {...commonMouseEventHandlers}
    />
  );

  return (
    <div className="space-y-4 text-sm flex flex-col">
        {/* Health and Luck bars */}
        <div className="bg-slate-900/50 p-2 md:p-3 rounded-lg border border-slate-700">
          <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <HealthIcon isLow={isHealthLow} />
                <span className="font-bold text-slate-300 text-base md:text-lg">{t(language, 'health')}</span>
              </div>
              <span className="font-mono text-base md:text-lg text-slate-300">{health}/{maxHealth}</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-4 border border-slate-600"><div className={`h-full rounded-full transition-all duration-500 ${healthColor}`} style={{ width: `${healthPercentage}%` }}></div></div>
        </div>
        <div className={`bg-slate-900/50 p-2 md:p-3 rounded-lg border border-slate-700 ${luckAnim}`}>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
                <LuckIcon />
                <span className="font-bold text-slate-300 text-base md:text-lg">{t(language, 'luck')}</span>
            </div>
             <span className="font-mono text-base md:text-lg text-slate-300">{luck}/100</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-4 border border-slate-600"><div className="h-full rounded-full transition-all duration-500 bg-green-400" style={{ width: `${luck}%` }}></div></div>
        </div>

        {/* Equipment */}
        <div className="bg-slate-900/50 p-2 md:p-3 rounded-lg flex flex-col items-center space-y-2 border border-slate-700">
            <div className="flex items-center justify-center mb-2 w-full border-b border-slate-700 pb-2">
                {classIcons[playerClassName] || <KnightIconClass />}
                <h3 className="text-xl md:text-2xl font-bold text-slate-200 tracking-wider">{playerClassName}</h3>
            </div>
            {renderEquipmentSlot('companion')}
            
            {/* Blessings */}
            <div className="w-full pt-2 mt-2 border-t border-slate-700">
                 <div className="flex items-center justify-center mb-2">
                    <BlessingIcon />
                    <h4 className="font-bold text-slate-300 ml-2 text-base md:text-lg">{t(language, 'blessings')}</h4>
                </div>
                <div className="flex flex-col gap-1 items-start text-left">
                    {blessings.map((blessing) => (
                        <div 
                            key={blessing.name}
                            className="text-cyan-300 text-xs w-full p-1 rounded bg-cyan-900/20"
                            onMouseEnter={(e) => handleBlessingMouseEnter(e, blessing)}
                            {...commonMouseEventHandlers}
                        >
                            <span className="font-semibold">{blessing.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-1 md:gap-2 pt-2 border-t border-slate-700">
                {renderEquipmentSlot('head')}
                {renderEquipmentSlot('body')}
                {renderEquipmentSlot('waist')}
            </div>
             <div className="flex gap-1 md:gap-2">
                {renderEquipmentSlot('leftHand')}
                {renderEquipmentSlot('rightHand')}
                {renderEquipmentSlot('feet')}
            </div>
        </div>

        {/* Inventory */}
        <div className={`flex-grow bg-slate-900/50 p-2 md:p-3 rounded-lg border border-slate-700 ${inventoryAnim}`}>
          <div className="flex items-center mb-2">
              <InventoryIcon />
              <span className="font-bold text-slate-300 ml-2 text-base md:text-lg">{t(language, 'inventory')}</span>
          </div>
          <div className="flex flex-wrap gap-1 md:gap-2 min-h-[5rem] content-start">
            {inventory.length > 0 ? (
              inventory.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  onClick={() => onSelectItem(selectedItem === item ? null : item)}
                  onMouseEnter={(e) => handleMouseEnter(e, item)}
                  {...commonMouseEventHandlers}
                  className={`bg-slate-700 text-slate-300 h-fit pl-2 pr-3 py-1.5 rounded-full text-xs capitalize flex items-center transition-colors cursor-pointer hover:bg-slate-600 border border-slate-600 ${selectedItem === item ? 'ring-2 ring-cyan-400' : ''}`}
                >
                  <div className="mr-1.5">{getIconForItem(item)}</div>
                  {item.name} {item.quantity && item.quantity > 1 ? `(x${item.quantity})` : ''}
                </div>
              ))
            ) : (
              <span className="text-slate-500 italic text-center w-full self-center">{t(language, 'yourPocketsAreEmpty')}</span>
            )}
          </div>
        </div>
      
       {tooltip && createPortal(
          <div
            className="fixed z-50 p-3 text-sm bg-slate-800/90 backdrop-blur-sm text-slate-200 border border-slate-600 rounded-lg shadow-lg max-w-xs transition-opacity duration-200"
            style={{
              left: tooltip.x + 15,
              top: tooltip.y + 15,
              pointerEvents: 'none',
            }}
          >
            <h4 className="font-bold text-cyan-400 mb-1 border-b border-slate-700 pb-1">{tooltip.title}</h4>
            <p className="mt-2 text-slate-300">{tooltip.content}</p>
          </div>,
          document.body
      )}
    </div>
  );
};

export default PlayerStats;
