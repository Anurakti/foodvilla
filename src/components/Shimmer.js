const Shimmer = () => {
    return (
        <>
        <div className="shimmer-search w-52 h-8 p-1 m-3 bg-slate-400"></div>
        <div className="flex flex-wrap">
            {Array(50).fill("").map((e, index)=><div key={index} className="w-56 h-72 bg-slate-400 m-2"></div>)}
        </div>
        </>
    )
}

export default Shimmer