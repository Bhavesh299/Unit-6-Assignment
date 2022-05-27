function sidebar(){

    return (` 
     
    
    <nav>
    <div style= "background-color: rgb(23,21,68);"class="navBar">
      <div class="navBar-left">
        <div class="navlogo">
          <img
            src="https://www.pngkey.com/png/full/610-6103115_imgur-logo-png.png"
            alt=""
          />
        </div>
        <div class="logo-btn">
          <button>
            <i class="fa-regular fa-message-plus"></i>
            New Post
          </button>
        </div>
      </div>
      <div class="navBar-centre">
        <div class="searchBar">
          <input
            type="text"
            placeholder="Images, #tags, @users oh my!"
            style="height: 36px"
          />
        </div>
      </div>
      <div class="navBar-right">
        <div class="icon"></div>
        <div class="purple">
          <button>Go Ad-Free</button>
        </div>
        <div class="signIn">
          <button>Sign in</button>
        </div>
        <div class="signUp">
          <button>Sign up</button>
        </div>
      </div>
    </div>
  </nav>


    `)

}
export default sidebar