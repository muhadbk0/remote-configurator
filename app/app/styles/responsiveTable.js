export default theme => ({
  "& table": {
    display: ["block", "!important"]
  },
  "& thead": {
    display: ["none", "!important"],
    background: [theme.palette.background.paper, "!important"]
  },
  "& tbody": {
    display: ["block", "!important"]
  },
  "& th": {
    display: ["block", "!important"],
    width: "100%",
    paddingLeft: ["1rem", "!important"],
    paddingRight: ["1rem", "!important"],
    "&:not(:last-child)": {
      borderColor: "transparent"
    }
  },
  "& td": {
    display: ["block", "!important"],
    width: "100%",
    paddingLeft: ["1rem", "!important"],
    paddingRight: ["1rem", "!important"],
    "&:not(:last-child)": {
      borderColor: "transparent"
    }
  },
  "& tr": {
    height: ["100%", "!important"],
    display: ["block", "!important"],
    paddingTop: ["0.25rem", "!important"],
    marginBottom: ["0.25rem", "!important"]
  }
});
