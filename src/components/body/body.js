import React from "react";

import {Container,Row,Col} from "react-bootstrap"
import Stry from "../story/story.js"
import "./body.css"
import Createpost from "../create_post/create.js";
import Post from "../post/post.js";
import Footer from "../footer/footer.js";
import DB from "../../firebase/firebase.js";


function Body(){

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    DB.collection("Event")
      .orderBy("timeStamp")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

    return(
      <Container className="mt-5 pt-2 body_main">

      <div className="story_frame">
       <Stry name_user="Chandu" className="pl-2" image="https://i.ibb.co/rfZMKxn/ezgif-com-gif-maker.gif" pic="https://i.ibb.co/zhhMbt1/applied.png"/>
     <Stry name_user="Elon Musk" image="https://media.vanityfair.com/photos/5a7b182c9b38580e8603ca4f/master/w_2560%2Cc_limit/elon-musk-showman-rocket.jpg" pic="https://peaklife.in/wp-content/uploads/2019/06/elon-musk-image.jpg"/>
     <Stry name_user="The Rock" image="https://api.time.com/wp-content/uploads/2016/01/time-100-2016-the-rock-dwayne-johnson.jpg?quality=85&w=407" pic="https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg"/>
  <Stry name_user="Kevin" image="https://25.media.tumblr.com/tumblr_lvw7xfSpZR1r48oh6o1_100.gif" pic="https://i.insider.com/5e08c31d954bda328a3babe2?width=1100&format=jpeg&auto=webp"/>
     <Stry name_user="RDJ"image="https://24.media.tumblr.com/836b72d86e1f2e3c9aa2d3f607607e85/tumblr_mq26tjLz0K1sww998o1_1280.jpg" pic="https://d23.com/app/uploads/2019/08/2019-disneylegend-rdj.jpg"/>
     <Stry name_user="Hande" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8YpPhuWzkTraLXnDNdGzXBQ1eQ2CKnW_mZQ&usqp=CAU" pic="https://pbs.twimg.com/profile_images/1245687547058982912/CGH4mXYE_400x400.jpg"/>
    </div>
    <div className="createpost mr-5 ml-1">
      <Createpost />
    </div>
    <div className="post_main mr-5 p-1 ml-1">
  {/*===============================instruction section===============*/}
  <Container className="posts mt-3 p-0">

  <Container className="top_post pt-1">
  <Row className="pl-3 pr-3">
  <Col className="avtar d-flex align-self-center p-0" xs={1}>

  </Col>

  <Col className="display_info  justify-content-center pl-0 pr-0 text-center" xs={9}>
  <h2 className="mb-0 mt-3 text-center pl-2">Read me</h2>
  <p className="post_time pt-2 text-center" style={{fontSize:"15px"}}>Ultimate guide for your Quest.</p>
  </Col>

  <Col className="more p-0 ml-auto d-flex justify-content-end align-self-center" xs={1}>

  </Col>
  </Row>
  </Container>

  <Container className="content_post pr-0 pl-0 pb-4">

  <div className="user_msg">

  <p className="pl-4 pr-4 text-center"><b>Welcome onboard!!</b> lets start with some basic instruction about the quest and the procedure/criteria to successfully submit your answer and stand a chance to win. Pay special attention to the highlighted text and maintain proper decorum as mentioned below.</p>
  <h4 className="pl-4 pr-4">Instruction</h4>
  <p className="pl-4 pr-4"> &#8226; There are bunch of <b>riddles</b> hidden between <em>memes, joke's </em> and <em>quotation's</em>. Find as many as you can, we warn you this won't be as easy as it may sound.</p>
  <p className="pl-4 pr-4"> &#8226; After you finish finding riddles start collecting answers. You can use google, dive into books, burn the internet or just give up.</p>
  <p className="pl-4 pr-4"> &#8226; When you finish collecting answers <b>post on your feed</b> itself. Remember <b>you have only one chance to post your answers, multiple posts will be disqualified.</b></p>
  <p className="pl-4 pr-4"> &#8226; Every riddle ends with a specific number or symbol. Type your answer <b>after entering the specific number or symbol</b> given to the riddle <b>symbol(answer)</b> <em>eg:- #(your answer goes here), 32(your answer goes here)</em>. This will lead to the question you have answered.</p>
  <p className="pl-4 pr-4"> &#8226; <em>Reloading of page will log you out of the quest.</em> </p>
  <p className="pl-4 pr-4"> &#8226; Hitting enter will post your answer in the feed and you can scroll down to see your posted answer.</p>
  <h5 className="pl-4 pr-4">Note:-</h5>
  <p className="pl-4 pr-4">Posting irrelevant texts, emoji or symbol will trigger strict official procedure and you will be restricted for answering further. You are only allowed to post your answers in the feed and all other features is currently disbaled for smooth flow of event.</p>
  </div>

  </Container>




  </Container>






  {/*===============================instruction section===============*/}
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
    </div>
    <div ><Footer /></div>
    </Container>
  );
}

export default Body;
