// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Asegúrate de incluir los tipos de archivo que estás utilizando
  },
});

module.exports = config;
