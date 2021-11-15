import { gql } from "@apollo/client";

export const CREATE_EXAM_PAPER = gql`
  mutation CreateExamPaper($payload: ExamPaperInput) {
    CreateExamPaper(payload: $payload) {
      msg
      code
    }
  }
`;
