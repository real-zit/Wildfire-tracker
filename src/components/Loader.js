import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src= {spinner} alt="loading.."/>           
        <h1>Fetching Date</h1>
        </div>
    )
}

export default Loader
