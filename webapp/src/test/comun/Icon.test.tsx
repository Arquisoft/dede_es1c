
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Icon from "../../components/home/Icon";

test("Icon va github", async () => {

    render(
      <Router>
        <Icon /> 
      </Router>
    );  

  const github = screen.getByRole("button", { name: "git" });
  fireEvent.click(github);
  });
  
test("Icon va doc", async () => {

    render(
      <Router>
        <Icon /> 
      </Router>
    );  


  const github = screen.getByRole("button", { name: "doc" });
  fireEvent.click(github);
  });