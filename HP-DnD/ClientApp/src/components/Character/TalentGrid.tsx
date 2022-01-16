import {Talent}  from '../../store/CharacterStore';
import React, { Fragment, useEffect } from 'react';

type Props = {
    talent: Talent;
}
const TalentGrid = ({talent}: Props) => {
    return (
        <div className='talent-section'>
            <div>
                <div className='talent-title'> {talent.name} </div>
                <div className='talent-value'>30</div>
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
