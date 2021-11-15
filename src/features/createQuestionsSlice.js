import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: {
    year: 0,
    examNo: 0,
    examType: "",
    sections: [
      {
        sectionNo: 0,
        examRules: "",
        passage: "",
        audio: "",
        image: "",
        subSections: [
          {
            examRules: "",
            image: "",
            questionText: "",
            questionType: "",
            passages: [],
            questionAndAns: [
              {
                questionNumber: 0,
                queAndAns: "",
              },
            ],
          },
        ],
      },
    ],
  },
};

const createQuestionSlice = createSlice({
  name: "Create Questions",
  initialState,
  reducers: {
    examYear: ({ questions }, { payload }) => {
      questions.year = payload;
    },
    examNo: ({ questions }, { payload }) => {
      questions.examNo = payload;
    },
    examType: ({ questions }, { payload }) => {
      questions.examType = payload;
    },
    sections: ({ questions }, { payload }) => {
      questions.sections.map((section) => (section.sectionNo = payload));
    },
    examRulesMain: ({ questions }, { payload }) => {
      questions.sections.map((section) => (section.examRules = payload));
    },
    passageMain: ({ questions }, { payload }) => {
      questions.sections.map((section) => (section.passage = payload));
    },
    audioMain: ({ questions }, { payload }) => {
      questions.sections.map((section) => (section.audio = payload));
    },
    imageMain: ({ questions }, { payload }) => {
      questions.sections.map((section) => (section.image = payload));
    },
    examRulesSub: ({ questions }, { payload }) => {
      questions.sections.map((section) =>
        section.subSections.map(
          (subSection) => (subSection.examRules = payload)
        )
      );
    },
    questionText: ({ questions }, { payload }) => {
      questions.sections.map((section) =>
        section.subSections.map(
          (subSection) => (subSection.questionText = payload)
        )
      );
    },
    questionType: ({ questions }, { payload }) => {
      questions.sections.map((section) =>
        section.subSections.map(
          (subSection) => (subSection.questionType = payload)
        )
      );
    },
    subsectionPassage: ({ questions }, { payload }) => {
      questions.sections.map((section) =>
        section.subSections.map((subSection) =>
          subSection.passages.push(payload)
        )
      );
    },
  },
});

export default createQuestionSlice.reducer;

export const {
  examYear,
  examNo,
  examType,
  examRulesMain,
  passageMain,
  imageMain,
  audioMain,
  sections,
  examRulesSub,
  questionText,
  questionType,
  subsectionPassage,
} = createQuestionSlice.actions;
