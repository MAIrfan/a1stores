import chroma from 'chroma-js';
import { baseColors } from '../colors';
import { baseFonts } from '../fonts';

export const defaultTheme = {
  ...baseFonts,
  baseColors,

  fontSizeLargeH1: '3.2rem',
  fontSizeH1: '2.4rem',
  fontSizeH2: '1.8rem',
  fontSizeH3: '1.6rem',
  fontsizeH4: '1.4rem',
  fontSizeSmall: '1.2rem',
  fontSizeTiny: '1rem',

  primaryColor: baseColors.primaryBrandColor,
  secondaryColor: baseColors.secondaryBrandColor,

  defaultIconColor: baseColors.gray6,
  defaultIconButtonColor: baseColors.gray4,
  defaultIconButtonActiveStrokeColor: baseColors.gray7,
  defaultIconButtonActiveFillColor: 'rgba(35, 36, 40, 0.2)',

  /**
   * General Form-Field Colors
   */
  fieldBorderColor: baseColors.gray4,
  fieldPlaceholderColor: baseColors.gray6,
  focusedFieldBorderColor: baseColors.secondaryBrandColor,

  gridFontSize: '1.2rem',
  gridSmallFontSize: '1.2rem',
  gridFontColor: baseColors.mediumGray,
  gridSmallFontColor: baseColors.gray7,
  gridRowHeight: '5rem',

  circularProgressColor: baseColors.brightBlue,

  gridBorderColor: baseColors.gray3,
  gridColumnsMenuColor: baseColors.gray4,
  gridColumnsMenuHoverBackgroundColor: baseColors.gray2,
  gridColumnsMenuHoverColor: baseColors.gray6,
  gridColumnsMenuIconColor: baseColors.gray6,
  gridHeaderColor: baseColors.gray8,
  gridHeaderBackgroundColor: baseColors.gray1,
  gridSubHeaderBackgroundColor: baseColors.gray2,

  gridRowHighlightColor: baseColors.gray1,
  gridRowNoHighlightColor: baseColors.white,

  gridSelectFontColor: baseColors.gray6,
  gridSelectFontHoverColor: baseColors.gray8,
  gridSelectFocusColor: baseColors.secondaryBrandColor,

  gridCheckboxBorderColor: baseColors.gray4,
  gridCheckboxBackgroundColor: baseColors.gray1,
  gridCheckboxActiveBackgroundColor: baseColors.secondaryBrandColor,

  gridBulkActionColor: baseColors.gray6,
  gridBulkActionSelectedColor: baseColors.primaryBrandColor,
  gridBulkActionSelectedBackgroundColor: baseColors.gray2,
  gridBulkActionHoverColor: baseColors.gray4,
  gridBulkActionSelectedSectionBorderColor: baseColors.gray3,

  gridPaginationActionText: baseColors.gray6,
  gridPaginationActionIcons: baseColors.gray4,
  gridPagintaionDisabledActionIcons: baseColors.gray2,
  gridPaginationTotalText: baseColors.gray8,

  filterChipColor: baseColors.skyBlue,
  filterChipFontColor: baseColors.deepSkyBlue,
  filterChipClearHoverColor: baseColors.white,

  contextMenuBorderColor: baseColors.gray4,
  contextMenuFocusedBorderColor: baseColors.secondaryBrandColor,
  contextMenuItemHoverBackground: baseColors.gray2,
  contextMenuFontColor: baseColors.gray6,
  contextMenuFontSize: '1.2rem',

  linkColor: baseColors.deepBlue,
  linkHoverColor: baseColors.secondaryBrandColor,
  linkTextDecoration: 'none',

  baseColorsButtonFocusColor: baseColors.primaryBrandColor,
  baseColorsButtonFocusFontColor: baseColors.white,

  toggleRendererBackgroundColor: baseColors.gray5,

  primaryButtonColor: baseColors.primaryBrandColor,
  primaryButtonFontColor: baseColors.white,
  primaryButtonHoverColor: baseColors.secondaryBrandColor,
  primaryButtonDisabledColor: baseColors.gray3,

  secondaryButtonColor: baseColors.white,
  secondaryButtonFontColor: baseColors.primaryBrandColor,
  secondaryButtonBorderColor: baseColors.primaryBrandColor,
  secondaryButtonHoverColor: baseColors.primaryBrandColor,
  secondaryButtonHoverFontColor: baseColors.white,
  secondaryButtonDisabledColor: baseColors.white,
  secondaryButtonDisabledFontColor: baseColors.gray4,
  secondaryButtonDisabledBorder: baseColors.gray4,

  tertiaryButtonColor: baseColors.white,
  tertiaryButtonFontColor: baseColors.primaryBrandColor,
  tertiaryButtonBorderColor: baseColors.primaryBrandColor,
  tertiaryButtonHoverColor: baseColors.primaryBrandColor,
  tertiaryButtonHoverFontColor: baseColors.white,
  tertiaryButtonDisabledColor: baseColors.white,
  tertiaryButtonDisabledFontColor: baseColors.gray4,
  tertiaryButtonDisabledBorder: baseColors.gray4,

  tinyButtonColor: baseColors.white,
  tinyButtonFontColor: baseColors.primaryBrandColor,
  tinyButtonBorderColor: baseColors.gray3,
  tinyButtonHoverColor: baseColors.primaryBrandColor,
  tinyButtonHoverFontColor: baseColors.white,
  tinyButtonDisabledColor: baseColors.white,
  tinyButtonDisabledFontColor: baseColors.gray4,
  tinyButtonDisabledBorder: baseColors.gray4,

  gradientIconColor: 'url(#nav-link-icon-gradient)',

  caterpillarButtonBorder: baseColors.gray4,
  caterpillarButtonCheckedHoverBackground: baseColors.primaryBrandColor,
  caterpillarButtonHoverBorder: baseColors.primaryBrandColor,
  caterpillarButtonHoverBackground: baseColors.gray1,
  caterpillarButtonUncheckedText: baseColors.gray8,
  caterpillarButtonLighboxUnCheckedColor: baseColors.gray6,
  caterpillarButtonLighboxBackgroundColor: baseColors.gray2,
  caterpillarButtonLighboxCheckedColor: baseColors.primaryBrandColor,

  inputBackgroundColor: baseColors.white,

  selectBorderColor: baseColors.gray4,
  selectIndicatorColor: baseColors.gray5,

  selectListBackgroundColor: baseColors.white,
  selectListBorderColor: baseColors.gray4,
  selectListIndicatorColor: baseColors.gray8,

  selectOptionBackgroundColor: baseColors.white,
  selectOptionActiveBackgroundColor: baseColors.gray1,
  selectOptionSelectedActiveBackgroundColor: baseColors.gray2,
  selectOptionFontColor: baseColors.gray6,
  selectOptionActiveFontColor: baseColors.gray8,

  selectGroupHeadingFontColor: baseColors.gray7,

  selectMenuBorderColor: baseColors.gray4,
  selectMenuSelectAllColor: baseColors.primaryBrandColor,
  selectMenuSelectAllBorderColor: baseColors.gray4,

  selectMenuTypeMoreBorderColor: baseColors.gray4,
  selectMenuTypeMoreColor: baseColors.gray6,

  selectInfoPillBackgroundColor: baseColors.gray2,
  selectInfoPillFontColor: baseColors.gray8,

  selectDetailsFontColor: baseColors.gray6,

  selectAccentIconColor: baseColors.gray6,

  textAreaBorderColor: baseColors.gray4,
  textAreaBackgroundColor: baseColors.white,

  datePickerTextColor: baseColors.black,
  datePickerInactiveTextColor: baseColors.gray4,
  datePickerBorderColor: baseColors.gray4,
  datePickerIconColor: baseColors.gray6,
  datePickerHoverColor: baseColors.primaryBrandColor,
  focusedDatePickerBorderColor: baseColors.secondaryBrandColor,
  datePickerSelectedDayColor: baseColors.primaryBrandColor,
  datePickerSelectedDayHoverColor: baseColors.deepBlue,
  datePickerInactiveDecoration: null,
  datePickerOutsideTextColor: baseColors.gray4,

  checkboxBorderColor: baseColors.gray4,
  checkboxBackgroundColor: baseColors.gray1,
  checkboxSelectedBorderColor: baseColors.primaryBrandColor,
  checkboxSelectedBackgroundColor: baseColors.primaryBrandColor,
  checkboxSelectedCheckmarkColor: baseColors.white,
  checkboxDisabledBorderColor: baseColors.gray4,
  checkboxDisabledBackgroundColor: baseColors.gray4,
  checkboxDisabledCheckmarkColor: baseColors.white,

  radioBorderColor: baseColors.gray4,
  radioBackgroundColor: baseColors.white,
  radioSelectedBorderColor: baseColors.primaryBrandColor,
  radioSelectedBackgroundColor: baseColors.secondaryBrandColor,
  radioSelectedCheckmarkColor: baseColors.white,
  radioDisabledBorderColor: baseColors.gray4,
  radioDisabledBackgroundColor: baseColors.white,
  radioDisabledCheckmarkColor: baseColors.gray4,
  radioLabelCheckedColor: baseColors.gray8,
  radioLabelColor: baseColors.gray6,

  impersonationHeaderColor: baseColors.gray7,
  impersonationHeaderFontColor: baseColors.white,

  commentBoxBackgroundColor: baseColors.gray1,

  primaryNotificationBarColor: baseColors.grassGreen,
  primaryNotificationBarFontColor: baseColors.white,
  primaryNotificationBarCloseIconColor: baseColors.gray8,

  errorNotificationBarColor: baseColors.errorColor,
  errorNotificationBarFontColor: baseColors.white,
  errorNotificationBarCloseIconColor: baseColors.gray8,

  successBarColor: baseColors.successBarColor,
  infoNotificationBarColor: baseColors.infoColor,
  inlineInfoNotificationBarColor: chroma(baseColors.secondaryBrandColor).alpha(0.2),
  progressNotificationBarColor: baseColors.white,
  progressNotificationTextColor: baseColors.gray8,
  progressNotificationSecondaryTextColor: baseColors.mediumGray,
  progressNotificationSecondaryLightTextColor: baseColors.gray7,
  progressNotificationBorderColor: baseColors.gray3,

  closeButtonHoverBackground: baseColors.transparentWhite,
  closeButtonHoverColorGray: baseColors.gray8,
  closeButtonHoverBackgroundGray: baseColors.trasnparentGray,

  progressBarBackground: baseColors.progressBarColor,
  progressBarFill: baseColors.primaryBrandColor,

  modalOverylayColor: baseColors.gradients.lBlueToBlue(0.8),

  emptyPageBackgroundColor: baseColors.gray2,

  navBackgroundColor: baseColors.gray1,
  navBorderColor: baseColors.gray4,
  navFontColor: baseColors.gray6,
  navIconColor: baseColors.gray4,
  navIconSelectedColor: 'url(#nav-link-icon-gradient)',
  navLinkSelectedBorderColor: baseColors.secondaryBrandColor,
  navLinkSelectedBackgroundColor: baseColors.gray2,
  navLinkSelectedFontColor: baseColors.black,
  navLinkHoverTextColor: baseColors.gray8,
  navLinkDisabledTextColor: baseColors.gray4,

  navCreateButtonBorderColor: baseColors.gray4,
  navCreateButtonBorderHoverColor: baseColors.secondaryBrandColor,
  navCreateButtonBackgroundColor: baseColors.white,
  navCreateButtonIconColor: 'url(#nav-link-icon-gradient)',

  navToggleBorderColor: baseColors.gray4,
  navToggleBackgroundColor: baseColors.white,

  navProfileMenuBorderColor: baseColors.gray4,

  navProPillBackgroundColor: baseColors.deepGreen,

  avatarOutOfOffice: baseColors.deepRed,

  profileAvatarIconColor: baseColors.gray4,
  pageTitleColor: baseColors.gray8,
  pageFooterTextColor: baseColors.gray7,
  pageSubtitleColor: baseColors.gray7,
  pageFooterBorderColor: baseColors.gray3,

  coiUpcomingRenewalColor: baseColors.secondaryBrandColor,
  coiChipBackgroundColor: baseColors.white,

  actionButtonColor: baseColors.gray6,

  errorColor: baseColors.errorColor,
  warningColor: baseColors.warningColor,
  successColor: baseColors.successColor,

  requiredColor: baseColors.errorColor,

  editSectionBorderColor: baseColors.gray3,
  editSectionBoxShadowColor: baseColors.gray3,

  attachmentInfoBackgroundColor: baseColors.gray4,
  attachmentInfoHoverBackgroundColor: baseColors.gray6,
  attachmentInfoHoverBackgroundGradient: baseColors.gradients.lightBlackToWhite,
  attachmentInfoColor: baseColors.white,
  fileDropBorderColor: baseColors.gray3,
  fileDropColor: baseColors.gray6,
  fileDropActiveBorderColor: baseColors.gray7,
  fileDropActiveColor: baseColors.primaryBrandColor,
  fileDropRejectBorderColor: baseColors.gray7,
  fileDropRejectColor: baseColors.gray8,

  tabListBorderColor: baseColors.gray3,
  tabListBoxShadow: baseColors.gray3,
  tabListFontSize: '1.6rem',
  tabListFontSizeSmall: '1.2rem',
  tabListColor: baseColors.gray6,
  tabListActiveBorderColor: baseColors.secondaryBrandColor,
  tabListActiveColor: baseColors.gray8,

  historyGroupTitleColor: baseColors.gray8,
  historyCommentColor: baseColors.gray8,
  historyCommentCreator: baseColors.primaryBrandColor,
  historySystemCommentColor: baseColors.gray8,
  historyCommentMetaColor: baseColors.gray6,
  historyCommentMetaSize: '1.2rem',

  lightLabelColor: baseColors.gray6,
  lightLabelHoverColor: baseColors.secondaryBrandColor,
  lightBorderColor: baseColors.gray2,
  lightBoxShadow: baseColors.gray2,
  lightBackgroundColor: baseColors.gray2,

  optionalLabelColor: baseColors.gray5,

  mediumLabelColor: baseColors.gray7,
  mediumBorderColor: baseColors.gray4,
  mediumBoxShadowColor: baseColors.gray4,

  boxShadowColor: baseColors.shadow,

  defaultFontColor: baseColors.gray8,
  secondaryFontColor: baseColors.gray6,
  defaultFontSize: '1.4rem',

  white: baseColors.white,
  black: baseColors.black,

  priorityLabel: baseColors.gray8,

  blueChipBackgroundColor: baseColors.white,
  blueChipFontColor: baseColors.secondaryBrandColor,
  blueChipOptionFontColor: baseColors.secondaryBrandColor,
  blueChipBorderColor: baseColors.secondaryBrandColor,

  filledBlueChipBackgroundColor: baseColors.secondaryBrandColor,
  filledBlueChipFontColor: baseColors.black,
  filledBlueChipOptionFontColor: baseColors.secondaryBrandColor,
  filledBlueChipBorderColor: baseColors.secondaryBrandColor,

  darkBlueChipBackgroundColor: baseColors.white,
  darkBlueChipFontColor: baseColors.primaryBrandColor,
  darkBlueChipOptionFontColor: baseColors.primaryBrandColor,
  darkBlueChipBorderColor: baseColors.primaryBrandColor,

  filledDarkBlueChipBackgroundColor: baseColors.primaryBrandColor,
  filledDarkBlueChipFontColor: baseColors.white,
  filledDarkBlueChipOptionFontColor: baseColors.primaryBrandColor,
  filledDarkBlueChipBorderColor: baseColors.primaryBrandColor,

  filledGreenChipBackgroundColor: baseColors.deepGreen,
  filledGreenChipFontColor: baseColors.white,
  filledGreenChipOptionFontColor: baseColors.white,
  filledGreenChipBorderColor: baseColors.deepGreen,

  greenChipBackgroundColor: baseColors.white,
  greenChipFontColor: baseColors.green,
  greenChipOptionFontColor: baseColors.green,
  greenChipBorderColor: baseColors.green,

  filledRedChipBackgroundColor: baseColors.red,
  filledRedChipFontColor: baseColors.white,
  filledRedChipOptionFontColor: baseColors.red,
  filledRedChipBorderColor: baseColors.red,

  redChipBackgroundColor: baseColors.white,
  redChipFontColor: baseColors.red,
  redChipOptionFontColor: baseColors.red,
  redChipBorderColor: baseColors.red,

  filledOrangeChipBackgroundColor: baseColors.darkOrange,
  filledOrangeChipFontColor: baseColors.white,
  filledOrangeChipOptionFontColor: baseColors.darkOrange,
  filledOrangeChipBorderColor: baseColors.darkOrange,

  orangeChipBackgroundColor: baseColors.white,
  orangeChipFontColor: baseColors.deepOrange,
  orangeChipOptionFontColor: baseColors.deepOrange,
  orangeChipBorderColor: baseColors.deepOrange,

  grayChipBackgroundColor: baseColors.white,
  grayChipFontColor: baseColors.gray5,
  grayChipOptionFontColor: baseColors.gray5,
  grayChipBorderColor: baseColors.gray5,

  darkGrayChipBackgroundColor: baseColors.white,
  darkGrayChipFontColor: baseColors.gray8,
  darkGrayChipOptionFontColor: baseColors.gray8,
  darkGrayChipBorderColor: baseColors.gray8,

  lightGrayChipBackgroundColor: baseColors.white,
  lightGrayChipFontColor: baseColors.gray7,
  lightGrayChipOptionFontColor: baseColors.gray4,
  lightGrayChipBorderColor: baseColors.gray4,

  filledGrayChipBackgroundColor: baseColors.gray7,
  filledGrayChipFontColor: baseColors.white,
  filledGrayChipOptionFontColor: baseColors.white,
  filledGrayChipBorderColor: baseColors.gray7,

  dashedGrayChipBackgroundColor: baseColors.white,
  dashedGrayChipFontColor: baseColors.gray5,
  dashedGrayChipOptionFontColor: baseColors.gray5,
  dashedGrayChipBorderColor: baseColors.gray5,

  toggleButtonBackgroundColor: baseColors.gray1,
  toggleButtonFontColor: baseColors.gray6,
  toggleButtonIconColor: baseColors.gray4,
  toggleButtonHoverBackgroundColor: baseColors.gray2,
  toggleButtonHoverBorderColor: baseColors.secondaryBrandColor,
  toggleButtonActiveBackgroundColor: baseColors.secondaryBrandColor,
  toggleButtonActiveFontColor: baseColors.white,
  toggleSmallButtonActiveBackgroundColor: baseColors.gray7,

  priorityUrgentFontColor: baseColors.errorColor,
  priorityUrgentBackgroundColor: baseColors.lightRed,
  priorityHighFontColor: baseColors.errorColor,
  priorityHighBackgroundColor: baseColors.lightRed,
  priorityMediumFontColor: baseColors.orange,
  priorityMediumBackgroundColor: baseColors.lightOrange,
  priorityLowFontColor: baseColors.gray6,
  priorityLowBackgroundColor: baseColors.gray2,

  statusNewBackgroundColor: baseColors.lightBlue,
  statusNewFontColor: baseColors.secondaryBrandColor,
  statusOpenBackgroundColor: baseColors.gray2,
  statusOpenFontColor: baseColors.gray8,
  statusCompleteBackgroundColor: baseColors.lightGreen,
  statusCompleteFontColor: baseColors.successColor,
  statusClosedBackgroundColor: baseColors.white,
  statusClosedFontColor: baseColors.gray6,
  statusCancelledBackgroundColor: baseColors.gray2,
  statusCancelledFontColor: baseColors.gray6,
  statusOnHoldBackgroundColor: baseColors.lightRed,
  statusOnHoldFontColor: baseColors.red,
  statusRejectedBackgroundColor: baseColors.lightRed,
  statusRejectedFontColor: baseColors.errorColor,

  userEditDisabledInputColor: baseColors.gray7,

  tableHeaderBackgroundColor: baseColors.gray1,
  tableHeaderBorderColor: baseColors.gray3,
  tableHeaderFontColor: baseColors.gray6,
  tableRowFontColor: baseColors.gray6,
  tableRowOddBackgroundColor: baseColors.gray1,

  nestedTabFontColor: baseColors.gray6,
  nestedTabSelectedFontColor: baseColors.gray8,
  nestedTabSelectedBorderColor: baseColors.grassGreen,

  accordionTitleColorExpanded: baseColors.gray8,
  accordionTitleColor: baseColors.gray6,
  accordionOpenBorderColor: baseColors.gray5,
  accordionActionsButtonColor: baseColors.gray5,

  enabledModuleColor: baseColors.gray8,
  disabledModuleColor: baseColors.gray5,

  securityIncluded: baseColors.grassGreen,

  userTypeBackgroundColor: baseColors.gray2,
  userTypeSelectColor: baseColors.gray7,

  gradients: {
    ...baseColors.gradients,
  },

  permissionGroupHeaderBackgroundColor: baseColors.white,

  // background color for space in stack view of space management (default theme).
  occupiedSpaceBackgroundColor: baseColors.gray3,
  vacantSpaceBackgroundColor: baseColors.gray2,
  commonAreaSpaceBackgroundColor: baseColors.white,
  otherSpaceBackgroundColor: baseColors.gray4,
};
