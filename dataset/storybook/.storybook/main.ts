import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
  framework: '@storybook/vue3-vite',
}
export default config
