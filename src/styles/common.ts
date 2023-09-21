import { FontFamilyEnum, FontWeightEnum } from '@constants/fontEnum';
import { css } from 'styled-components';

export const HEADING = css`
  font-family: ${FontFamilyEnum.Quicksand};
  font-weight: ${FontWeightEnum.Bold};
`;

export const DISPLAY_1 = css`
  ${HEADING}
  font-size: 96px;
  line-height: 128px;
`;
export const DISPLAY_2 = css`
  ${HEADING}
  font-size: 72px;
  line-height: 76px;
`;
export const HEADING_1 = css`
  ${HEADING}
  font-size: 48px;
  line-height: 64px;
`;

export const HEADING_2 = css`
  ${HEADING}
  font-size: 40px;
  line-height: 48px;
`;

export const HEADING_3 = css`
  ${HEADING}
  font-size: 32px;
  line-height: 64px;
`;

export const HEADING_4 = css`
  ${HEADING}
  font-size: 24px;
  line-height: 32px;
`;

export const HEADING_5 = css`
  ${HEADING}
  font-size: 20px;
  line-height: 24px;
`;
export const HEADING_6 = css`
  ${HEADING}
  font-size: 16px;
  line-height: 20px;
`;

export const TEXT = css`
  font-family: ${FontFamilyEnum.Montserrat};
  font-weight: ${FontWeightEnum.Normal};
`;
export const TEXT_LARGE = css`
  ${TEXT}
  font-size: 18px;
  line-height: 26px;
`;
export const TEXT_MEDIUM = css`
  ${TEXT}
  font-size: 16px;
  line-height: 24px;
`;

export const TEXT_SMALL = css`
  ${TEXT}
  font-size: 14px;
  line-height: 21px;
`;
export const TEXT_XS = css`
  ${TEXT}
  font-size: 12px;
  line-height: 18px;
`;
