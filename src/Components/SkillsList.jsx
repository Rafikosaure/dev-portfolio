import '../Styles/theme.scss'


function SkillsList({ data, animDirection }) {

    const skills = data.skills;

    return (
        <>
        <h3 className='competences-title'>{data.title}</h3>
        <div className='competences-main'>
            <div className='competences-list-wrapper' style={{ width: `calc(200px * ${skills.length})` }}>
                {skills.map((item, index) => (
                    <span className={`list-item-competence`} style={{ animationDelay: `calc(25s / ${skills.length} * (${skills.length} - ${index + 1}) * -1)`, animationDirection: `${animDirection}` }} key={item.id}><img className='list-icon' src={item.picture} alt={item.name} />{item.name}</span>
                ))}
            </div>
        </div>
            
        </>
    )
}

export default SkillsList
