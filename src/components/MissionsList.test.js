import React from 'react';
import {render, screen} from '@testing-library/react';

describe("MissionList tests", ()=>{
    test("renders without errors", ()=>{
        render(<MissionsList/>);
    });

    test("redners missions list when new missions are added", ()=>{
        //renders with no missions
        //no missions are printed to the screen
        //rerenders with 2 missions
        //3 missions are printed to the screen

        const { rerender } = render(<MissionsList missions={[]}/>);
        const newMissions = [{mission_name:"Mission 1"}, {mission_name:"Mission 2"}]

        rerender(<MissionList missions={newMissions}/>);

        expect(screen.queryAllByTestId('mission')).toHaveLength(2);

    });
});