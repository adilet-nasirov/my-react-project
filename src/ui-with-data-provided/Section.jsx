import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Section = ({ sections }) => {
  return (
    <div>
      {sections.map((section) => {
        return (
          <div key={section.SectionID}>
            <Typography variant="h6" m={2}>
              {section.Label}
            </Typography>
            {section.Questions.map((question) => {
              console.log(question);
              if (question.UI === "lb" && !question.Options) {
                return (
                  <label key={question.QuestionID}>{question.Label}</label>
                );
              }
              if (question.UI === "cb" && !question.Options) {
                return (
                  <div key={question.QuestionID}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={question.Label}
                    />
                  </div>
                );
              }
              if (question.UI === "tb" && !question.Options) {
                return (
                  <TextField
                    sx={{ marginBottom: "5px" }}
                    variant="outlined"
                    label={question.Label}
                  />
                );
              }
              if (question.UI === "rbil" && question.Options) {
                return (
                  <div>
                    <Typography variant="h6">{question.Label}</Typography>
                    {question.Options.map((option) => {
                      return (
                        <>
                          <label htmlFor="yesNO">{option.Description}</label>
                          <input type="radio" id="yesNO" name="radioBtns" />
                        </>
                      );
                    })}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Section;
