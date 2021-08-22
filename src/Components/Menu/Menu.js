function Menu(props) {
    
    return (
      <div className="Menu">
        <div>
          <span>{props.defaultMenu} | </span> 
          <span>{props.secondMenu} | </span>
          <span>About Us  | </span>
        </div>
      </div>
    );
  }
  
  export default Menu;
  