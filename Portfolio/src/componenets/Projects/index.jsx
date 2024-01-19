
export default function Projects() {
    return (
        <>
            <div className="h-screen relative">
                <h1 className="titlesection">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 gap-4">
                    <img src="/images/world.png" alt="Project 1" />
                    <img src="/images/parks.png" alt="Project 2" />
                    <img src="/images/vapor.png" alt="Project 3" />
                    <img src="/images/tempo.png" alt="Project 4" />
                </div>
            </div>
        </>
    )
}