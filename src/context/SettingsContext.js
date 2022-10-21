import PropTypes from 'prop-types';
import { createContext } from 'react';
// hooks
import useLocalStorage from '../hooks/useLocalStorage';
// config
import { defaultSettings } from '../config';

// ----------------------------------------------------------------------

const initialState = {
  ...defaultSettings,
  onChangeMode: () => {},
};

const SettingsContext = createContext(initialState);

// ----------------------------------------------------------------------

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
  });

  const onChangeMode = () => {
    const currentThemeMode = JSON.parse(localStorage.getItem('settings'));
    setSettings({
      ...settings,
      themeMode: currentThemeMode.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
