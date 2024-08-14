
import {describe, test} from 'vitest';
import {render,fireEvent} from '@testing-library/react';
import Header from '../header/Header';

describe("Header React Micro-frontend application", ()=>{
    test("The header component is rendering correctly", ()=>{
        const component = render(<Header />);
        expect(component).toMatchSnapshot()
    });

    test("The profile data should be displayed if the event is received",async ()=>{
        const component = render(<Header />);
        fireEvent(window,new CustomEvent('profile-order-fetched',{detail :{
            user:{ 
                first_name: 'Test',
                last_name: 'User',
            },
            qty: 10
        } }));
        const name = component.getByText("Test User");
        const qty = component.getByText("Qty: 10");

        expect(name).toBeTruthy()
        expect(qty).toBeTruthy()

    });
})