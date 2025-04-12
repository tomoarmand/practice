// import React from 'react';

function ProfileCard(props) {
    return (
        <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Occupation: {props.occupation}</p>
        </>
    )
}

export default ProfileCard;