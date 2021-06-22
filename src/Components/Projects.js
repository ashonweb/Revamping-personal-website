import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProjectsStyle from '../Styles/ProjectsStyle';
import got from '../Assests/got.jpg'
import spacex from '../Assests/spacex.jpeg'
import falcon from '../Assests/falcon.jpeg'
import hacknews from '../Assests/hacker_news.png'
import wiki from '../Assests/wiki.jpeg'
import drums from '../Assests/drums.jpeg'
import diamond from '../Assests/diamond.jpeg'
import face from '../Assests/face.jpeg'
import calc from '../Assests/calc.jpeg'

const Projects = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.heading}>My Projects</h2>
        <div class="grid" style={{ margin: '10px 0' }}>
          <ul id="hexGrid">
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" rel="noreferrer" href="http://ice-n-fire.surge.sh/" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${got})`, }}></div>
                  <h1 id="demo1">Game of Thrones</h1>
                  <p id="demo4">Gives the overview of Game of Thrones Books/Series</p>

                  <p id="demo2">Front End:React</p>
                  <p id="demo3">Backend End:MongoDB</p>

                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink"  rel="noreferrer" href="http://spacex_bmeghpal.surge.sh/#/" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${spacex})`, }}></div>
                  <h1 id="demo1">Space X</h1>
                  <p id="demo4">Gives the list of all launches by SpaceX Program</p>

                  <p id="demo2">Front End:React</p>
                  <p id="demo3">Backend End:SpaceX API</p>

                </a>
              </div>
            </li>


            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" rel="noreferrer" href="http://ice-n-fire.surge.sh/" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${falcon})`, }}></div>
                  <h1 id="demo1">Finding Falcon</h1>
                  <p id="demo4">Game to search Queen Falcone who is hiding in different planet</p>
                  <p id="demo2">Front End:Svelte</p>
                  <p id="demo3">Work in Progress</p>

                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" rel="noreferrer" href="http://hacker-news-alt.surge.sh/#/" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${hacknews})`, }}></div>
                  <h1 id="demo1">Hacker News</h1>
                  <p id="demo4">Replica of Hacker News Application </p>
                  <p id="demo2">Front End:React</p>
                  <p id="demo3">Backend End:Hacker News API</p>

                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" rel="noreferrer" href="https://wiki-bmeghpal-viwer.surge.sh/" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${wiki})`, }}></div>
                  <h1 id="demo1">Wikipedia Search</h1>
                  <p id="demo4">A wikipedia search engine which produceed the first 10 results based on search </p>
                  <p id="demo2">Front End:React</p>
                  <p id="demo3">Backend End:Wikipedia API</p>

                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" rel="noreferrer" href=" https://drums_appliction.surge.sh" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${drums})`, }}></div>
                  <h1 id="demo1">Drums Machine</h1>
                  <p id="demo4">An audio application which initiates different sounds on key inputs </p>
                  <p id="demo2">Front End:React</p>
                  {/* <p id="demo3">Backend End:Wikipedia API</p> */}

                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" rel="noreferrer" href="https://diamond-game.surge.sh/" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${diamond})`, }}></div>
                  <h1 id="demo1">Diamond Search </h1>
                  <p id="demo4">Game application for searching diamonds in 8 by 8 grid. </p>
                  <p id="demo2">Front End:React</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" rel="noreferrer" href="https://bmeghpal-face-detect.surge.sh/#/" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${face})`, }}></div>
                  <h1 id="demo1">Face detection </h1>
                  <p id="demo4">Retrieve infomation about the face via upload/url</p>
                  <p id="demo2">Front End:React</p>
                  <p id="demo3">Backend End api's are expired </p>

                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" rel="noreferrer" href="https://calculator-bmeghpal.surge.sh/" target='_blank'>
                  <div class='img' style={{ backgroundImage: `url(${calc})`, }}></div>
                  <h1 id="demo1">Calculator</h1>
                  <p id="demo4">Calculator which does basic arthimatic operations</p>
                  <p id="demo2">Front End:React</p>
                </a>
              </div>
            </li>

            {/* <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42)" }}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1425668273332-3a46ab26b161?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=d453ab3dec298c43415526458b360fa6)" }}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img' style={{ backgroundImage: "url(https://images.unsplash.com/44/MIbCzcvxQdahamZSNQ26_12082014-IMG_3526.jpg?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=49dab7a5e4b2e28b5707bc2db974c94b)" }}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1432887382605-0abf9cc49e8f?crop=entropy&amp;fit=crop&amp;fm=jpg&amp;h=1375&amp;ixjsv=2.1.0&amp;ixlib=rb-0.3.5&amp;q=80&amp;w=1725)," }}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <div class='img' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1417026846249-f31f7e43fc35?crop=entropy&amp;fit=crop&amp;fm=jpg&amp;h=1375&amp;ixjsv=2.1.0&amp;ixlib=rb-0.3.5&amp;q=80&amp;w=1725)," }}></div>
                  <h1 id="demo1">This is a title</h1>
                  <p id="demo2">Some sample text about the article this hexagon leads to</p>
                </a>
              </div>
            </li> */}

          </ul >
        </div >

      </div >


    </>
  )

}
Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(ProjectsStyle)(Projects)

