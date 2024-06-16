import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BUTTON_A_MINUS, BUTTON_B_MINUS, BUTTON_A_PLUS, BUTTON_B_PLUS, SCORE_A, SCORE_B, TITLE, RESET } from "./index.page.r.layout";

const logger = Logger.getLogger("helloworld");
var scoreAAll = 0;
var scoreBAll = 0;
var scoreA = null;
var scoreB = null;

Page({
  onInit() {
    // add log
    logger.debug("page onInit invoked");
    this.scoreAAll = 0;
    this.scoreBAll = 0;
  },
  build() {
    hmUI.createWidget(hmUI.widget.TEXT, TITLE);

    //TEAM A
    this.scoreA = hmUI.createWidget(hmUI.widget.TEXT, SCORE_A);
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BUTTON_A_PLUS,
      click_func: () => {
        this.sumTeamA();        
      },
    });
    hmUI.createWidget(hmUI.widget.BUTTON, 
      {
        ...BUTTON_A_MINUS,
        click_func: () => {
          this.minusTeamA();        
        },
      }
    );

    //TEAM B
    this.scoreB = hmUI.createWidget(hmUI.widget.TEXT, SCORE_B);
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BUTTON_B_PLUS,
      click_func: () => {
        this.sumTeamB();        
      },
    });
    hmUI.createWidget(hmUI.widget.BUTTON, 
      {
        ...BUTTON_B_MINUS,
        click_func: () => {
          this.minusTeamB();        
        },
      }
    );

    //reset
    hmUI.createWidget(hmUI.widget.BUTTON, 
      {
        ...RESET,
        click_func: () => {
          this.scoreA.setProperty(hmUI.prop.TEXT, "0");
          this.scoreB.setProperty(hmUI.prop.TEXT, "0");
        },
      }
    );

  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
  sumTeamA(){
    this.scoreAAll++;
    this.scoreA.setProperty(hmUI.prop.TEXT, this.scoreAAll.toString());
  },
  minusTeamA(){
    this.scoreAAll--;
    this.scoreA.setProperty(hmUI.prop.TEXT, this.scoreAAll.toString());
  },
  sumTeamB(){
    this.scoreBAll++;
    this.scoreB.setProperty(hmUI.prop.TEXT, this.scoreBAll.toString());
  },
  minusTeamB(){
    this.scoreBAll--;
    this.scoreB.setProperty(hmUI.prop.TEXT, this.scoreBAll.toString());
  }
});