import chroma from 'chroma-js';
import { defaultTheme } from './default_theme';
import { baseColors } from '../colors';

const darkerPrimaryColor = chroma(baseColors.primaryBrandColor).darken(1);

export const adaTheme = {
  ...defaultTheme,

  navIconColor: baseColors.gray7,
  navFontColor: baseColors.gray7,

  secondaryFontColor: baseColors.gray7,

  primaryButtonHoverColor: darkerPrimaryColor,
  primaryButtonDisabledColor: baseColors.gray7,
  secondaryButtonDisabledFontColor: baseColors.gray7,

  caterpillarButtonBorder: baseColors.gray7,

  coiUpcomingRenewalColor: baseColors.deepBlue,
  coiChipBackgroundColor: baseColors.white,

  fieldPlaceholderColor: baseColors.gray7,

  blueChipBackgroundColor: baseColors.white,
  blueChipFontColor: baseColors.primaryBrandColor,
  blueChipOptionFontColor: baseColors.primaryBrandColor,
  blueChipBorderColor: baseColors.primaryBrandColor,

  greenChipBackgroundColor: baseColors.white,
  greenChipFontColor: baseColors.deepGreen,
  greenChipOptionFontColor: baseColors.deepGreen,
  greenChipBorderColor: baseColors.deepGreen,

  filledRedChipBackgroundColor: baseColors.deepRed,
  filledRedChipFontColor: baseColors.white,
  filledRedChipOptionFontColor: baseColors.deepRed,
  filledRedChipBorderColor: baseColors.deepRed,

  redChipBackgroundColor: baseColors.white,
  redChipFontColor: baseColors.deepRed,
  redChipOptionFontColor: baseColors.deepRed,
  redChipBorderColor: baseColors.deepRed,

  orangeChipBackgroundColor: baseColors.white,
  orangeChipFontColor: baseColors.deepOrange,
  orangeChipOptionFontColor: baseColors.deepOrange,
  orangeChipBorderColor: baseColors.deepOrange,

  grayChipBackgroundColor: baseColors.white,
  grayChipFontColor: baseColors.gray7,
  grayChipOptionFontColor: baseColors.gray7,
  grayChipBorderColor: baseColors.gray7,

  dashedGrayChipBackgroundColor: baseColors.white,
  dashedGrayChipFontColor: baseColors.gray7,
  dashedGrayChipOptionFontColor: baseColors.gray7,
  dashedGrayChipBorderColor: baseColors.gray7,

  actionButtonColor: baseColors.gray7,
  gridColumnsMenuIconColor: baseColors.gray7,

  tabListColor: baseColors.gray7,

  selectOptionFontColor: baseColors.gray7,

  linkHoverColor: darkerPrimaryColor,
  linkTextDecoration: 'underline',

  tableHeaderFontColor: baseColors.gray7,
  tableRowFontColor: baseColors.gray7,

  gridFontColor: baseColors.mediumGray,
  gridSmallFontColor: baseColors.gray7,
  gridHeaderColor: baseColors.gray8,

  lightLabelColor: baseColors.gray7,

  optionalLabelColor: baseColors.gray7,

  historySystemCommentColor: baseColors.gray8,
  historyCommentMetaColor: baseColors.gray7,

  fileDropColor: baseColors.gray7,
  fileDropActiveBorderColor: baseColors.gray7,
  fileDropRejectBorderColor: baseColors.gray7,

  accordionTitleColor: baseColors.gray7,
  accordionActionsButtonColor: baseColors.gray7,

  datePickerInactiveTextColor: baseColors.gray7,
  datePickerSelectedDayHoverColor: darkerPrimaryColor,
  datePickerInactiveDecoration: 'line-through',

  radioLabelColor: baseColors.gray7,

  attachmentInfoColor: baseColors.gray7,

  nestedTabFontColor: baseColors.gray7,

  selectDetailsFontColor: baseColors.gray7,

  contextMenuFontColor: baseColors.gray7,

  securityIncluded: baseColors.deepGreen,

  gridPaginationActionText: baseColors.gray7,
  gridPaginationActionIcons: baseColors.gray7,
  gridPagintaionDisabledActionIcons: baseColors.gray2,
  gridPaginationTotalText: baseColors.gray8,

  circularProgressColor: baseColors.deepBlue,
};
