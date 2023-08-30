import { Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const ABIconButton = (props: any) => {
  const { btnVariant, btnLabel, btnSize } = props;
  return (
    <Button startIcon={<SearchOutlinedIcon />} size={btnSize} variant={btnVariant}>
      {btnLabel}
    </Button >
  );
};

export default ABIconButton;
