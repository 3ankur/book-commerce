import {render,screen} from "@testing-library/react";
import NavBar from "../navbar";

describe('Navbar',()=>{

    it('should render without fail',()=>{
        const {getByText} = render(<NavBar/>);
        expect(getByText(/eCommerce/i)).toBeDefined();
        expect(getByText(/Home/i)).toBeDefined();
    })
})
