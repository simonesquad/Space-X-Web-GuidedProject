import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MissionForm from './MissionForm';

describe('MissionForm Tests',()=>{
    test('render without error', ()=>{
        render(<MissionForm/>);
        //Arrange
        //Act
        //Assert 
    });

    test('renders message when isFetchingData is true', ()=>{
        render(<MissionForm isFetchingData={true}/>);
        expect(screen.getByText(/we are fetching data/i)).not.toBeNull();
        expect(screen.queryByText(/get data/i)).toBeNull();
    });

    test('renders button when isFetchingData is false', ()=>{
        render(<MissionForm isFetchingData={false}/>);
        expect(screen.getByRole("button")).not.toBeNull();
        expect(screen.queryByText(/we are fetching data/i)).toBeNull();
    });

    test('calls getData when button is pressed', ()=>{
        const mockGetData = jest.fn(()=>{
            return("warren");
        });

        render(<MissionForm getData={()=>{mockGetData(122, "warren")}}/>);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        mockGetData.mockReturnValueOnce("warren");

        console.log(mockGetData.mock);

        expect(mockGetData.mock.calls.length === 1);
       

    });
});