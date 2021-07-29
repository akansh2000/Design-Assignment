const Nav=()=>
{
    return(
        <>
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mx-auto'>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ml-2">
    <a className="navbar-brand" href="#">
    <img src={logo} alt="" width="65" height="34"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active tab" href="#">Integration</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active tab" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active tab" href="#" >Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active tab" href="#">About us</a>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3 ">
        <button className='btn access ml-18'>Get early access</button>
      </ul>
    </div>
  </div>
</nav>
        </div>
      </div>
    </div>
<Home />
</>
    )
}

export default Nav;