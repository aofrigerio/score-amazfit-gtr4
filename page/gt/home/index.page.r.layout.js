import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TITLE = {
  // modify value
  text: "Score your teams",
  x: px(40),
  y: px(50),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(100),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.WRAP,
};

export const SCORE_A = {
  // modify value
  text: 0,
  x: px(80),
  y: px(150),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(50),
  color: 0xffffff,
  text_size: px(36),
  //align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.WRAP,
};

export const BUTTON_A_PLUS = {
  x: (460 - 400) / 2,
  y: 220,
  w: 150,
  h: 75,
  radius: 12,
  normal_color: 0x0046FF,
  press_color: 0x90AEFE,
  text: '+A'
};

export const BUTTON_A_MINUS = {
  x: (530 - 400) / 2,
  y: 300,
  w: 150,
  h: 75,
  radius: 12,
  normal_color: 0x0046FF,
  press_color: 0x90AEFE,
  text: '-A'
};

export const SCORE_B = {
  // modify value
  text: 0,
  x: px(360),
  y: px(150),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(50),
  color: 0xffffff,
  text_size: px(36),
  //align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.WRAP,
};

export const BUTTON_B_PLUS = {
  x: (560 - 0) / 2,
  y: 220,
  w: 150,
  h: 75,
  radius: 12,
  normal_color: 0xFE0000,
  press_color: 0x90AEFE,
  text: '+B'
};

export const BUTTON_B_MINUS = {
  x: (520 - 0) / 2,
  y: 300,
  w: 150,
  h: 75,
  radius: 12,
  normal_color: 0xFE0000,
  press_color: 0x90AEFE,
  text: '-B'
};

export const RESET = {
  x: (300 - 0) / 2,
  y: 400,
  w: 150,
  h: 50,
  radius: 12,
  normal_color: 0xCDCDCD,
  press_color: 0x90AEFE,
  text: 'reset'
};