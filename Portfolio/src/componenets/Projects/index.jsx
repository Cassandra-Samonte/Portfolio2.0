
// export default function Projects() {
//     return (
//         <>
//             <div className="h-screen relative">
//                 <h1 className="titlesection">Projects</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 gap-4">
//                     <img src="/images/world.png" alt="Project 1" />
//                     <img src="/images/parks.png" alt="Project 2" />
//                     <img src="/images/vapor.png" alt="Project 3" />
//                     <img src="/images/tempo.png" alt="Project 4" />
//                 </div>
//             </div>
//         </>
//     )
// }

export default function Projects() {
    return (
        <>
            <div className="relative">
                <h1 className="titlesection">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 gap-4">
                    
                    {/* Project 1 */}
                    <div className="relative group">
                        <img src="/images/world.png" alt="Project 1" className="w-full h-auto opacity-100 group-hover:opacity-20 transition-opacity duration-300"/>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                            <p className="text-white text-center mb-4">World Explorer is a MERN Stack CRUD App that utilizes the REST Countries API to gather information about the countries of the world.</p>
                            <a href="https://world-explorer-app-f6d02e2c7535.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Live Demo</a>
                            <a href="https://github.com/Cassandra-Samonte/World-Explorer" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors ml-2">Source Code</a>
                        </div>
                    </div>
                    {/* Parks Project */}
                    <div className="relative group">
                        <img src="/images/parks.png" alt="Project 1" className="w-full h-auto opacity-100 group-hover:opacity-20 transition-opacity duration-300"/>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                            <p className="text-white text-center mb-4">Parks & Rec is a MERN Stack CRUD application that utilizes the National Park Service API to display current information on US National Parks.</p>
                            <a href="https://parks-rec-d054947d314c.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Live Demo</a>
                            <a href="https://github.com/Cassandra-Samonte/Parks-and-Rec" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors ml-2">Source Code</a>
                        </div>
                    </div>
                    {/* Vapor Project */}
                    <div className="relative group">
                        <img src="/images/vapor.png" alt="Project 1" className="w-full h-auto opacity-100 group-hover:opacity-20 transition-opacity duration-300"/>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                            <p className="text-white text-center mb-4">Vapor Vault is a MEN Stack CRUD application that showcases a collection of vaporwave albums.</p>
                            <a href="http://www.vapor-vault.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Live Demo</a>
                            <a href="https://github.com/Cassandra-Samonte/Vapor-Vault" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors ml-2">Source Code</a>
                        </div>
                    </div>
                    {/* Tempo Project */}
                    <div className="relative group">
                        <img src="/images/tempo.png" alt="Project 1" className="w-full h-auto opacity-100 group-hover:opacity-20 transition-opacity duration-300"/>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                            <p className="text-white text-center mb-4">Tempo is a full-stack CRUD application that was developed on a team of 3 developers using Django, Python, and PostgreSQL. My key roles were Scrum Master and Designer, overseeing project management and enhancing user experience.</p>
                            <a href="https://tempoproject-1ccff4d917c0.herokuapp.com/home/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Live Demo</a>
                            <a href="https://github.com/Cassandra-Samonte/Tempo" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors ml-2">Source Code</a>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}