type Props = {
    data: {
        completedProjects: number
    }
}

export default function Stats({data}: Props){
    return(
        <section className="py-10">
            <div className= "grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div><h3 className="text-3xl font-bold">{data.completedProjects}</h3><p>Projects Completed</p></div>
            </div>
        </section>
    )
}