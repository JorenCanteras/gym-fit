import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
            <div>
                <p className='text-slate-400 px-10 py-5'><span className='text-slate-300'>*Note</span> - <span className='text-blue-400'>reps</span> is the number of repetitions, <span className='text-blue-400'>rest </span>is specified in seconds, and <span className='text-blue-400'>tempo</span> is the number of seconds for each movement phase in the order of eccentric - isometric - concentric (or down - pause - up).</p>
                <p className='text-slate-400 px-10 py-5'>For <span className='text-blue-400'>weight selection</span>, choose a weight that allows you to complete the repetitions with minimal sacrifice to form.</p>
                <p className='text-slate-400 px-10 py-5'>Happy lifting!</p>
            </div>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}
