import React from "react";

import {Container,Row,Col} from "react-bootstrap"
import Stry from "../story/story.js"
import "./body.css"
import Createpost from "../create_post/create.js";
// import Post from "../post/post.js";
import Footer from "../footer/footer.js";
import DB from "../../firebase/firebase.js";


function Body(){

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    DB.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

    return(
      <Container className="mt-5 pt-2 body_main">

      <div className="story_frame">
       <Stry name_user="Chandu" className="pl-2" image="https://i.ibb.co/rfZMKxn/ezgif-com-gif-maker.gif" pic="https://i.ibb.co/9Hx8Rfy/applied.png"/>
     <Stry name_user="Elon Musk" image="https://media.vanityfair.com/photos/5a7b182c9b38580e8603ca4f/master/w_2560%2Cc_limit/elon-musk-showman-rocket.jpg" pic="https://peaklife.in/wp-content/uploads/2019/06/elon-musk-image.jpg"/>
     <Stry name_user="The Rock" image="https://api.time.com/wp-content/uploads/2016/01/time-100-2016-the-rock-dwayne-johnson.jpg?quality=85&w=407" pic="https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg"/>
  <Stry name_user="Kevin" image="https://25.media.tumblr.com/tumblr_lvw7xfSpZR1r48oh6o1_100.gif" pic="https://i.insider.com/5e08c31d954bda328a3babe2?width=1100&format=jpeg&auto=webp"/>
     <Stry name_user="RDJ"image="https://24.media.tumblr.com/836b72d86e1f2e3c9aa2d3f607607e85/tumblr_mq26tjLz0K1sww998o1_1280.jpg" pic="https://d23.com/app/uploads/2019/08/2019-disneylegend-rdj.jpg"/>
     <Stry name_user="Hande" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8YpPhuWzkTraLXnDNdGzXBQ1eQ2CKnW_mZQ&usqp=CAU" pic="https://pbs.twimg.com/profile_images/1245687547058982912/CGH4mXYE_400x400.jpg"/>
    </div>
    <div className="createpost mr-5 ml-1">
      <Createpost />
    </div>
    {/*<div className="post_main">

          {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timeStamp}
          username={post.data.userName}
          image={post.data.image}
        />
      ))}
    </div>*/}
    <div ><Footer /></div>
    </Container>
  );
}

export default Body;
