import { render , screen } from "@testing-library/react";
import  Contact  from "../Contact"; 
import '@testing-library/jest-dom'

describe("contact component" ,()=>{
    it("should load contact component" , () =>{

        render(<Contact/>)
    
        // Querying
        const heading = screen.getByRole("heading");
    
        // assertion
        expect(heading).toBeInTheDocument();   
    })
    
    it("should load submit button inside contact component", () =>{
        render(<Contact/>);
    
        const text = screen.getByText("Submit");
    
        expect(text).toBeInTheDocument();
    })
    
    it("should load button inside the contact component", () =>{
        render(<Contact/>);
    
        const text = screen.getByRole("button");
    
        expect(text).toBeInTheDocument();
    })

    it("should load 2 input boxes from the contact component" , () =>{
        render(<Contact />)
    
        const Inputbox = screen.getAllByRole('textbox'); // if give input it will not work so give textbox
        console.log(Inputbox.length);
    
        expect(Inputbox.length).toBe(2);
    })
})
