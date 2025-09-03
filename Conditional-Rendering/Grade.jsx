import React from 'react'

const Grade = () => {
    const grade = 'A'
    function a() {
        if (grade == 'A') {
            return <p>Good</p>
        }
        else if (grade == 'B') {
            return <p>Excellent</p>
        }
        else if (grade == 'C') {
            return <p>Not bad</p>
        }
        else {
            return <p>Fail</p>
        }
    }
    return (
        <>
            {
                a()
            }
        </>
    )
}

export default Grade
