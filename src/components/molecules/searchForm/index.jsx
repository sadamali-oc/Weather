import React from "react";
import InputField from "../../atoms/inputField";
import BasicButton from "../../atoms/basicButton";
import BasicCard from "../../atoms/card";
import { Typography } from "@mui/material";

const SearchForm = ({ city, onChange, onClick }) => {
  return (
    <div>
      <BasicCard
        className="search-form"
        sx={{
          backgroundColor: "#989cdb46",
          height: 200,
          width: "90%",
          padding: "1rem",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            margin: "0 ",
          }}
        >
       
          <InputField
            value={city}
            onChange={onChange}
            label="Enter city"
            placeholder="City Name"
          />
          <BasicButton onClick={onClick} />
        </div>
      </BasicCard>
    </div>
  );
};

export default SearchForm;
