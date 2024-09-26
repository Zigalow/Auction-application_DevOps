import { SearchField } from "../Components/SearchField.tsx";
import "../Styling/searchComponent.css"

export function SearchComponent() {
    return (
        <div className="search-container">
            <div className="search-header">  
                </div>
            <div className="search-content">
                <SearchField className="searchField"/>

            </div>
        </div>
    );
}