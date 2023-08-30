import { TextField } from "@mui/material";

const ABInput = (props: any) => {
  const { inpLabel, inpVariant, inpColor, inpClasses } = props;
  return (
    <div>
      <TextField
        id="standard-basic"
        className={inpClasses}
        color={inpColor}
        label={inpLabel}
        variant={inpVariant}
      />
    </div>
  );
};

export default ABInput;
