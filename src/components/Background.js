import react, {useState, useEffect} from "react";

const Background = ({searchCity}) =>{

    const [background, setBackground] = useState();
    const [result, setResult] = useState();

    const fetchRequest = async () => {
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${background}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
        );
        const dataJ = await data.json();
        const results = dataJ.results;
        setResult(results[1]);
    };
    useEffect(()=>{

        if(typeof searchCity === 'object'){
            searchCity?.city === undefined ? setBackground(searchCity?.town):setBackground(searchCity.town)
        }else{
            setBackground(searchCity)
        }

        fetchRequest()
    },[searchCity, background]);



    return (
        <div>
            <img className="background_img" src={result?.urls?.regular} alt="Background Image"></img>
        </div>
    )
}

export default Background;