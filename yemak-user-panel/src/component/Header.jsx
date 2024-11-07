import '../assets/header.css'
import 'primeicons/primeicons.css'
export const Header = () => {
  return(
      <div className={'head'}>
          <div className={"head-search"}>
              <h1 className={"head-logo"}>yemak</h1>
              <input type={"search"} placeholder={"Restoran yoki taom nomi..."} className={"head-search-input"}/>
          </div>
          <div className={"head-location"}>
              <button className={"btn-1 btn btn-warning text-black"}><i className={"pi pi-map"}></i></button>
              <button className={"btn-c btn btn-warning text-black"}><a>Kirish</a></button>
          </div>
      </div>
  )
}