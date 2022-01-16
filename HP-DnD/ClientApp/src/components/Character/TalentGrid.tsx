import {Talent}  from '../../store/CharacterStore';
import React, { Fragment, useEffect } from 'react';
import './TalentGrid.scss';

type Props = {
    talent: Talent;
}
const TalentGrid = ({talent}: Props) => {
    return (
        <div className='talent-section'>
            <div className='skill-row main-row'>
                <div className='skill-name'> {talent.name} </div>
                <div className='skill-value'>30</div>
            </div>
        { talent.skills.map(skill => {
            return (
                <div className='skill-row'>
                    <div className='skill-name' >{skill.name}</div>
                    <div className='skill-value'>{skill.value}</div>
                </div>
            )
        })}
        </div>
    );
};

export default TalentGrid;
