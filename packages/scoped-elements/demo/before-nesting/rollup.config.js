import { createSpaConfig } from '@open-wc/building-rollup';
import merge from 'deepmerge';

const baseConfig = createSpaConfig({
  outputDir: '../../_site/scoped-elements/demo/before-nesting',
  legacyBuild: true,
});

export default merge(baseConfig, {
  input: './demo/before-nesting/index.html',
});
