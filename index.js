function Display(props)
{   return(
        <div className="imga">
            <img src={props.img} className="pic"></img>
            <div className="starsdisplay">
                <img src={props.star} className="star"></img>
                <span>{props.snum}</span>
                <span className="gray"> ({props.anum}) ·</span>
                <span className="gray">{props.cou}</span>
            </div>                    
        <p>{props.abo}</p>
        <p><b>{props.mo}</b>person</p>
        </div> ) 
}
function Page()
{   return(
        <div>
            <header>
                <nav className="head">
                    <img src="airbag.png" alt="airbag" className="logo"></img>
                </nav>
            </header>
            <div className="maindiv">
                <img src="secondimage.png" className="second"></img>
                <div className="written">
                    <h1>Online Experience</h1>
                    <p className="explain">Join Unique interactive activites led by one of a kind hosts all without leaving home</p>
                </div>
            </div>
            <div className="mainimga">
                <Display 
                    img="thirdimg.png"
                    star="starone.png"
                    snum="5"
                    anum="6"
                    cou="USA"
                    abo="Life lesson with katie zafees"
                    mo="From $136/"
                />
                <Display
                    img="fourthimg.png"
                    star="starone.png"
                    snum="4"
                    anum="36"
                    cou="London"
                    abo="Learn some thing before u die"
                    mo="From $230/"
                />
                <Display
                    img="fifthimg.png"
                    star="starone.png"
                    snum="5M"
                    anum="2"
                    cou="India"
                    abo="Travel India once in ur life"
                    mo="From $1000/"
                />
                <Display
                    img="sixthimg.png"
                    star="starone.png"
                    snum="4"
                    anum="23"
                    cou="Paris"
                    abo="City of Light,Love,and Romance"
                    mo="From $500/"
                />
                <Display
                    img="seventhimg.png"
                    star="starone.png"
                    snum="4"
                    anum="20"
                    cou="Russia"
                    abo="Life's a journey, enjoy the ride."
                    mo="From $230/"
                />
                <Display
                    img="eigthimg.png"
                    star="starone.png"
                    snum="4"
                    anum="1"
                    cou="France"
                    abo="Embrace the French zest for life"
                    mo="From $2000/"
                />
                <Display
                    img="ninth.png"
                    star="starone.png"
                    snum="78"
                    anum="23"
                    cou="Japan"
                    abo="Serenity in Tradition."
                    mo="From $400/"
                />
                <Display
                    img="tenth.png"
                    star="starone.png"
                    snum="11"
                    anum="98"
                    cou="Australia"
                    abo="Place where Adventure Awaits"
                    mo="From $700/"
                />
                <Display
                    img="eleventhimg.png"
                    star="starone.png"
                    snum="90"
                    anum="76"
                    cou="India"
                    abo="Nature's Verdant Symphony"
                    mo="From $1000/"
                />
                <Display
                    img="twelthimg.jpg"
                    star="starone.png"
                    snum="43"
                    anum="69"
                    cou="Channapatna"
                    abo="Bikes are not for sale"
                    mo="From $200000/"
                />
            </div>
        </div>
)
}

ReactDOM.render(<Page />,document.getElementById("root"));