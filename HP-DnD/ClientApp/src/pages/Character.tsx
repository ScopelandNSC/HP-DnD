import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CharacterStore from '../store/CharacterStore';
import { range, filter, map } from 'rxjs';
import React, { Fragment, useEffect } from 'react';
import Talents from '../components/Character/Talents';

type CharacterProps =
    CharacterStore.CharacterState &
    typeof CharacterStore.actionCreators &
    RouteComponentProps<{}>;

const Character = ({}: CharacterProps) => {

    return (
        <Fragment>
            <h1>Character</h1>
            <Talents/>
        </Fragment>
    );
};

export default connect(
    (state: ApplicationState) => state.character,
    CharacterStore.actionCreators
)(Character);
