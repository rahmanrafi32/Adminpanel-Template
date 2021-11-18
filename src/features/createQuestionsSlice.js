import {createSlice} from "@reduxjs/toolkit";

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
                        isPassage: false,
                        passages: [""],
                        questionAndAns: [
                            {
                                questionNumber: 0,
                                queAndAns: {
                                    question: "",
                                    questionType: "radio",
                                    options: [""],
                                    answer: ""
                                }
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
        examYear: ({questions}, {payload}) => {
            questions.year = payload;
        },
        examNo: ({questions}, {payload}) => {
            questions.examNo = payload;
        },
        examType: ({questions}, {payload}) => {
            questions.examType = payload;
        },
        sections: ({questions}, {payload}) => {
            questions.sections.map((section) => (section.sectionNo = payload));
        },
        examRulesMain: ({questions}, {payload}) => {
            questions.sections.map((section) => (section.examRules = payload));
        },
        passageMain: ({questions}, {payload}) => {
            questions.sections.map((section) => (section.passage = payload));
        },
        audioMain: ({questions}, {payload}) => {
            questions.sections.map((section) => (section.audio = payload));
        },
        imageMain: ({questions}, {payload}) => {
            questions.sections.map((section) => (section.image = payload));
        },
        examRulesSub: ({questions}, {payload}) => {
            questions.sections.map((section) =>
                section.subSections.map(
                    (subSection) => (subSection.examRules = payload)
                )
            );
        },
        questionText: ({questions}, {payload}) => {
            questions.sections.map(section =>
                section.subSections.map(subSection =>
                    subSection.questionAndAns.map(mainSet =>
                        mainSet.queAndAns.question = payload)
                )
            );
        },
        questionType: ({questions}, {payload}) => {
            questions.sections.map(section =>
                section.subSections.map(subSection =>
                    subSection.questionAndAns.map(mainSet =>
                        mainSet.queAndAns.questionType = payload)
                )
            );
        },
        addNewOptionField: ({questions}, {payload}) => {
            questions.sections.map(section =>
                section.subSections.map(subSection =>
                    subSection.questionAndAns.map(mainSet =>
                        mainSet.queAndAns.options.push(payload))
                )
            );
        },
        deleteNewOptionField: ({questions}, {payload}) => {
            questions.sections.map(section =>
                section.subSections.map(subSection =>
                    subSection.questionAndAns.map(mainSet => {
                        if (mainSet.queAndAns.options.length > 0) {
                            mainSet.queAndAns.options.splice(payload, 1)
                        }
                    })
                )
            );
        },
        addAnswer: ({questions}, {payload}) => {
            questions.sections.map((section) =>
                section.subSections.map(subSection =>
                    subSection.questionAndAns.map(mainSet =>
                        mainSet.queAndAns.answer = payload)
                )
            );
        },
        isPassage: ({questions}, {payload}) => {
            questions.sections.map((section) =>
                section.subSections.map(
                    (subSection) => (subSection.isPassage = payload)
                )
            );
        },
        subsectionPassage: ({questions}, {payload}) => {
            questions.sections.map((section) =>
                section.subSections.map((subSection) =>
                    subSection.passages[payload.index] = payload.value
                )
            );
        },
        removePassage: ({questions}, {payload}) => {
            questions.sections.map((section) =>
                section.subSections.map((subSection) => {
                    if (subSection.passages.length > 0) {
                        subSection.passages.splice(payload, 1);
                        if (subSection.passages.length === 0) {
                            subSection.isPassage = false;
                            subSection.passages.push("");
                        }
                    }
                })
            );
        },
        addNewPassage: ({questions}, {payload}) => {
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
    addNewPassage,
    removePassage,
    isPassage,
    addNewOptionField,
    deleteNewOptionField,
    addAnswer
} = createQuestionSlice.actions;
