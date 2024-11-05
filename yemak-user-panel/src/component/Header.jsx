import '../assets/header.css'
export const Header = () => {
  return(
      <div className={'head'}>
          <div className={"head-search"}>
              <h1 className={"head-logo"}>Yemak</h1>
              <input type={"search"} placeholder={"Qidirish..."} className={"head-search-input"}/>
          </div>
          <div className={"head-location"}>
              <button className={" btn btn-warning text-light"}>A</button>
              <button className={"btn-c btn btn-warning text-light"}>Kirish</button>
          </div>
      </div>
  )
}