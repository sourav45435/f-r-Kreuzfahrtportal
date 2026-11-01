import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';
import { ParkingOffer } from '../types';

interface SavedModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedOffers: ParkingOffer[];
  onRemove: (id: string) => void;
  onSelect: (offer: ParkingOffer) => void;
}

export const SavedModal: React.FC<SavedModalProps> = ({
  isOpen,
  onClose,
  savedOffers,
  onRemove,
  onSelect
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-rose-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Deine Merkliste ({savedOffers.length})</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 pr-1 space-y-3">
          {savedOffers.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              <Heart className="w-10 h-10 text-slate-300 mx-auto mb-3 stroke-[1.5]" />
              <p className="font-semibold text-slate-800">Deine Merkliste ist noch leer</p>
              <p className="text-xs text-slate-500 mt-1">Klicke auf das Herz-Symbol bei einem Parkplatz, um ihn für später zu speichern.</p>
            </div>
          ) : (
            savedOffers.map(offer => (
              <div 
                key={offer.id} 
                className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 transition-all bg-slate-50/50"
              >
                <img 
                  src={offer.image} 
                  alt={offer.name} 
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-slate-900 truncate">{offer.name}</h4>
                  <p className="text-xs text-slate-500 truncate">{offer.terminalName} • {offer.distanceKmText}</p>
                  <p className="text-sm font-extrabold text-[#0052CC] mt-0.5">{offer.price7Days} € <span className="text-[10px] text-slate-500 font-normal">/ 7 Tage</span></p>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <button
                    onClick={() => {
                      onSelect(offer);
                      onClose();
                    }}
                    className="px-3 py-1.5 bg-[#FDB813] hover:bg-[#E5A50D] text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1 shadow-xs"
                  >
                    Buchen <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onRemove(offer.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 text-xs flex items-center gap-1"
                    title="Entfernen"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
