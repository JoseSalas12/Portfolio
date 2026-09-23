function Link({title, href = "#", target ="_self"}){
    return(
        <>
        <a href={href} target={target} className="flex justify-center items-center py-2.5 px-5 rounded-full bg-surface shadow-box font-roboto text-4/6 font-regular text-white">
            {title}
        </a>
        </>
    );

}

export default Link