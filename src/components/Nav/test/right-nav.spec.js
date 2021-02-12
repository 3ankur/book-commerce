import {render,screen} from "@testing-library/react";
import RightNav from "../right-nav";

describe('Right Nav',()=>{

    it('should render without fail',()=>{
        const {getByText} = render(<RightNav/>);
        expect(getByText(/MyOrder/i)).toBeInTheDocument();
        expect(getByText(/Home/i)).toBeInTheDocument();
        expect(getByText(/cart/i)).toBeInTheDocument()
    })
})
