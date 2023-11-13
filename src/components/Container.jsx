import useFetch from "./useFetch";
import UniversityList from "./UniversityList";

const Container = () => {

    const {data,isPending,error} = useFetch('http://universities.hipolabs.com/search?country=United+States');

    console.log(data,isPending,error);

    return ( 
        <div className="container">
            {error && <div>{error}</div>}
            {isPending && <div>Loading data ....</div>}
            {data && <UniversityList data={data}/>}
            
        </div>
     );
}
 
export default Container;