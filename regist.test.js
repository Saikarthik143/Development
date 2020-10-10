import * as React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import ApplyLoan from './Components/applyloan';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
//import Login from '../Login';
import RegisterScreen from '../RegisterScreen';
Enzyme.configure({ adapter: new Adapter() });
describe('Test when form is submitted', () => {
    it('should submit form data', () => {
        let form = shallow(<RegisterScreen />); 
        form.handleSubmit = jest.fn();
        form.handleSubmit();
        form.update(); 
        form.find('#loansubmit').simulate('submit');
        expect(form.find('#loansubmit').length).toEqual(1);
        expect(form.handleSubmit).toHaveBeenCalled();
    });
    
    it('renders correctly', () => {
        const tree = renderer.create(<BrowserRouter><RegisterScreen /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
      });
});