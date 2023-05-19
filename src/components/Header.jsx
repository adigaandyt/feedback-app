function Header({ text }) {
  return <header>{text}</header>;
}

//Styles can be set in JSX <header style = {{backgroundColor: 'blue', color: 'red'}}
// hyphens - get turned into cameCase
//, newlines with comma (can be done directly on the file instead in the css sheet)
//Or put it in a bariable const headerStyles = {etc etc} and then just pass it in with {}

//This goes in the {text} if we dont send in an atribute from another file
Header.defaultProps = {
  text: "This is the header",
};

export default Header;
