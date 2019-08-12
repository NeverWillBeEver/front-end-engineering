import state from './state';
export default {
  currentAnswer: (id: number) => {
    return state.currentAnswer.filter((item: any) => item.id === id);
  },
  allowEdit: () => state.allowEdit,
  questionsData: () => state.questionsData,
  checkBoxHidden: () => state.checkBoxHidden,
  currentStuAnswerState: () => state.isCurrentStuAnswerEmpty,
};
