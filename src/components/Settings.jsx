import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const colorThemes = [
  {
    id: 'purple',
    name: 'Royal Purple',
    primary: '#413FA0',
    light: '#6B69C1',
    bg: '#F2F2F2',
    accent: '#EBE7E7',
  },
  {
    id: 'emerald',
    name: 'Emerald',
    primary: '#065F46',
    light: '#059669',
    bg: '#F0FDF4',
    accent: '#D1FAE5',
  },
  {
    id: 'crimson',
    name: 'Crimson',
    primary: '#9B1C1C',
    light: '#DC2626',
    bg: '#FFF5F5',
    accent: '#FEE2E2',
  },
  {
    id: 'ocean',
    name: 'Ocean Blue',
    primary: '#1E40AF',
    light: '#3B82F6',
    bg: '#EFF6FF',
    accent: '#DBEAFE',
  },
  {
    id: 'slate',
    name: 'Slate',
    primary: '#1E293B',
    light: '#475569',
    bg: '#F8FAFC',
    accent: '#E2E8F0',
  },
  {
    id: 'amber',
    name: 'Amber',
    primary: '#92400E',
    light: '#D97706',
    bg: '#FFFBEB',
    accent: '#FDE68A',
  },
];

export default function Settings({ currentTheme, onThemeChange }) {
  const [selected, setSelected] = useState(currentTheme?.id || 'purple');
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (theme) => {
    setSelected(theme.id);
    setSaved(false);
  };

  const handleSave = () => {
    const theme = colorThemes.find(t => t.id === selected);
    onThemeChange(theme);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] py-10 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1 text-sm">Customize the appearance of your dashboard</p>
        </div>

        {/* Theme Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-base font-semibold text-gray-800 mb-1">Color Theme</h2>
          <p className="text-sm text-gray-400 mb-5">Choose a color theme for your sidebar and accents</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {colorThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleSelect(theme)}
                className={`relative rounded-xl border-2 p-4 transition-all duration-200 text-left group
                  ${selected === theme.id
                    ? 'border-gray-900 shadow-md scale-[1.02]'
                    : 'border-gray-200 hover:border-gray-400 hover:scale-[1.01]'
                  }`}
              >
                {/* Color preview */}
                <div className="flex gap-1.5 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg shadow-sm"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <div
                    className="w-8 h-8 rounded-lg shadow-sm"
                    style={{ backgroundColor: theme.light }}
                  />
                  <div
                    className="w-8 h-8 rounded-lg shadow-sm border border-gray-100"
                    style={{ backgroundColor: theme.accent }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-700">{theme.name}</span>

                {/* Checkmark */}
                {selected === theme.id && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-base font-semibold text-gray-800 mb-4">Preview</h2>
          {(() => {
            const theme = colorThemes.find(t => t.id === selected);
            return (
              <div className="rounded-xl overflow-hidden border border-gray-200 flex h-24">
                <div className="w-14 flex flex-col items-center py-3 gap-3" style={{ backgroundColor: theme.primary }}>
                  <div className="w-5 h-1 rounded bg-white opacity-80" />
                  <div className="w-5 h-1 rounded bg-white opacity-50" />
                  <div className="w-5 h-1 rounded bg-white opacity-50" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="h-8 border-b border-gray-100 flex items-center px-3 gap-2" style={{ backgroundColor: '#fff' }}>
                    <div className="w-16 h-2 rounded" style={{ backgroundColor: theme.accent }} />
                    <div className="ml-auto w-6 h-6 rounded-full" style={{ backgroundColor: theme.accent }} />
                  </div>
                  <div className="flex-1 p-3 flex gap-2" style={{ backgroundColor: theme.bg }}>
                    <div className="flex-1 rounded-lg" style={{ backgroundColor: theme.accent }} />
                    <div className="flex-1 rounded-lg" style={{ backgroundColor: theme.accent }} />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: colorThemes.find(t => t.id === selected)?.primary }}
          >
            {saved ? '✓ Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}