import React from 'react'
import '../Styles/theme.scss'


function SkillsList({ data, animDirection }) {

    return (
        <>
        <h3 className='competences-title'>{data.title}</h3>
        <div className='competences-main'>
            <div className='competences-list-wrapper' style={{ width: `calc(200px * ${data.skills.length})` }}>
                {data.skills.map((item, index) => (
                    <span className={`list-item-competence`} style={{ animationDelay: `calc(25s / ${data.skills.length} * (${data.skills.length} - ${index + 1}) * -1)`, animationDirection: `${animDirection}` }} key={item.id}><img className='list-icon' src={item.picture} alt={item.name} />{item.name}</span>
                ))}
            </div>
        </div>
            
        </>
    )
}

export default SkillsList
