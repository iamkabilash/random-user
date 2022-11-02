const Card = ({ data }) =>{
    return(
        <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={data.picture.large}></img>
                <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data.name.title + " " + data.name.first + " " + data.name.last}</h1>
                <p className="mb-8 leading-relaxed">{"Email: " + data.email}</p>
                <p className="mb-8 leading-relaxed">{data.location.city + ", " + data.location.country}</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{"Cell: " + data.cell}</button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{"Phone: " + data.phone}</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Card;