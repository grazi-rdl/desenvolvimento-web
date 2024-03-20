const Hero = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.alt} width={100}></img>
        </div>
    );
}
const Enemy = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.alt} width={100}></img>
        </div>
    );
}
const Arena = (props) => {
    return (
        <div>
            <Hero name = "Hua Cheng" img = "https://i.pinimg.com/564x/c6/2c/9a/c62c9acb791dee365026e2ec8a87c5ef.jpg" alt="Heaven Official's Blessing: Hua Cheng"/>
            <Enemy name ="Bai Wuxiang" img = "https://i.pinimg.com/564x/0b/0d/3e/0b0d3e81d68de7bf52bf7ab083251b0c.jpg" alt="Heaven Official's Blessing: Bai Wuxiang"/>
        </div>
    );
}

const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export {Arena, World};