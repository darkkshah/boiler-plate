import { Button } from "@mui/material";

type buttonProp = {
  btnVariant: "text" | "outlined" | "contained" | undefined;
  btnText: string;
  btnSize: "small" | "medium" | "large" | undefined;
  btnClick: any;
};

const ABButton = (props: buttonProp) => {
  const { btnText, btnVariant, btnSize, btnClick } = props;
  return (
    <div>
      <Button onClick={btnClick} size={btnSize} variant={btnVariant}>
        {btnText}
      </Button>
    </div>
  );
};

export default ABButton;
