import React from 'react'



class Search extends  React.Component{
    constructor(props) {
        super(props);
        }

    render() {
        return(
            <div>
               <header>
                   <nav>
                       <ul>
                           <li>
                               <a>
                                   home
                               </a>
                           </li>
                           <li>
                               <a>contacto</a>
                           </li>
                           <li>
                               <a>ayuda</a>
                           </li>

                       </ul>
                   </nav>
               </header>
            </div>
        )
    }

}
export default Search;