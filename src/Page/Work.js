import React from 'react';
import Page__nav from '../components/Page__nav';
import { Header, Cursor, Cursor2, WorkWrap, MainHeader, MainBody,
    PortfoLI, PortfoA, WrapBox, PortfoImg, Footer } from './Work__styeld';
import { data } from '../Data/Work__data'
import '../styles/headerEffect.css';

const url = process.env.PUBLIC_URL + '/image/work/';

class Work extends React.Component {

    componentDidMount() {
        // mouse Effect

         // Cursor Effect 변수
         let cursor = document.querySelector('.cursor');
         let cursor2 = document.querySelector('.cursor2');
         const cursorRect = cursor.getBoundingClientRect();
         const cursor2Rect = cursor2.getBoundingClientRect();
 
         const cursorHalfWidth = cursorRect.width / 2;
         const cursorHalfHeight = cursorRect.height / 2;
 
         const cursor2HalfWidth = cursor2Rect.width / 2;
         const cursor2HalfHeight = cursor2Rect.height / 2;
         cursor2.style.backgroundColor = `#2bd42e`;
         

 
         // Cursor Effect
         document.addEventListener("mousemove", (e) => {
             // cursor.styled.cssText = cursor2.styled.cssText = "left" + e.clientX + "px; top:" + e.clientY + "px;";
             const y = e.clientY;
             const x = e.clientX;
         
             cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${y - cursorHalfHeight}px)`;
             cursor2.style.transform = `translate(${x - cursor2HalfWidth}px, ${y - cursor2HalfHeight}px)`;
         })



        window.addEventListener('scroll', () => {
            console.log("hi")
        })

        // scroll event
        animation().init();
    }

    render() {
        return <Header>

            <Cursor className={"cursor"}></Cursor>
            <Cursor2 className={"cursor2"}></Cursor2>

            <Page__nav />
            <WorkWrap className={"work__wrap"}>
                <MainHeader>
                    <h1 className={"mainH"}>WORK</h1>
                    <p className={"mainP"}>
                        <span>특</span>
                        <span>별</span>
                        <span>한 경</span>
                        <span>험</span>
                        <span>을 만</span>
                        <span>듭</span>
                        <span>니</span>
                        <span>다.</span>
                    </p>
                    {/* <p>특별한 경험을 만듭니다.</p> */}
                </MainHeader>
                <MainBody className={"mainBody"}>
                    <ul className={"itemWrap"}>
                    {data.map((data, idx) => {
                    return <PortfoLI className={"item"}>
                        <PortfoA href={data["url"]} target={"blank"}>
                            <button className={"goBtn"}>GO</button>
                            <WrapBox className={"wrap box"}>
                                <div className={"titleWrap"}>
                                    <div className={"title"}>{data["title"]}</div>
                                    <div className={"subTitle"}>{data["subTitle"]}</div>
                                </div>
                                <div className={"info"}>{data["info"]}</div>
                                <div className={"infoWrap"}>
                                    <a href={data["github"]} target={"blank"} className={"github"}>GitHub</a>
                                    <div className={"technic"}>{data["technic1"]}</div>
                                    <div className={"technic"}>{data["technic2"]}</div>
                                    <div className={"technic"}>{data["technic3"]}</div>
                                    <div className={"technic"}>{data["technic4"]}</div>
                                </div>
                            </WrapBox>
                        </PortfoA>
                        <PortfoImg src={`${url+data["img"]}`} alt={data["alt"]} className={"aniImg"}></PortfoImg>
                        </PortfoLI>
                    })}
                    </ul>
                </MainBody>
                <Footer>
                    <strong className={"faded"}>Determination</strong>
                    <p className={"subTitle faded"}>
                        한 걸음 더 나가고 싶은 오형욱 입니다.
                    </p>
                    <p className={"mainText faded"}>
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리 본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리 본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                    </p>
                </Footer>
            </WorkWrap>
            </Header>
    }
}



function animation() {
    let items;
    let winH;

    function initModule() {
        // items = document.querySelectorAll(".section__li");
        items = document.querySelectorAll(".faded");
        winH = window.innerHeight;
        _addEventHandlers();
    }
    function _addEventHandlers() {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    }
    function _checkPosition() {
        for (var i = 0; i < items.length; i++) {
            var posFromTop = items[i].getBoundingClientRect().top;
            if (winH > posFromTop) {
            items[i].classList.add("fadeIn");
            // console.log(i);
            }
        }
    }
    return {
        init: initModule
    }
}




export default Work;