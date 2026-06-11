import { useState, useCallback } from 'react';

// ─── Base palette lookup ──────────────────────────────────────────────────────
const BASE: Record<string, string> = {
  'base.color.grey.50':   '#f6f7f9',
  'base.color.grey.100':  '#eceff3',
  'base.color.grey.200':  '#e0e5eb',
  'base.color.grey.300':  '#ced6de',
  'base.color.grey.400':  '#b6c2ce',
  'base.color.grey.500':  '#97a8b9',
  'base.color.grey.600':  '#7289a1',
  'base.color.grey.700':  '#52667a',
  'base.color.grey.800':  '#313d49',
  'base.color.grey.900':  '#1d242b',
  'base.color.blue.50':   '#ebf4ff',
  'base.color.blue.100':  '#d7eafe',
  'base.color.blue.200':  '#beddfd',
  'base.color.blue.300':  '#94c5f9',
  'base.color.blue.400':  '#69aef7',
  'base.color.blue.500':  '#3491f4',
  'base.color.blue.600':  '#0c74e4',
  'base.color.blue.700':  '#0959ae',
  'base.color.blue.800':  '#063e79',
  'base.color.blue.900':  '#0f2f52',
  'base.color.purple.50':  '#f0f9ff',
  'base.color.purple.100': '#d7eefe',
  'base.color.purple.200': '#bee3fd',
  'base.color.purple.300': '#92d0fc',
  'base.color.purple.400': '#65bdfb',
  'base.color.purple.500': '#2ea5fa',
  'base.color.purple.600': '#068ae9',
  'base.color.purple.700': '#056ab2',
  'base.color.purple.800': '#034a7c',
  'base.color.purple.900': '#02385f',
  'base.color.pink.50':  '#feecf2',
  'base.color.pink.100': '#fdd8e4',
  'base.color.pink.200': '#fdbed3',
  'base.color.pink.300': '#fc92b5',
  'base.color.pink.400': '#fb6597',
  'base.color.pink.500': '#fa2e72',
  'base.color.pink.600': '#d81858',
  'base.color.pink.700': '#b3053f',
  'base.color.pink.800': '#7c032c',
  'base.color.pink.900': '#570a23',
  'base.color.green.50':  '#eefbf0',
  'base.color.green.100': '#e0f5e4',
  'base.color.green.200': '#cdefd3',
  'base.color.green.300': '#aae3b4',
  'base.color.green.400': '#88d796',
  'base.color.green.500': '#5fc96f',
  'base.color.green.600': '#3cb450',
  'base.color.green.700': '#2e8a3d',
  'base.color.green.800': '#20602b',
  'base.color.green.900': '#184920',
  'base.color.red.50':  '#fef6f6',
  'base.color.red.100': '#fbe1df',
  'base.color.red.200': '#f8c7c3',
  'base.color.red.300': '#f4a099',
  'base.color.red.400': '#f3766d',
  'base.color.red.500': '#e45046',
  'base.color.red.600': '#cc2f24',
  'base.color.red.700': '#9c241c',
  'base.color.red.800': '#73140d',
  'base.color.red.900': '#5c0b05',
  'base.color.yellow.50':  '#fefbf1',
  'base.color.yellow.100': '#fdf5d8',
  'base.color.yellow.200': '#fcedc0',
  'base.color.yellow.300': '#ffe38e',
  'base.color.yellow.400': '#ffd461',
  'base.color.yellow.500': '#ffb829',
  'base.color.yellow.600': '#f09800',
  'base.color.yellow.700': '#b86e00',
  'base.color.yellow.800': '#804400',
  'base.color.yellow.900': '#613000',
  'base.color.teal.50':  '#ecf9fd',
  'base.color.teal.100': '#daf3fb',
  'base.color.teal.200': '#c3ebf9',
  'base.color.teal.300': '#99def5',
  'base.color.teal.400': '#6fd0f1',
  'base.color.teal.500': '#3cc0ec',
  'base.color.teal.600': '#16a9da',
  'base.color.teal.700': '#1181a7',
  'base.color.teal.800': '#0b5a74',
  'base.color.teal.900': '#094458',
  'base.color.orange.50':  '#fff7f0',
  'base.color.orange.100': '#ffebd6',
  'base.color.orange.200': '#ffdabd',
  'base.color.orange.300': '#ffc18f',
  'base.color.orange.400': '#ff9e61',
  'base.color.orange.500': '#ff7429',
  'base.color.orange.600': '#f05d00',
  'base.color.orange.700': '#b83d00',
  'base.color.orange.800': '#802b00',
  'base.color.orange.900': '#611400',
  'base.color.neutrals.white': '#ffffff',
  'base.color.neutrals.black': '#000000',
  'base.color.alpha-dark.8':   '#1d242b14',
  'base.color.alpha-dark.16':  '#1d242b29',
  'base.color.alpha-dark.25':  '#1d242b40',
  'base.color.alpha-dark.60':  '#1d242b99',
  'base.color.alpha-dark.75':  '#1d242bbf',
  'base.color.alpha-dark.90':  '#1d242be5',
  'base.color.alpha-white.8':  '#ffffff14',
  'base.color.alpha-white.16': '#ffffff29',
  'base.color.alpha-white.25': '#ffffff40',
  'base.color.alpha-white.60': '#ffffff99',
  'base.color.alpha-white.75': '#ffffffbf',
  'base.color.alpha-white.90': '#ffffffe5',
};

// ─── Token row type ───────────────────────────────────────────────────────────
type TokenRow = {
  token: string;      // e.g. semantic.color.text.primary
  role: string;       // human description
  source: string;     // e.g. base.color.grey.900
};

// ─── Token data ───────────────────────────────────────────────────────────────

const TEXT_TOKENS: { group: string; rows: TokenRow[] }[] = [
  {
    group: 'Neutral',
    rows: [
      { token: 'semantic.color.text.primary',         role: 'Default body text',            source: 'base.color.grey.900' },
      { token: 'semantic.color.text.secondary',       role: 'Secondary / supporting text',  source: 'base.color.grey.700' },
      { token: 'semantic.color.text.tertiary',        role: 'Tertiary labels & captions',   source: 'base.color.grey.600' },
      { token: 'semantic.color.text.muted',           role: 'Muted / de-emphasised text',   source: 'base.color.grey.500' },
      { token: 'semantic.color.text.light',           role: 'Light placeholder text',       source: 'base.color.grey.400' },
      { token: 'semantic.color.text.subtle',          role: 'Subtle / faintest text',       source: 'base.color.grey.300' },
      { token: 'semantic.color.text.on-surface-bold', role: 'Text on dark surfaces',        source: 'base.color.neutrals.white' },
    ],
  },
  {
    group: 'Brand',
    rows: [
      { token: 'semantic.color.text.brand-primary-extra-bold', role: 'Brand primary — darkest',    source: 'base.color.blue.700' },
      { token: 'semantic.color.text.brand-primary',            role: 'Brand primary — default',    source: 'base.color.purple.600' },
      { token: 'semantic.color.text.brand-primary-semi-bold',  role: 'Brand primary — light',      source: 'base.color.purple.200' },
      { token: 'semantic.color.text.brand-primary-medium',     role: 'Brand primary — soft',       source: 'base.color.purple.100' },
      { token: 'semantic.color.text.brand-primary-subtle',     role: 'Brand primary — faintest',   source: 'base.color.purple.50' },
      { token: 'semantic.color.text.brand-secondary-extra-bold', role: 'Brand secondary — darkest', source: 'base.color.pink.700' },
      { token: 'semantic.color.text.brand-secondary',          role: 'Brand secondary — default',  source: 'base.color.pink.600' },
      { token: 'semantic.color.text.brand-secondary-semi-bold', role: 'Brand secondary — light',   source: 'base.color.pink.200' },
      { token: 'semantic.color.text.brand-secondary-medium',   role: 'Brand secondary — soft',     source: 'base.color.pink.100' },
      { token: 'semantic.color.text.brand-secondary-subtle',   role: 'Brand secondary — faintest', source: 'base.color.pink.50' },
    ],
  },
  {
    group: 'Status',
    rows: [
      { token: 'semantic.color.text.success-extra-bold', role: 'Success — bold',    source: 'base.color.green.800' },
      { token: 'semantic.color.text.success-bold',       role: 'Success — default', source: 'base.color.green.700' },
      { token: 'semantic.color.text.success-semi-bold',  role: 'Success — medium',  source: 'base.color.green.400' },
      { token: 'semantic.color.text.success-medium',     role: 'Success — soft',    source: 'base.color.green.200' },
      { token: 'semantic.color.text.success-subtle',     role: 'Success — faintest',source: 'base.color.green.50' },
      { token: 'semantic.color.text.warning-extra-bold', role: 'Warning — bold',    source: 'base.color.yellow.800' },
      { token: 'semantic.color.text.warning-bold',       role: 'Warning — default', source: 'base.color.yellow.700' },
      { token: 'semantic.color.text.warning-semi-bold',  role: 'Warning — medium',  source: 'base.color.yellow.400' },
      { token: 'semantic.color.text.warning-medium',     role: 'Warning — soft',    source: 'base.color.yellow.100' },
      { token: 'semantic.color.text.warning-subtle',     role: 'Warning — faintest',source: 'base.color.yellow.50' },
      { token: 'semantic.color.text.error-extra-bold',   role: 'Error — bold',      source: 'base.color.red.700' },
      { token: 'semantic.color.text.error-bold',         role: 'Error — default',   source: 'base.color.red.600' },
      { token: 'semantic.color.text.error-semi-bold',    role: 'Error — medium',    source: 'base.color.red.200' },
      { token: 'semantic.color.text.error-medium',       role: 'Error — soft',      source: 'base.color.red.100' },
      { token: 'semantic.color.text.error-subtle',       role: 'Error — faintest',  source: 'base.color.red.50' },
      { token: 'semantic.color.text.info-extra-bold',    role: 'Info — bold',       source: 'base.color.blue.800' },
      { token: 'semantic.color.text.info-bold',          role: 'Info — default',    source: 'base.color.blue.700' },
      { token: 'semantic.color.text.info-semi-bold',     role: 'Info — medium',     source: 'base.color.blue.300' },
      { token: 'semantic.color.text.info-medium',        role: 'Info — soft',       source: 'base.color.blue.100' },
      { token: 'semantic.color.text.info-subtle',        role: 'Info — faintest',   source: 'base.color.blue.50' },
      { token: 'semantic.color.text.accent-extra-bold',  role: 'Accent — bold',     source: 'base.color.orange.700' },
      { token: 'semantic.color.text.accent-bold',        role: 'Accent — default',  source: 'base.color.orange.600' },
      { token: 'semantic.color.text.accent-semi-bold',   role: 'Accent — medium',   source: 'base.color.orange.300' },
      { token: 'semantic.color.text.accent-medium',      role: 'Accent — soft',     source: 'base.color.orange.100' },
      { token: 'semantic.color.text.accent-subtle',      role: 'Accent — faintest', source: 'base.color.orange.50' },
      { token: 'semantic.color.text.decor-extra-bold',   role: 'Decor — bold',      source: 'base.color.teal.800' },
      { token: 'semantic.color.text.decor-bold',         role: 'Decor — default',   source: 'base.color.teal.700' },
      { token: 'semantic.color.text.decor-semi-bold',    role: 'Decor — medium',    source: 'base.color.teal.300' },
      { token: 'semantic.color.text.decor-medium',       role: 'Decor — soft',      source: 'base.color.teal.100' },
      { token: 'semantic.color.text.decor-subtle',       role: 'Decor — faintest',  source: 'base.color.teal.50' },
    ],
  },
  {
    group: 'Disabled',
    rows: [
      { token: 'semantic.color.text.disabled-light',    role: 'Disabled — lightest', source: 'base.color.grey.300' },
      { token: 'semantic.color.text.disabled',          role: 'Disabled — default',  source: 'base.color.grey.400' },
      { token: 'semantic.color.text.disabled-semi-bold',role: 'Disabled — medium',   source: 'base.color.grey.500' },
      { token: 'semantic.color.text.disabled-bold',     role: 'Disabled — bold',     source: 'base.color.grey.600' },
    ],
  },
];

const SURFACE_TOKENS: { group: string; rows: TokenRow[] }[] = [
  {
    group: 'Neutral',
    rows: [
      { token: 'semantic.color.surface.default',    role: 'Page / default background',  source: 'base.color.neutrals.white' },
      { token: 'semantic.color.surface.subtle',     role: 'Subtle tinted background',   source: 'base.color.grey.50' },
      { token: 'semantic.color.surface.light',      role: 'Light card / sidebar bg',    source: 'base.color.grey.100' },
      { token: 'semantic.color.surface.muted',      role: 'Muted surface',              source: 'base.color.grey.200' },
      { token: 'semantic.color.surface.medium',     role: 'Medium grey surface',        source: 'base.color.grey.300' },
      { token: 'semantic.color.surface.semi-bold',  role: 'Semi-bold surface',          source: 'base.color.grey.500' },
      { token: 'semantic.color.surface.bold',       role: 'Bold surface',               source: 'base.color.grey.600' },
      { token: 'semantic.color.surface.extra-bold', role: 'Extra bold surface',         source: 'base.color.grey.700' },
      { token: 'semantic.color.surface.dark',       role: 'Dark surface',               source: 'base.color.grey.800' },
      { token: 'semantic.color.surface.extra-dark', role: 'Darkest surface',            source: 'base.color.grey.900' },
    ],
  },
  {
    group: 'Brand',
    rows: [
      { token: 'semantic.color.surface.brand-primary-extra-bold', role: 'Brand primary — dark fill',    source: 'base.color.purple.700' },
      { token: 'semantic.color.surface.brand-primary',            role: 'Brand primary — fill',         source: 'base.color.purple.600' },
      { token: 'semantic.color.surface.brand-primary-semi-bold',  role: 'Brand primary — tint',         source: 'base.color.purple.200' },
      { token: 'semantic.color.surface.brand-primary-medium',     role: 'Brand primary — soft tint',    source: 'base.color.purple.100' },
      { token: 'semantic.color.surface.brand-primary-subtle',     role: 'Brand primary — faintest tint',source: 'base.color.purple.50' },
      { token: 'semantic.color.surface.brand-secondary-extra-bold', role: 'Brand secondary — dark fill', source: 'base.color.pink.700' },
      { token: 'semantic.color.surface.brand-secondary',          role: 'Brand secondary — fill',       source: 'base.color.pink.600' },
      { token: 'semantic.color.surface.brand-secondary-semi-bold', role: 'Brand secondary — tint',      source: 'base.color.pink.200' },
      { token: 'semantic.color.surface.brand-secondary-medium',   role: 'Brand secondary — soft tint',  source: 'base.color.pink.100' },
      { token: 'semantic.color.surface.brand-secondary-subtle',   role: 'Brand secondary — faintest',   source: 'base.color.pink.50' },
    ],
  },
  {
    group: 'Status',
    rows: [
      { token: 'semantic.color.surface.success-extra-bold', role: 'Success fill',      source: 'base.color.green.800' },
      { token: 'semantic.color.surface.success-bold',       role: 'Success fill',      source: 'base.color.green.700' },
      { token: 'semantic.color.surface.success-semi-bold',  role: 'Success tint',      source: 'base.color.green.400' },
      { token: 'semantic.color.surface.success-medium',     role: 'Success soft',      source: 'base.color.green.100' },
      { token: 'semantic.color.surface.success-subtle',     role: 'Success faintest',  source: 'base.color.green.50' },
      { token: 'semantic.color.surface.warning-extra-bold', role: 'Warning fill',      source: 'base.color.yellow.800' },
      { token: 'semantic.color.surface.warning-bold',       role: 'Warning fill',      source: 'base.color.yellow.700' },
      { token: 'semantic.color.surface.warning-semi-bold',  role: 'Warning tint',      source: 'base.color.yellow.300' },
      { token: 'semantic.color.surface.warning-medium',     role: 'Warning soft',      source: 'base.color.yellow.100' },
      { token: 'semantic.color.surface.warning-subtle',     role: 'Warning faintest',  source: 'base.color.yellow.50' },
      { token: 'semantic.color.surface.error-extra-bold',   role: 'Error fill',        source: 'base.color.red.700' },
      { token: 'semantic.color.surface.error-bold',         role: 'Error fill',        source: 'base.color.red.600' },
      { token: 'semantic.color.surface.error-semi-bold',    role: 'Error tint',        source: 'base.color.red.200' },
      { token: 'semantic.color.surface.error-medium',       role: 'Error soft',        source: 'base.color.red.100' },
      { token: 'semantic.color.surface.error-subtle',       role: 'Error faintest',    source: 'base.color.red.50' },
      { token: 'semantic.color.surface.info-extra-bold',    role: 'Info fill',         source: 'base.color.blue.800' },
      { token: 'semantic.color.surface.info-bold',          role: 'Info fill',         source: 'base.color.blue.700' },
      { token: 'semantic.color.surface.info-semi-bold',     role: 'Info tint',         source: 'base.color.blue.300' },
      { token: 'semantic.color.surface.info-medium',        role: 'Info soft',         source: 'base.color.blue.100' },
      { token: 'semantic.color.surface.info-subtle',        role: 'Info faintest',     source: 'base.color.blue.50' },
      { token: 'semantic.color.surface.accent-extra-bold',  role: 'Accent fill',       source: 'base.color.orange.700' },
      { token: 'semantic.color.surface.accent-bold',        role: 'Accent fill',       source: 'base.color.orange.600' },
      { token: 'semantic.color.surface.accent-semi-bold',   role: 'Accent tint',       source: 'base.color.orange.300' },
      { token: 'semantic.color.surface.accent-medium',      role: 'Accent soft',       source: 'base.color.orange.100' },
      { token: 'semantic.color.surface.accent-subtle',      role: 'Accent faintest',   source: 'base.color.orange.50' },
      { token: 'semantic.color.surface.decor-extra-bold',   role: 'Decor fill',        source: 'base.color.teal.800' },
      { token: 'semantic.color.surface.decor-bold',         role: 'Decor fill',        source: 'base.color.teal.700' },
      { token: 'semantic.color.surface.decor-semi-bold',    role: 'Decor tint',        source: 'base.color.teal.300' },
      { token: 'semantic.color.surface.decor-medium',       role: 'Decor soft',        source: 'base.color.teal.100' },
      { token: 'semantic.color.surface.decor-subtle',       role: 'Decor faintest',    source: 'base.color.teal.50' },
    ],
  },
  {
    group: 'Disabled',
    rows: [
      { token: 'semantic.color.surface.disabled-light',     role: 'Disabled bg — lightest', source: 'base.color.grey.200' },
      { token: 'semantic.color.surface.disabled',           role: 'Disabled bg — default',  source: 'base.color.grey.300' },
      { token: 'semantic.color.surface.disabled-medium',    role: 'Disabled bg — medium',   source: 'base.color.grey.400' },
      { token: 'semantic.color.surface.disabled-semi-bold', role: 'Disabled bg — semi-bold',source: 'base.color.grey.500' },
      { token: 'semantic.color.surface.disabled-bold',      role: 'Disabled bg — bold',     source: 'base.color.grey.600' },
      { token: 'semantic.color.surface.disabled-extra-bold',role: 'Disabled bg — extra bold',source: 'base.color.grey.700' },
    ],
  },
];

const BORDER_TOKENS: { group: string; rows: TokenRow[] }[] = [
  {
    group: 'Neutral',
    rows: [
      { token: 'semantic.color.border.white',      role: 'White border (on dark bg)',    source: 'base.color.neutrals.white' },
      { token: 'semantic.color.border.subtle',     role: 'Faintest border',              source: 'base.color.grey.50' },
      { token: 'semantic.color.border.light',      role: 'Light border',                 source: 'base.color.grey.100' },
      { token: 'semantic.color.border.default',    role: 'Default input / card border',  source: 'base.color.grey.200' },
      { token: 'semantic.color.border.medium',     role: 'Medium border',                source: 'base.color.grey.300' },
      { token: 'semantic.color.border.semi-bold',  role: 'Semi-bold border',             source: 'base.color.grey.400' },
      { token: 'semantic.color.border.bold',       role: 'Bold border',                  source: 'base.color.grey.500' },
      { token: 'semantic.color.border.extra-bold', role: 'Extra bold border',            source: 'base.color.grey.600' },
      { token: 'semantic.color.border.dark',       role: 'Dark border',                  source: 'base.color.grey.700' },
      { token: 'semantic.color.border.extra-dark', role: 'Darkest border',               source: 'base.color.grey.800' },
    ],
  },
  {
    group: 'Brand',
    rows: [
      { token: 'semantic.color.border.brand-primary-extra-bold', role: 'Brand primary — bold',    source: 'base.color.purple.700' },
      { token: 'semantic.color.border.brand-primary',            role: 'Brand primary — default', source: 'base.color.purple.600' },
      { token: 'semantic.color.border.brand-primary-semi-bold',  role: 'Brand primary — light',   source: 'base.color.purple.200' },
      { token: 'semantic.color.border.brand-primary-medium',     role: 'Brand primary — soft',    source: 'base.color.purple.100' },
      { token: 'semantic.color.border.brand-primary-subtle',     role: 'Brand primary — faint',   source: 'base.color.purple.50' },
      { token: 'semantic.color.border.brand-secondary-extra-bold', role: 'Brand secondary — bold', source: 'base.color.pink.700' },
      { token: 'semantic.color.border.brand-secondary',          role: 'Brand secondary — default',source: 'base.color.pink.600' },
      { token: 'semantic.color.border.brand-secondary-semi-bold', role: 'Brand secondary — light', source: 'base.color.pink.200' },
      { token: 'semantic.color.border.brand-secondary-medium',   role: 'Brand secondary — soft',   source: 'base.color.pink.100' },
      { token: 'semantic.color.border.brand-secondary-subtle',   role: 'Brand secondary — faint',  source: 'base.color.pink.50' },
    ],
  },
  {
    group: 'Status',
    rows: [
      { token: 'semantic.color.border.success-extra-bold', role: 'Success — bold',    source: 'base.color.green.700' },
      { token: 'semantic.color.border.success-bold',       role: 'Success — default', source: 'base.color.green.600' },
      { token: 'semantic.color.border.success-semi-bold',  role: 'Success — medium',  source: 'base.color.green.300' },
      { token: 'semantic.color.border.success-medium',     role: 'Success — soft',    source: 'base.color.green.100' },
      { token: 'semantic.color.border.success-subtle',     role: 'Success — faintest',source: 'base.color.green.50' },
      { token: 'semantic.color.border.warning-extra-bold', role: 'Warning — bold',    source: 'base.color.yellow.800' },
      { token: 'semantic.color.border.warning-bold',       role: 'Warning — default', source: 'base.color.yellow.700' },
      { token: 'semantic.color.border.warning-semi-bold',  role: 'Warning — medium',  source: 'base.color.yellow.400' },
      { token: 'semantic.color.border.warning-medium',     role: 'Warning — soft',    source: 'base.color.yellow.100' },
      { token: 'semantic.color.border.warning-subtle',     role: 'Warning — faintest',source: 'base.color.yellow.50' },
      { token: 'semantic.color.border.error-extra-bold',   role: 'Error — bold',      source: 'base.color.red.700' },
      { token: 'semantic.color.border.error-bold',         role: 'Error — default',   source: 'base.color.red.600' },
      { token: 'semantic.color.border.error-semi-bold',    role: 'Error — medium',    source: 'base.color.red.300' },
      { token: 'semantic.color.border.error-medium',       role: 'Error — soft',      source: 'base.color.red.100' },
      { token: 'semantic.color.border.error-subtle',       role: 'Error — faintest',  source: 'base.color.red.50' },
      { token: 'semantic.color.border.info-extra-bold',    role: 'Info — bold',       source: 'base.color.blue.800' },
      { token: 'semantic.color.border.info-bold',          role: 'Info — default',    source: 'base.color.blue.700' },
      { token: 'semantic.color.border.info-semi-bold',     role: 'Info — medium',     source: 'base.color.blue.300' },
      { token: 'semantic.color.border.info-medium',        role: 'Info — soft',       source: 'base.color.blue.100' },
      { token: 'semantic.color.border.info-subtle',        role: 'Info — faintest',   source: 'base.color.blue.50' },
      { token: 'semantic.color.border.accent-extra-bold',  role: 'Accent — bold',     source: 'base.color.orange.700' },
      { token: 'semantic.color.border.accent-bold',        role: 'Accent — default',  source: 'base.color.orange.600' },
      { token: 'semantic.color.border.accent-semi-bold',   role: 'Accent — medium',   source: 'base.color.orange.300' },
      { token: 'semantic.color.border.accent-medium',      role: 'Accent — soft',     source: 'base.color.orange.100' },
      { token: 'semantic.color.border.accent-subtle',      role: 'Accent — faintest', source: 'base.color.orange.50' },
      { token: 'semantic.color.border.decor-extra-bold',   role: 'Decor — bold',      source: 'base.color.teal.800' },
      { token: 'semantic.color.border.decor-bold',         role: 'Decor — default',   source: 'base.color.teal.700' },
      { token: 'semantic.color.border.decor-semi-bold',    role: 'Decor — medium',    source: 'base.color.teal.300' },
      { token: 'semantic.color.border.decor-medium',       role: 'Decor — soft',      source: 'base.color.teal.100' },
      { token: 'semantic.color.border.decor-subtle',       role: 'Decor — faintest',  source: 'base.color.teal.50' },
    ],
  },
  {
    group: 'Disabled',
    rows: [
      { token: 'semantic.color.border.disabled',         role: 'Disabled border',         source: 'base.color.grey.200' },
      { token: 'semantic.color.border.disabled-medium',  role: 'Disabled border — medium',source: 'base.color.grey.300' },
      { token: 'semantic.color.border.disabled-semi-bold',role:'Disabled border — semi',  source: 'base.color.grey.400' },
      { token: 'semantic.color.border.disabled-bold',    role: 'Disabled border — bold',  source: 'base.color.grey.500' },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isAlpha(hex: string) {
  return hex.length > 7;
}

// ─── Row component ────────────────────────────────────────────────────────────

function TokenTableRow({
  row,
  index,
  onCopy,
}: {
  row: TokenRow;
  index: number;
  onCopy: (hex: string) => void;
}) {
  const hex = BASE[row.source] ?? '#cccccc';
  const alpha = isAlpha(hex);

  return (
    <tr
      style={{
        backgroundColor: index % 2 === 1
          ? 'hsl(var(--semantic-color-surface-subtle))'
          : 'transparent',
      }}
    >
      {/* Swatch */}
      <td className="py-3 pl-4 pr-3 w-10">
        <button
          onClick={() => onCopy(hex)}
          className="relative flex-shrink-0 border focus-visible:outline-none focus-visible:ring-2"
          style={{ width: 30, height: 30, borderRadius: 8, borderColor: 'hsl(var(--semantic-color-border-default))' }}
          title={`Copy ${hex}`}
        >
          {alpha && (
            <span
              className="absolute inset-0"
              style={{
                borderRadius: 8,
                backgroundImage:
                  'linear-gradient(45deg,#bbb 25%,transparent 25%),' +
                  'linear-gradient(-45deg,#bbb 25%,transparent 25%),' +
                  'linear-gradient(45deg,transparent 75%,#bbb 75%),' +
                  'linear-gradient(-45deg,transparent 75%,#bbb 75%)',
                backgroundSize: '6px 6px',
                backgroundPosition: '0 0,0 3px,3px -3px,-3px 0',
              }}
            />
          )}
          <span
            className="absolute inset-0"
            style={{ borderRadius: 8, backgroundColor: hex }}
          />
        </button>
      </td>

      {/* Token name */}
      <td className="py-3 pr-6">
        <code
          className="text-xs font-mono"
          style={{ color: 'hsl(var(--semantic-color-text-brand-primary))' }}
        >
          {row.token}
        </code>
      </td>

      {/* Role */}
      <td className="py-3 pr-6 text-sm" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
        {row.role}
      </td>

      {/* Hex */}
      <td className="py-3 pr-6">
        <button
          onClick={() => onCopy(hex)}
          className="font-mono text-xs transition-opacity hover:opacity-70"
          style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
        >
          {hex.toUpperCase()}
        </button>
      </td>

      {/* Source token */}
      <td className="py-3 pr-4">
        <code
          className="text-xs font-mono"
          style={{ color: 'hsl(var(--semantic-color-text-muted))' }}
        >
          {row.source}
        </code>
      </td>
    </tr>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

function TokenSection({
  title,
  groups,
  onCopy,
}: {
  title: string;
  groups: { group: string; rows: TokenRow[] }[];
  onCopy: (hex: string) => void;
}) {
  let rowIndex = 0;
  return (
    <section className="flex flex-col gap-3">
      <h2
        className="text-xl font-bold"
        style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
      >
        {title}
      </h2>

      <div
        className="rounded-xl border overflow-hidden"
        style={{ borderColor: 'hsl(var(--semantic-color-border-default))' }}
      >
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr style={{ backgroundColor: 'hsl(var(--semantic-color-surface-subtle))' }}>
              <th className="py-2.5 pl-4 pr-3 text-left w-10" />
              <th
                className="py-2.5 pr-6 text-left text-xs font-semibold tracking-wide uppercase"
                style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
              >
                Token
              </th>
              <th
                className="py-2.5 pr-6 text-left text-xs font-semibold tracking-wide uppercase"
                style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
              >
                Role
              </th>
              <th
                className="py-2.5 pr-6 text-left text-xs font-semibold tracking-wide uppercase"
                style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
              >
                Value
              </th>
              <th
                className="py-2.5 pr-4 text-left text-xs font-semibold tracking-wide uppercase"
                style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
              >
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.map((g) => (
              <>
                {/* Group label row */}
                <tr
                  key={`label-${g.group}`}
                  style={{ backgroundColor: 'hsl(var(--semantic-color-surface-light))' }}
                >
                  <td
                    colSpan={5}
                    className="py-1.5 pl-4 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: 'hsl(var(--semantic-color-text-tertiary))' }}
                  >
                    {g.group}
                  </td>
                </tr>
                {g.rows.map((row) => (
                  <TokenTableRow
                    key={row.token}
                    row={row}
                    index={rowIndex++}
                    onCopy={onCopy}
                  />
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function Toast({ hex }: { hex: string }) {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium pointer-events-none"
      style={{
        backgroundColor: 'hsl(var(--semantic-color-text-primary))',
        color: 'hsl(var(--semantic-color-surface-default))',
      }}
    >
      <span
        className="inline-block size-3 rounded-sm border"
        style={{ backgroundColor: hex, borderColor: 'rgba(255,255,255,0.3)' }}
      />
      {hex.toUpperCase()} copied!
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SemanticColours() {
  const [toast, setToast] = useState<string | null>(null);

  const handleCopy = useCallback((hex: string) => {
    navigator.clipboard.writeText(hex).catch(() => {});
    setToast(hex);
    setTimeout(() => setToast(null), 1800);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {/* Page header */}
      <div className="flex flex-col gap-1.5">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: 'hsl(var(--semantic-color-text-primary))' }}
        >
          Semantic Colours
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--semantic-color-text-secondary))' }}>
          Semantic tokens map base palette values to roles — use these in components, never raw hex.
        </p>
      </div>

      <TokenSection title="Text"    groups={TEXT_TOKENS}    onCopy={handleCopy} />
      <TokenSection title="Surface" groups={SURFACE_TOKENS} onCopy={handleCopy} />
      <TokenSection title="Border"  groups={BORDER_TOKENS}  onCopy={handleCopy} />

      {toast && <Toast hex={toast} />}
    </div>
  );
}
