import React from 'react';
import { render, screen } from '@testing-library/react';
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
        expect(screen.getByText(/get data/i)).not.toBeNull();
        expect(screen.queryByText(/we are fetching data/i)).toBeNull();
    });

    test('calls getData when button is pressed', ()=>{

    });
});