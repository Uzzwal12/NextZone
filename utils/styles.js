import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "black",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main:{
    minHeight:"80vh"
  },
  footer:{
    textAlign:"center"
  }
});

export default useStyles;
