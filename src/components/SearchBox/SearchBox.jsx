import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice"


const SearchBox = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
      dispatch(changeFilter(event.target.value))
    }
    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text"  onChange={handleChange}></input>
        </div>
    )
}
export default SearchBox