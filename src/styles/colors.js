import chroma from 'chroma-js';

const createGradient = (type, direction, start, stop, opacity) => {
  const startHex = chroma(start)
    .alpha(opacity)
    .hex();
  const stopHex = chroma(stop)
    .alpha(opacity)
    .hex();

  return `${type}(${direction}, ${startHex}, ${stopHex})`;
};

const createLinearGradient = (direction, start, stop, opacity) => {
  return createGradient('linear-gradient', direction, start, stop, opacity);
};

/**
 * Provides a map back to our StyleGuide and the color-names from our UX team.
 * https://xd.adobe.com/spec/8fd8a262-c78f-4786-78c2-a4e8cd06e256-f9e9/
 */
export const styleGuideColors = {
  royalBlue: '#27AE60', // Primary Brand Blue
  blueSkies: '#84C05D', // Secondary Brand Blue
  punchRed: '#FA5776', // Error or Failure
  tangerine: '#FB962E', // Warning
  gold: '#FFCD1B', // Star Rating
  seafoam: '#46EEAA',
  teal: '#2CBFC7',
  lime: '#7ED321',
  mint: '#54D169',
  lavender: '#975ECF',

  // Primarily for ADA-compatibility
  raspberry: '#EB0D38', // Error or Failure Text
  pumpkinSpice: '#E57704', // Warning Text
  basil: '#028918', // Success Text
  cobalt: '#025DCB', // Secondary Blue Hover

  // Calendar color
  lightBlue: '#BCE6FF',
  darkBlue: '#315276',
  lightPurple: '#EADFF6',
  darkPurple: '#794BA6',
  lightGreen: '#E1F0E4',
  darkGreen: '#027D16',
};

export const baseColors = {
  white: '#FFFFFF',
  gray1: '#FAFBFC',
  gray2: '#F3F4F8',
  gray3: '#E3E4E8',
  gray4: '#D3D4D8',
  gray5: '#B3B4B8',
  gray6: '#939498',
  gray7: '#737478',
  gray8: '#232428',
  black: '#000000',
  lightBlack: '#2D2D2D',

  primaryBrandColor: styleGuideColors.royalBlue,
  secondaryBrandColor: styleGuideColors.blueSkies,

  deepRed: styleGuideColors.raspberry,
  red: styleGuideColors.punchRed,
  lightRed: '#FEDDE4',
  deepOrange: '#b85e00',
  darkOrange: styleGuideColors.pumpkinSpice,
  orange: styleGuideColors.tangerine,
  lightOrange: '#FEEFE0',
  lightOrange2: '#FEE4BC',
  yellow: styleGuideColors.gold,
  green: styleGuideColors.lime,
  green1: '#68D67B',
  green2: '#7EDC8E',
  lightGreen: '#E5F6D3',
  limeGreen: styleGuideColors.seafoam,
  grassGreen: styleGuideColors.mint,
  deepGreen: styleGuideColors.basil,
  brightBlue: '#00A2E2',
  lightBlue: '#DEF3FF',
  deepBlue: styleGuideColors.cobalt,
  purple: styleGuideColors.lavender,
  shadow: '#3F3F3F66',
  mediumGray: '#535458',
  skyBlue: '#BCE6FF',
  deepSkyBlue: '#315276',
  

  errorColor: styleGuideColors.raspberry,
  warningColor: styleGuideColors.tangerine,
  successColor: styleGuideColors.lime,
  successBarColor: styleGuideColors.basil,
  infoColor: styleGuideColors.cobalt,
  progressBarColor: '#CCECFF',

  transparentWhite: '#FFFFFF33',
  trasnparentGray: '#7374781A',

  gradients: {
    lBlueToBlue: opacity => createLinearGradient('to right', '#6EE2F5', '#6454F0', opacity),
    lightBlackToWhite: 'linear-gradient(180deg,rgba(84, 84, 84, 0.8) 0%,rgba(255, 255, 255, 0) 50%)',
    lightGreenToGreen: 'linear-gradient(to right, #46EEAA, #2CBFC7)',
    lightGreenToGreen2: { start: '#46EEAA', stop: '#2CBFC7' },
    lOrangeToOrange: opacity => createLinearGradient('to right', '#FFA62E', '#EA4D2C', opacity),

    /**
     * Unused in app, but saved in-case we need to bring these back quickly
     * Probably worth deleting if we still aren't using a few months from now
     */
    // blueToBlue: 'linear-gradient(to right, #59C2FF, #1270E3)',
    // lightBlueToBlue: 'linear-gradient(to right, #6EE2F5, #6454F0)',
    // lightBlueToLightGreen: 'linear-gradient(to right, #00FFED, #00B8BA)',
    // lightBlueToLightGreen2: { start: '#00FFED', stop: '#00B8BA' },
    // lightBlueToPurple: 'linear-gradient(to right, #7BF2E9, #B65EBA)',
    // lightGreenToDarkGreen: 'linear-gradient(to right, #AFF57A, #54D169)',
    // orangeToOrange: 'linear-gradient(to right, #FFA62E, #EA4D2C)',
    // pinkToBlue: 'linear-gradient(to right, #F869D5, #5650DE)',
    // pinkToPink: 'linear-gradient(to right, #FF9897, #F650A0)',
    // pinkToPurple: 'linear-gradient(to right, #FF6CAB, #7366FF)',
    // pinkToPurple2: { start: '#FF6CAB', stop: '#7366FF' },
    // pinkToRed: 'linear-gradient(to right, #FFCFA5, #EE4D5F)',
    // purpleToBlue: 'linear-gradient(to right, #B65EBA, #2E8DE1)',
    // redToPurple: 'linear-gradient(to right, #FF5B94, #8441A4)',
    // redToRed: 'linear-gradient(to right, #FF7C6E, #F5317F)',
    // yellowToOrange: 'linear-gradient(to right, #FFCF1B, #FF881B)',
  },
};

export const performanceScoreColors = {
  negative: '#eb0d39',
  neutral: '#939498',
  positive: '#028918',
  notApplicable: '#51504D',
  unknown: '#ffcd1d',
};
